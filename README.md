# Smart Shopping Website Portal

**Subject:** Web Technology 1 (AD124PE507.1) \| **CCE-5:** Unit V Mini Project \| **Roll No:TY2627AID009**

&nbsp;**Repository name:** WT\_CCE5\_09\_SmartShoppingPortal

## Problem Statement

Small shops and students need a simple online store front-end to browse products, add them to a cart and place an order. This portal is a single page application (SPA) built with HTML, CSS and JavaScript only. Users are customers who want to shop quickly without page reloads.

## Features

- Header, Navigation, Product listing, Cart and Footer  
- SPA navigation without full page reload (hash based client-side routing)  
- Product data loaded from the JSON files in `data/` using `fetch`  
- Category filter and product search  
- Shopping cart with add, remove and quantity change, saved in `localStorage`  
- Checkout form with client-side validation (name, email, phone, address, PIN)  
- Responsive layout for mobile and desktop

## Project Structure

```
index.html          page layout (header, nav, main, footer)
style.css           styling and responsive rules
js/
  data.js           loads the product JSON files, cart data and localStorage
  component.js      reusable pieces: product card, cart row
  views.js          draws the product list and the cart
  route.js          SPA navigation, back/forward buttons, first page
  app.js            entry point: search, category filter, checkout form, start-up
data/
  electronics.json  Electronics products
  fashion.json      Fashion products
  home.json         Home products
README.md           documentation
```

## How to Run

1. Open the folder in VS Code.  
2. Install the **Live Server** extension.  
3. Right click `index.html` and choose **Open with Live Server**. (fetch needs a server, so do not open the file by double-clicking.)

## Testing Done

- All 4 routes open without reload; unknown route shows 404  
- Cart survives page refresh (localStorage)  
- Invalid checkout inputs show error messages  
- Layout checked at mobile width (resize browser)

## Screenshots

Add screenshots here (Home, Products, Cart, Checkout, Mobile view):

- `screenshots/home.png`

## Technologies

HTML5, CSS3, JavaScript (ES6), JSON, Git and GitHub