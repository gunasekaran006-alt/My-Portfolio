# 🚀 Gunasekaran's Web Development Portfolio

Welcome to my personal portfolio repository! I am Gunasekaran, an **Aspiring Software Engineer & AI-Enhanced Full Stack Development Intern** at Entri. 

This repository tracks my daily progress, learnings, and the step-by-step construction of my personal portfolio website.

## 🎯 Objective
Instead of just keeping my daily class codes in separate folders, I am implementing a **Hybrid Approach**. Every day, I apply the new concepts I learn directly into this main portfolio project. This way, I am building a real-world project while keeping track of all HTML tags and features I learn.

## 🛠️ Technologies Used So Far
* HTML5

---

## 📅 Day-by-Day Progress Log

### ✅ Day 1: Portfolio Setup & Basic Tags
* Created the basic HTML boilerplate structure.
* Used Heading tags (`<h1>` to `<h6>`) and Paragraph (`<p>`) tags for personal introduction.
* Added an Anchor tag (`<a>`) to link my daily GitHub practice repositories.



### ✅ Day 2: Inline, Block Elements & Multimedia
* Structured the webpage using `<div>` elements.
* Highlighted key text using `<span>` tags with inline styling.
* Added Multimedia: Profile Picture (`<img>`), Audio introduction (`<audio>`), and a Video (`<video>`).
* Created a "Skills" section using Unordered Lists (`<ul>`) and a "Journey" section using Ordered Lists (`<ol>`).



### ✅ Day 3: HTML5 Semantic Tags
* Upgraded the site structure from generic `<div>` tags to **Semantic HTML5**.
* Implemented `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` for better SEO and accessibility.
* Added **Internal Linking** in the Navigation bar to jump to different sections of the page.



### ✅ Day 4: HTML Forms & Validations
* Created a comprehensive "Client Booking / Contact Form".
* Implemented 12 different input types: `text`, `email`, `password`, `number`, `date`, `time`, `range`, `radio`, `file`, `<select>` dropdown, `<textarea>`, and `checkbox`.
* Added Form Validations (`required`) and linked labels with inputs using the `for` and `id` attributes.
* Created a separate `success.html` page for form submission redirection.



