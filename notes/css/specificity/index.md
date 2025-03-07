# 

The word **cascade** in CSS stands for the order in which styles are applied to an element. The cascading nature 
determines the priority of styles applied to an element. The styles can be applied to an element in multiple ways. 
This is determined based on inheritance, specificity, and order of styles. This nature of styling also makes sure 
there are no conflicts between styles applied to an element. If the same element has two styles applied to it, then 
the cascading rules will determine which styles will be applied to the element.

## Inheritance

Inheritance is the process by which styles are passed down from parent elements to child elements. CSS inheritance 
acts at the property level. When a CSS property is set, it may be inherited by all children of this element in most 
cases. For example, when 
applying 
fonts to the whole webpage, you can simply apply it to 
the `body` element and all 
children elements will inherit it. However, when applying a background color to the `body` element, it will not be 
inherited by the children elements.

By cutting repetition, inheritance helps us create our CSS far more succinctly. We thus don't have to specifically define every property in every child element.