# Introduction

CSS stands for Cascading Style Sheets. It is used to style web pages written in HTML and XHTML. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. It can control the layout of multiple web pages all at once in a single file with extension `.css`.

CSS like HTML is constantly evolving. The latest version of CSS is CSS3. Learning CSS is relatively easy compared to other programming languages. CSS is not really a programming language but a style sheet language. You can quickly pick up different style properties and apply them to your HTML elements.

You will use web pages written with HTML markup language to apply CSS styles in this tutorial. So, it's essential that you have basic understanding of HTML before going through this tutorial.

## What can you do with CSS?

- All web pages are written in markup language. If they didn't have CSS, they would all look similar with plain text. CSS provides them the different look and feel. You can think of HTML as the building then CSS as the paint and the interior decorations you apply to the building.
- You can adjust the color, layout and size of different text items in your web page.
- You can also perform basic animations and transitions using CSS.
- You could also make your website look different on different devices. For instance, on a mobile device, your website would look different compared to a desktop and it would yet again look different when printed on a paper. This is called **responsive design** which will be disucssed in later tutorials.

All the web browsers support CSS. Most of the websites you use in your daily life are styled with CSS. So, it's essential to learn CSS to make professional looking websites.

## CSS Example

CSS syntax is relatively simple to understand. Basically, it consists of a selector anda declaration block. Here, the selector can be HTML elements to select what styles get applied to specific elements. The block could have one or more property and value combinations. The values defined for each property is what defines different styles for HTML elements. Most CSS properties are usually self-explanatory but you will learn about them in detail in upcoming lessons.

```css
selector {
    property1: value1;
    property2: value2;
}
```

For example, below is a simple CSS code that changes the color of the text of the whole page to red and background color to light grey.

```css
body {
    color: red;
    background-color: lightgrey;
}
```