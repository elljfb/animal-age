import os
from datetime import datetime
import xml.etree.ElementTree as ET
from xml.dom import minidom

def generate_sitemap():
    # Create the root element
    urlset = ET.Element('urlset')
    urlset.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    
    # Base URL of the website
    base_url = 'https://animalage.info'
    
    # Get current date in W3C format
    current_date = datetime.now().strftime('%Y-%m-%d')
    
    # List of main pages
    main_pages = [
        'index.html',
        'pet-name-generator.html',
        'pet-calorie-calculator.html',
        'pet-cost-calculator.html',
        'all-animals.html'
    ]
    
    # Add main pages to sitemap
    for page in main_pages:
        url = ET.SubElement(urlset, 'url')
        loc = ET.SubElement(url, 'loc')
        loc.text = f'{base_url}/{page}'
        lastmod = ET.SubElement(url, 'lastmod')
        lastmod.text = current_date
        changefreq = ET.SubElement(url, 'changefreq')
        changefreq.text = 'weekly'
        priority = ET.SubElement(url, 'priority')
        priority.text = '1.0'
    
    # Get all animal HTML files
    animal_files = [f for f in os.listdir('.') if f.endswith('.html') 
                   and f not in main_pages and f != 'index.html']
    
    # Add animal pages to sitemap
    for page in animal_files:
        url = ET.SubElement(urlset, 'url')
        loc = ET.SubElement(url, 'loc')
        loc.text = f'{base_url}/{page}'
        lastmod = ET.SubElement(url, 'lastmod')
        lastmod.text = current_date
        changefreq = ET.SubElement(url, 'changefreq')
        changefreq.text = 'monthly'
        priority = ET.SubElement(url, 'priority')
        priority.text = '0.8'
    
    # Create a pretty-printed XML string
    xmlstr = minidom.parseString(ET.tostring(urlset)).toprettyxml(indent="  ")
    
    # Write the sitemap to file
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(xmlstr)

if __name__ == "__main__":
    generate_sitemap() 