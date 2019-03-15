# Acme Prizes

Acme has tasked you with building a web application which will allow them to give distribute prizes to their customers. There are a limited number of prizes which can be given out.

[Video of Working Demo](https://youtu.be/x1_gM_q3iyY)

Your goal will be to allow the user to make changes to a simple data structure by interacting with a user interface.

Let's refer to this data as the state of the application.

Here is the initial state:
```javascript
const state = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 5,
    Bar: 7,
    Bazz: 9
  }
};
```

This state can be used to dynamically generate the user interface.

The user interface should have event handlers which can be used to alter the state. When the state is altered, the user interface should be re-drawn.

- You must use the html page below.

- You can accomplish this by adding your css and js files.

- You should great a git repository for this project which should be named acme-prizes.

```html
<html>
  <head>
    <title>Acme Prizes</title>
    <script src='./app.js' defer></script>
    <link rel='stylesheet' href='./styles.css' />
  </head>
  <body>
    <div class='container'>
      <h1>Acme Prizes</h1>
      <h2>Prize Inventory</h2>
      <div id='prizes'></div>
      <h2>Customers</h2>
      <div id='customers'></div>
    </div>
  </body>
</html>
```

## Some important concepts which you will be using
- using Object.keys to loop over the keys of an object.
- using template literals in order to generate the html for both prizes and customers
- adding event handlers and capturing what was clicked by using the target properties of the event
- adding data attributes to generated html in order pass along information to event handlers
- using flex box in order to layout the page
- using media queries in order to layout the page on different size devices.
