---
#sd
title: Template Post Title  # The title of your post
date: 2024-01-01T00:00:00Z  # The publication date
draft: true  # Set to false when ready to publish

# Optional standard fields
description: "A brief description of your post"  # Used for SEO and listings
tags: 
  - tag1
  - tag2  # Add relevant tags
categories:
  - category1  # Organize posts into categories
slug: "custom-url-slug"  # Custom URL path
aliases: 
  - /old-url1
  - /old-url2  # URL redirects
featured: true  # Mark as featured post
featured_image: "path/to/image.jpg"  # Main image for the post
featured_image_alt: "Image description"  # Alt text for accessibility

# Hugo-specific fields
publishDate: 2024-01-01T00:00:00Z  # Scheduled publish date
expiryDate: 2125-01-01T00:00:00Z  # When to unpublish
lastmod: 2024-01-01T00:00:00Z  # Last modified date
weight: 1  # Sorting weight
type: "post"  # Content type
layout: "single"  # Layout template
outputs: 
  - html
  - rss  # Output formats
resources:
  - src: "image.jpg"
    name: "header"
    title: "Image Title"
    params:
      caption: "Image caption"
      credit: "Photographer Name"

# Custom fields (based on existing posts in this project)
poster: "path/to/poster.webp"  # Used for social media sharing
data_files:
  - file: "data.csv"
    type: "dataset"
    description: "Experimental data"
---


The featured image is presented above.  
Start writing your post content here using Markdown syntax.

## Sections

Organize your content into sections.

### Code Blocks

```python
def example():
    print("Hello World")
```

### Images

#### Basic Markdown Image
![Alternative text](featured.png)

#### Hugo Figure Shortcode

##### Minimal 
{{< figure src="featured.png" >}}  

##### Full featured
{{< figure src="featured.png" 
    title="Image Title" 
    caption="Image caption"
    alt="Alt text"
    class="my-class"
    link="https://example.com"
    target="_blank"
    rel="noopener"
    width="400"
    height="100"
    loading="lazy"
    >}} 

Figure Shortcode Options:
- src: Path to image (required)
- title: Image title (hover text)
- caption: Description below image  
- alt: Accessibility text
- class: CSS class
- link: URL to link image to
- target: Link target (_blank, _self)
- rel: Link rel attribute
- width/height: Dimensions in px
- loading: lazy/eager loading

### Links

[Link text](https://example.com)

### Lists

- Item 1
- Item 2
- Item 3

1. First
2. Second
3. Third
