# Acme Prizes

Acme has tasked you with building a web application.
The Acme Prizes application will allow Acme to distribute prizes to their customers. 
There are a limited number of prizes which can be given out.

[Video of Working Demo](https://youtu.be/x1_gM_q3iyY)

Let's describe the data for this application with the following structure. We will call this structure state because it controls the state of our application.

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

This state will be used to dynamically generate the user interface.

Interacting with the user interface, will in turn alter the state.

When the state is altered, the user interface should be re-drawn.

## Requirements

- You must use the html page below.

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

## Skills that will help you accomplish your goal
- Using Object.keys to loop over the keys of an object.
- Using template literals in order to generate the html for both prizes and customers.
- Adding event handlers and capturing what was clicked by using the target properties of the event.
- Adding data attributes to generated html in order pass along information to event handlers.
- Using flex box in order to layout the page.
- Using media queries in order to layout the page on different size devices.
