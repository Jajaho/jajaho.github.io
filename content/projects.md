---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: markdown
    content:
      title: 'Timeline'
      subtitle: ''
      text: |-
        ```mermaid
        gantt
          title Gantt Diagram in block
          dateFormat  YYYY-MM-DD
          axisFormat %y-%m

          section Section
          Task A       :a1, 2024-01-01, 30d
          Task B       :after a1  , 20d
          Task C       : 2024-02-01  , 20d
        ```
    design:
      columns: '1'
  - block: collection
    content:
      title: Selected Projects
      text: I enjoy making things. Here are a selection of projects that I have worked on over the years.
      filters:
        folders:
          - project
    design:
      view: article-grid
      fill_image: false
      columns: 3
---
<!-- The content below is not rendered. -->
<!-- But this is needed for mermaid to be loaded on the page -->
```mermaid 
```
