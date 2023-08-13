# Content

- MERN Stack
  - Introduction to React JS
- React
  - React.createElement
  - ReactDOM.render
- JSX
  - Embedding Expressions
  - Nesting elements

# Introduction to React JS

- React JS is a open source library used to build user interfaces.
  - developed by facebook
  - why?
    - open source
    - good performance of websites
    - less line of code
    - code can be easily understood
    - less time
      reusable code
  - advantages:-
    - larger community
    - easy to learn
    - developer tool set

# Creating HTML Elements

- creating html elements using js code

  - script tag with 'type' with value "text/javascript" is used to write the js code in html file

  - creating a element

    > document.createElement(tag)

  - displaying element

    > containerElement.appendChild(newElement)

- link element is used to combine html and css

  - add link element in head element
  - 'rel' is attribute name and its value is "stylesheet"
  - 'href' is attribute name value and its value path of css file

- creating html elements using react js

  - add React CDN in head element
  - script tag with 'type' whose value is "module" is used to write the react code in html file

  - creating a element:-

    > React.createElement(type,props)

    - type -- tag name (h1,p,div etc)
    - props -- className,onClick,id,children etc

  - displaying element:-

    > ReactDOM.render(newElement,containerElement)

    - newElement = whatToRender
    - containerElement = whereToRender
    - return only one element

- creating html elements using JSX code

  - React JS introduced JSX which is similar to html syntax
  - react+jsx
  - add React CDN in head element
  - script tag with type "text/babel" is used to write the JSX code in html file
  - Babel
    - is a JS compiler
    - compiles/translate to js code
  - Nested JSX Elements --using (div element)
  - using {} we can embed variables and expressions in JSX

- Including External Js file in HTML:-

  - using script element with
  - src attribute whose value is the path of the js file
  - type attribute with respective type of the code
