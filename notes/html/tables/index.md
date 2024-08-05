# HTML Tables

HTML tables are used to display data in tabular form. The `table` tag is used to create a table in HTML.The `table` tag contains one or more `tr` tags. The `tr` tag contains one or more `th` or `td` tags. The `th` tag is used to define a header cell in a `table`. The `td` tag is used to define a data cell in a table. These are like columns in a table whereas `tr` tag is used to define a row in a table.

## Syntax

The most common syntax for creating a table looks like this.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Table</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </table>
</body>
</html>
```

Here, you will get a table with 2 columns and 1 row. The first row is the header row and the second row is the data row.

## `colgroup` and `col` Tags

The `colgroup` tag is used to group a set of columns in a table. The `col` tag is used to define the properties of the columns in a table. The `col` tag is used as a child of the `colgroup` tag. The `col` tag is used to specify the width, alignment, and other properties of the columns in a table.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Table with Header and Footer</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <table>
        <colgroup>
            <col span="2" style="background-color: yellow;">
            <col style="background-color: lightblue;">
        </colgroup>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
    </table>
</body>
</html>
```

In this case, I've grouped two columns as single column using `col span="2"` and applied a background color `yellow` to the columns. Both these columns will have the same background color. The third column has a different background color `lightblue`. The `span` attribute is used to specify the number of columns that the `col` tag should span.

## Attributes

The `table` tag supports the following attributes:

- `colspan`: Specifies the number of columns a cell should span.
- `rowspan`: Specifies the number of rows a cell should span.

In the past, `table` element used to support several styling attributes for border, padding etc. Those are now obsolete and CSS should be used for styling. Therefore, I have not included them here.

## Headers and Footers of a Table

Sometimes you may need to specify headers and footers for a table. You can use the `thead`, `tbody`, and `tfoot` tags to specify these sections. These provide more information to search engine crawlers and screen readers.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Table with Header and Footer</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Footer 1</td>
                <td>Footer 2</td>
                <td>Footer 3</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

### `colspan` & `rowspan` Attribute

Now, what if you want your footer to be in single row and span all the columns? You can use the `colspan` attribute to achieve this. Try below code in your `html` file and see the results. Here, I have also included style to center the text in the footer.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Table with Header and Footer</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        tfoot td {
            text-align: center;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Footer</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

Similarly, if you want a row to span multiple rows, you can use the `rowspan` attribute.

## Table with Caption

Now, what if you want to include a caption in your table providing information about the table.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Table with Caption</title>
    <style>
        table, th, td, caption {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 5px;
        }
    </style>
</head>
<body>
<table>
    <caption>Item with their Prices.</caption>
    <thead>
    <tr>
        <th>Item Code</th>
        <th>Description</th>
        <th>Price</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>item001</td>
        <td>42" TV</td>
        <td>399.99</td>
    </tr>
    <tr>
        <td>item002</td>
        <td>Refrigerator</td>
        <td>799.99</td>
    </tr>
    </tbody>
</table>
</body>
</html>
```

This tutorial provided the basic understanding of how to create tables in HTML. You can further style the tables using CSS.