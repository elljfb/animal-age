import os
import re
from bs4 import BeautifulSoup
import html

def update_animal_page(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Fix navigation menu (remove duplicate Pet Cost Calculator link)
    nav = soup.find('nav')
    if nav:
        links = nav.find_all('a')
        seen_links = set()
        for link in links:
            href = link.get('href')
            if href in seen_links:
                link.decompose()
            else:
                seen_links.add(href)
    
    # Update main content sections
    main = soup.find('main')
    if main:
        # Convert basic info section to grid
        basic_info = main.find('section')
        if basic_info and 'Basic Information' in basic_info.get_text():
            info_items = basic_info.find_all('li')
            if info_items:
                # Create new grid structure
                grid_div = soup.new_tag('div', attrs={'class': 'info-grid'})
                for item in info_items:
                    div = soup.new_tag('div', attrs={'class': 'info-item'})
                    div.string = item.get_text()
                    grid_div.append(div)
                basic_info.clear()
                basic_info.append(grid_div)
                basic_info['class'] = 'content-section'
        
        # Update description section
        desc_section = basic_info.find_next_sibling('section')
        if desc_section:
            desc_section['class'] = 'content-section'
        
        # Update Did You Know section if it exists, or add it if it doesn't
        did_you_know = main.find(string=re.compile('Did You Know'))
        if did_you_know:
            # Find the parent section and update its class
            did_you_know_section = did_you_know.find_parent('section')
            if did_you_know_section:
                did_you_know_section['class'] = 'content-section did-you-know'
        else:
            # Add new Did You Know section
            did_you_know = soup.new_tag('section', attrs={'class': 'content-section did-you-know'})
            did_you_know.append(soup.new_tag('h2'))
            did_you_know.h2.string = 'Did You Know?'
            ul = soup.new_tag('ul')
            ul.append(soup.new_tag('li'))
            ul.li.string = f"Interesting fact about {soup.title.string.split(':')[0]}"
            did_you_know.append(ul)
            main.append(did_you_know)
        
        # Update Conservation Status section if it exists, or add it if it doesn't
        conservation = main.find(string=re.compile('Conservation Status'))
        if conservation:
            # Find the parent section and update its class
            conservation_section = conservation.find_parent('section')
            if conservation_section:
                conservation_section['class'] = 'content-section'
        else:
            # Add new Conservation Status section
            conservation = soup.new_tag('section', attrs={'class': 'content-section'})
            conservation.append(soup.new_tag('h2'))
            conservation.h2.string = 'Conservation Status'
            p = soup.new_tag('p')
            p.string = f"Learn more about the conservation status of {soup.title.string.split(':')[0]} and current efforts to protect this species."
            conservation.append(p)
            main.append(conservation)
    
    # Update footer
    footer = soup.find('footer')
    if footer:
        footer.p.string = f"© 2025 animalage.info | Learn About Animal Lifespans"
    
    # Write updated content back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

def main():
    # Get all HTML files in the current directory
    html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html' 
                 and f not in ['pet-name-generator.html', 'pet-calorie-calculator.html', 
                             'pet-cost-calculator.html', 'all-animals.html']]
    
    for file in html_files:
        print(f"Updating {file}...")
        update_animal_page(file)
        print(f"Updated {file}")

if __name__ == "__main__":
    main() 