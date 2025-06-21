# Emmets

    Set of shortcuts.
    To Speed up the process of writing code.

# CDN(Content Delivery Network)

    Network of servers that delivers content to users.
    Fast Loading Time-> Delivers fast content.

# What is the crossorigin Attribute in a CDN Link?

    The crossorigin attribute is used on HTML elements like <script>, <link>, and <img> when they load resources from a different origin (domain, protocol, or port) than the current document.

# React.createELement()

const heading=React.createElement("h1",{"id":"heading1"},"This is a heading")

Here the console.log(heading) will print a object .
React.createElement(), returns a object to us

root.render()-> render function will take an object and will convert it into html and will render it in the dom.

```

const myElement = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, React!'
);

root.render(myElement)


output->
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello, React!'
  },
  key: null,
  ref: null,
}
```