### ✅ Day 5: HTML Tables, Figures & E-Commerce Elements
* Added a new "Services & Pricing" section.
* Showcased my best project using `<figure>` and `<figcaption>` tags.
* Created a professional pricing structure using HTML Tables (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th>`, `<td>`) with `colspan`.
* Integrated a "Quick Support Query" form using the day's learnings without removing any previous code.



### ✅ Day 6: Introduction to CSS & Styling
* Stepped into the world of web design by implementing **CSS (Cascading Style Sheets)**.
* Connected an External CSS file (`style.css`) to the main HTML document using the `<link>` tag.
* Learned and applied different types of CSS Selectors: 
  * **Element/Tag Selectors** (e.g., `body`, `h1`, `p`)
  * **ID Selectors** (e.g., `#main-name`, `#highlight`)
  * **Class Selectors** (e.g., `.header-section`, `.section-box`)
* Used CSS properties like `color` and `background-color` with both predefined color names and Hex codes (`#27C8F5`).



### ✅ Day 7: CSS Box Model, Dark Theme & Card UI Layout
* Mastered the **CSS Box Model**, understanding the crucial relationship between `margin`, `padding`, and `border`.
* Implemented a global **Dark Theme** by manipulating the `body` background and text colors.
* Engineered a professional **Card Layout** (`.card`) to display services and featured projects, an industry standard for modern UI.
* Designed clean, structured Call-to-Action (CTA) buttons (`.btn`, `.info`) by removing default borders/outlines and adding padding, background colors, and border-radius.
* Created a highly visible "Call to Action" banner using `border`, `border-radius`, and `text-align: center`.



### ✅ Day 8: CSS Flexbox & Core Expertise Showcase
* Mastered **CSS Flexbox** (`display: flex`) to build modern, responsive web layouts without relying on floats or complex margins.
* Engineered a fully responsive **Navigation Bar** (Shopyfy UI) using `justify-content: space-between` and `align-items: center`.
* Created a **Flexible Card System** using `flex-wrap: wrap` and `gap` to showcase my Core Expertise (AI-Enhanced MERN Apps, E-Commerce Operations, and Data-Driven Insights).
* Adopted the **"Live Record"** methodology: Successfully integrated new Flexbox sections without deleting previous days' work, turning this portfolio into a complete, evolving digital learning diary.



✅ Day 9: CSS Grid Architecture & Certificate Gallery Showcase

* Mastered **CSS Grid** (`display: grid`) to build complex, two-dimensional web layouts and masonry-style galleries without relying on external libraries.
* Engineered a fully responsive **Certificate & Project Gallery** using `grid-template-columns: repeat(6, 1fr)` and `gap` to elegantly display my MERN specialization and operational achievements.
* Created a **Dynamic Sizing System** utilizing `grid-row: span` alongside `object-fit: contain` and `cover` to ensure landscape certificates and portrait project views fit perfectly within their containers without any awkward edge cropping.
* Continued the **"Live Record"** methodology: Successfully implemented advanced Grid features and premium inner-zoom hover effects (`transform: scale`) while perfectly preserving all previous days' work, further expanding this evolving digital learning diary.



# Day 10: Advanced CSS Positioning & UI Polishing 🚀

## 📖 Overview
In Day 10, we mastered one of the most powerful and critical concepts in web development: **CSS Positioning**. We successfully transformed our static portfolio into a dynamic, modern web application by implementing a fixed navigation bar and interactive image overlays, bringing the UI to an international standard.

## 🛠️ Concepts Learned & Applied

1. **CSS Positioning (`relative`, `absolute`, `fixed`)**:
   - **Fixed Full-Width Navbar**: Engineered an edge-to-edge navigation bar that stays perfectly pinned to the top of the viewport while scrolling, utilizing `position: fixed`, `top: 0`, and `width: 100%`. Managed layering using `z-index: 1000`.
   - **Image Overlay Text**: Applied `position: relative` to the parent container (Masonry grid item) and `position: absolute` to the text element. This allowed the project titles (e.g., "AI Dashboard") to float elegantly over the images.

2. **Advanced Flexbox Integration**: 
   - Replaced raw text separators (`|`) with a robust Flexbox layout inside the fixed navbar. Combined `display: flex`, `justify-content: center`, and `gap: 150px` for mathematically perfect spacing between menu items.

3. **Modern UI/UX Effects**: 
   - Implemented `backdrop-filter: blur(5px)` to give the navbar a premium, semi-transparent "glass-morphism" effect.
   - Designed smooth `transition` animations (`opacity` and `bottom`) for the overlay text to slide up seamlessly on hover.

## 🎯 Key Takeaways
- Achieved a major milestone: Recognized that we are building our own **Custom Premium CSS Framework**. Instead of relying on external libraries like Bootstrap, we independently applied industry-standard naming conventions (e.g., `.container`, `.btn`, `.nav-links`) and wrote the core architecture from scratch.



# Day 11: Advanced Responsive Web Design & UI Polish 📱✨

## 🎯 Objective
To make the entire portfolio 100% responsive across all devices (from 320px tiny mobiles to 1024px laptops) using CSS Media Queries, and to implement advanced UI micro-interactions and bug fixes.

## 🧠 Concepts Learned & Implemented Today

### 1. CSS Media Queries (`@media`)
* Configured specific breakpoints for various devices to ensure a seamless UX:
  * `max-width: 1024px` (Tablets & Small Laptops)
  * `max-width: 768px` (Large Mobiles)
  * `max-width: 480px` (Targeting ultra-small 320px mobile screens)

### 2. Mobile Layout Optimization
* **Flexbox Stacking:** Converted horizontal Flexbox layouts into vertical stacks (`flex-direction: column`) for smaller screens to prevent horizontal scrolling/overflow.
* **Responsive Grid Adjustments:** Dynamically changed the Masonry CSS Grid from 7 columns (desktop) to 4, 2, and finally 1 column (`grid-template-columns: 1fr`) for tiny screens.

### 3. Precision Form Alignment (Bug Fixes)
* Safely contained text inputs, textareas, and select dropdowns within the mobile viewport using `width: 100%` and `box-sizing: border-box`.
* **Radio & Checkbox Fix:** Grouped radio buttons using `div` and `span` with `white-space: nowrap` to perfectly glue the input dots/boxes to their respective labels without awkward line breaks.
* Fixed the native `<input type="file">` button from poking out of the screen using text-overflow properties.

### 4. Advanced UI Micro-Interactions
* **Interactive Pop-Out Zoom:** Mastered the combination of `object-fit: cover` (for perfect grid fitting) and `object-fit: contain` + `transform: scale()` on hover. This allows images to sit flush normally but pop out completely uncut and uncropped when interacted with (`z-index: 100`).
* **Elegant Fade-Out Animation:** Utilized `@keyframes` to create a sophisticated animation where overlay text slides up, stays readable, and seamlessly fades out (`opacity: 0`) in place without jerky downward movements.

### 5. Multimedia Safety
* Secured `<video>` and `<audio>` tags to strictly stay within mobile boundaries without losing their aspect ratio or mysteriously disappearing (fixed the `height: auto` bug for audio).




---
*Consistency is the key! More updates coming soon...*