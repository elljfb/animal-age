import os
import re

def add_blog_link(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Check if blog link already exists
    if 'href="blog/">' in content or 'href="./">' in content:
        print(f"Blog link already exists in {file_path}")
        return
    
    # Determine the correct relative path for the blog link
    is_blog_page = 'blog/' in file_path
    blog_link = './' if is_blog_page else 'blog/'
    
    # Find the navigation section
    nav_pattern = r'<nav>'
    nav_match = re.search(nav_pattern, content)
    
    if nav_match:
        # Find the position of the last navigation item
        last_nav_item = re.search(r'<li><a href="[^"]*">[^<]*</a></li>\s*</ul>', content)
        
        if last_nav_item:
            # Insert the blog link before the closing </ul>
            insert_pos = last_nav_item.start()
            new_content = content[:insert_pos] + f'            <li><a href="{blog_link}">Blog</a></li>\n        </ul>'
            
            # Write the updated content back to the file
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f"Added blog link to {file_path}")
        else:
            print(f"Could not find last navigation item in {file_path}")
            # Debug output
            print(f"Navigation section content: {content[nav_match.start():nav_match.start()+200]}")
    else:
        print(f"Could not find navigation section in {file_path}")
        # Debug output
        print(f"File content preview: {content[:200]}")

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                print(f"\nProcessing: {file_path}")
                add_blog_link(file_path)

if __name__ == "__main__":
    current_dir = os.getcwd()
    process_directory(current_dir) 