# HTML5 Semantic Tags

HTML5 has introduced several new semantic tags which gives much better options compared to traditional `span` and `div` elements for styling. Historically, the web pages were polluted with lots of `div` elements to grouop content into multiple sections. This has been improved with introduction of new tags in HTML5.

## `<main>` Tag

The `<main>` tag is used to define the main content of a document. This is like the top level container in the body of the document. It should not be nested inside any other sectioning elements like `<article>`, `<aside>`, `<nav>`, `<section>` or `<header>`. It can have multiple `<article>` elements inside it.

```html
<main>
    <article>
        <h1>Article 1</h1>
        <p>Content of article 1</p>
    </article>
    <article>
        <h1>Article 2</h1>
        <p>Content of article 2</p>
    </article>
</main>
```

## `<article>` Tag

The `<article>` is like an article of the web page. If your webpage contains multiple blog posts, news articles, forum posts, etc., then each of these posts should be wrapped in an `<article>` tag. The `<article>` tag can have a `<header>` tag to define the header of the article and a `<footer>` tag to define the footer of the article.

```html
<article>
    <header>
        <h1>Article Title</h1>
        <p>Author: John Doe</p>
    </header>
    <p>Content of the article goes here...</p>
    <footer>
        <p>Published on: 2021-01-01</p>
    </footer>
</article>
```

## `<section>` Tag

The `<section>` tag is used to define sections in a document. It is used to group related content together. The `<section>` tag can have a `<header>` tag to define the header of the section and a `<footer>` tag to define the footer of the section.

```html
<section>
    <h1>Section Title</h1>
    <p>Content of the section goes here...</p>
</section>
```

## `<nav>` Tag

The `<nav>` tag is used to define navigation links in a document. It is used to group navigation links together. The `<nav>` tag can have a `<header>` tag to define the header of the navigation and a `<footer>` tag to define the footer of the navigation.

```html
<nav>
    <header>
        <h1>Navigation</h1>
    </header>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## `<aside>` Tag

The `<aside>` tag is used to define content that is related to the main content of the document. It is used to group related content together. The `<aside>` tag can have a `<header>` tag to define the header of the aside and a `<footer>` tag to define the footer of the aside.

```html
<aside>
    <header>
        <h1>Related Content</h1>
    </header>
    <p>Content of the aside goes here...</p>
</aside>
```

## `<header>` Tag

The `<header>` tag is used to define the header of a document or a section. It is used to group header content together which can include introductory title or subtitles. The `<header>` tag can have a `<h1>` to `<h6>` tag to define the heading of the header.

```html
<header>
    <h1>Title of the article</h1>
    <p>Brief note on the article.</p>
</header>
```

## `<footer>` Tag

The `<footer>` tag is used to represent the footer for the content. It can be used with `<article>`, `<section>`, `<nav>`, `<aside>`, etc. to define the footer of the content. Usually, it contains published data, author information, copyright information, etc.

```html
<footer>
    <p>Copyright &copy; 2024</p>
</footer>
```

## `<figure>` and `<figcaption>` Tags

The `<figure>` tag is used to define media content like images, videos, etc. in a self-contained block. The `<figcaption>` tag is used to define a caption for the media content that's enclosed by `<figure>` tag.

```html
<figure>
    <img src="tiger.jpg" alt="Tiger enjoying vacation time">
    <figcaption>Tiger Enjoying Summer Weather in Bright Sunny Afternoon</figcaption>
</figure>
```

## `<details>` and `<summary>` Tags

The `<details>` tag is used to represent additional details on the topic which can be hidden or shown by clicking on widget. The `<summary>` tag is used along with `<details>` to define a summary or a heading for the details.

```html
<details>
    <summary>Click to view details</summary>
    <p>Details goes here...</p>
</details>
```

This can have `open` attribute to specify if the details should be open by default or whether it should be collapsed and user will have to click in order to open details.

## `<time>` Tag

The `<time>` tag is used to define a date or time in a document. This can be used for web crawlers to identify the time the webpage was published or updated. This can help with SEO of the page.

```html
<p>Published on: <time datetime="2021-01-01">January 1, 2021</time></p>
```

## `<address>` Tag

The `<address>` tag is used to define contact information in a document. This is used for web crawlers to identify the contact information of the business to help with SEO.

```html
<address>
    <p>John Doe</p>
    <p>Email: john@example.com</p>
</address>
```

## `<blockquote>` Tag

The `<blockquote>` tag is used to define a block of quoted text.

```html
<blockquote>
    <p>This is a quoted text.</p>
</blockquote>
```
