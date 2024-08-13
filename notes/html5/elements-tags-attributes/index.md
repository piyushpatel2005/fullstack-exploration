# Elements, Tags and Attributes in HTML

Although HTML is plaing text, it needs some structure for browsers to understand it. This structure is provided by elements, tags and attributes in HTML.

## Tags

HTML tags are keywords surrounded by angle brackets like `<html>`. The browser uses tags to interpret the content between the tags. Most tags require an opening and a closing tag. The closing tag has a forward slash before the tag name like `</html>`. Some tags are self-closing like `<img>` or `<br>`.

Let's actually create the web page with HTML5 tags. Write following in your browser.

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

This will display exactly as the previous one with `Hello World` as a heading. However, with this kind of structure, we are complying with the HTML5 standards. Previously when we simply wrote `Hello World`, the browser was guessing what to do with it. Now, we are telling the browser that this is an HTML5 document. Let's break down the tags used in this example:

- `<!DOCTYPE html>`: This is the **document type declaration**. It tells the browser that this is an HTML5 document. If you don't use it, browsers will assume and some browsers may behvae differently.
- `<html>`: This is the root element of the HTML page. It wraps all the content on the page. So, tags have opening `<html>` and closing tags `</html>`.  Everything in between these tags is considered as HTML content and it can consist of simple text or other HTML tags.
- `<body>`: This is the body element of the HTML page. It wraps the content that will be displayed on the web page. In this case, it wraps only `Hello World` heading. 
- `<h1>`: This is a heading element. In this case, this tag only contains plain text without any other nested tags. You will learn more about heading tags later in this series.

It's important to note that these tags are indented so that it's easy to read and understand the structure of the HTML document. It's not necessary to indent the tags but it's a good practice to do so for readability. The white spaces around tags is ignored by the browser.

### Self-closing tags

Some tags are self-closing. This means they don't have a closing tag. For example, `<img>` tag is used to display images on the web page. There is also `<br>` tag which is used to insert a line break. You can write these tags without slash at the end like `<img>` or `<br>` or with slash like `<img />` or `<br />`. Both are accepted way of writing HTML5 compliant code. 

## Elements

An element is a combination of an opening tag, content and a closing tag. 

```html
<tagname>content</tagname>
```

For example, `<h1>Hello World</h1>` is an element. The opening tag is `<h1>`, the content is `Hello World` and the closing tag is `</h1>`. Elements can contain other elements. For example, `<html>` element contains `<body>` element which contains `<h1>` element. In below example, `<body>` element contains `<h1>` element.

```html
<body>
    <h1>Hello World</h1>
</body>
```

So, everything between opening tag and closing tag is considered an element. 

## Attributes

HTML tags can have attributes. Attributes provide additional information about the element. Attributes are always specified in the starting tag and are written in name/value pairs like `name="value"`. For example, `<a>` tag is used to create hyperlinks. It has an attribute called `href` which is used to specify the URL of the page the link goes to. 

```html
<a href="https://www.example.com">Visit My Awesome Website</a>
```

It's possible that each element may have some common attributes. For example, `id` attribute is used to uniquely identify an element in the HTML document and can be applied to any element. 

```html
<h1 id="main-heading">Hello World</h1>
<p id="main-paragraph">This is a paragraph.</p>
```

> It's not necessary to remember all attributes. You can always refer to the documentation when you need to use an attribute or your code editor can help you with auto-suggestions. 

Some elements have specific attributes which are only applicable to them. For example, `<img>` tag has `src` attribute which is used to specify the URL of the image to be displayed. 

```html
<img src="my_cool_image.jpg" />
```

You'll learn more about attributes in the upcoming tutorials for each element.
