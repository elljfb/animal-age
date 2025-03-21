import os
import re

def update_nav(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Define the new navigation HTML
    new_nav = '''<nav>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="pet-name-generator.html">Pet Name Generator</a></li>
            <li><a href="pet-age-calculator.html">Pet Age Calculator</a></li>
            <li><a href="pet-calorie-calculator.html">Pet Calorie Calculator</a></li>
            <li><a href="pet-cost-calculator.html">Pet Cost Calculator</a></li>
            <li><a href="all-animals.html">All Animals</a></li>
        </ul>
    </nav>'''

    # Find and replace the existing nav section
    pattern = r'<nav>.*?</nav>'
    updated_content = re.sub(pattern, new_nav, content, flags=re.DOTALL)

    # Write the updated content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

def main():
    # Get all HTML files in the current directory
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    for file_name in html_files:
        print(f"Updating navigation in {file_name}")
        update_nav(file_name)
        print(f"Updated {file_name}")

if __name__ == "__main__":
    main() 