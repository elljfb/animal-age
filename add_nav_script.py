import os
from bs4 import BeautifulSoup

def add_nav_script(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Check if script already exists
    existing_script = soup.find('script', {'src': 'nav.js'})
    if existing_script:
        return
    
    # Add script before closing body tag
    body = soup.find('body')
    if body:
        script = soup.new_tag('script', src='nav.js')
        body.append(script)
        
        # Write updated content back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))

def main():
    # Get all HTML files in the current directory
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    for file in html_files:
        print(f"Updating {file}...")
        add_nav_script(file)
        print(f"Updated {file}")

if __name__ == "__main__":
    main() 