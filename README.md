<h1 style="text-align: center">React Js Notes</h1>

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

```js

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

# Ep-02 Igniting Our app

    We need to optimise our app before pushing it to production.
    There are lot of packages need to make app production ready.

    npm init
    npm init -y (skip lots of things)
    It will create package.json(configuration file) file.

## Bundlers

Create react app behind the scene uses webpack bundler
Webpack , parcel and vite are bundlers

    npm install -D parcel

This will install node_modules and package-lock.json in the app.

**-D means dev dependency, required during development.**
We will install parcel as a dev dependency.

**^** upgrades to minor versions(Carrot)

**~** upgrades to major versions(Tilde)

**major.minor.patch**

package-lock.json -> tells the exact verison of the package installed.
package.json -> conatains ~ and ^ . and meta data of the application

    npx parcel index.html
    npx install react
    npm install react-dom

# parcel

Parcel ek bundler hai. Iska main kaam aapke code ko lena, usse bundle karna (chhota aur optimized banana), aur browsers ke samajhne layak banana hai.

#Dist folder (Distribution Folder):

Jab aap Parcel ko run karte ho (ya toh development mode mein ya production build ke liye), toh woh aapke saare React components, CSS, JavaScript, images, etc., ko process karta hai.

Is saare processed aur bundled code ko woh dist folder mein rakhta hai. Ye woh folder hai jiske contents ko aapko deploy karna hota hai web server par. Ismein aapki final index.html, bundled JavaScript files, CSS files, aur assets hote hain.

Kyu banta hai: Parcel by default aapke optimized build output ko dist folder mein store karta hai, taaki aapko pata chale ki aapki final website ki files kahan hain.

# parcel-cache folder (Cache Folder):

Parcel bahut fast hone ke liye jaana jaata hai, aur iska ek bada reason uska caching mechanism hai.
parcel-cache folder mein Parcel un files aur modules ka cache rakhta hai jinhe usne pehle hi process kar liya hai.

Kyu banta hai: Jab aap code mein koi chhota sa badlav karte ho, toh Parcel poore project ko dobara process nahi karta. Woh sirf badle hue parts ko dobara process karta hai aur baki sab kuch cache se utha leta hai.
Isse development server ka start-up time aur hot reloading bahut fast ho jaati hai.

Aapko is folder ko delete karne ki zaroorat nahi hoti agar aapko build-related issues face ho rahe hain, kyuki isse cache clear ho jaata hai.

- Creating a dev build
- Local server
- HMR(Hot module Replacement)
- File watching algorithm(written in c++)
- Caching - faster builds
- Image Optimization
- Minification
- Bundling
- Compresing
- Consistenr Hashing
- Code Splitting
- Differential Bundlig(To support older browsers) browserlist
- Diagnostics
- Error Handling
- To host app on https
- Tree shaking(Remove unwanted code)
- Different build for dev and prod

        npx parcel build index.html

- The above command is for prod build

# Ep-03 Laying the foundation

    React.createlement() ===> Object ===> HTMLElement(render)

JSX is not HTML inside JS.
JSX is HTML like syntax.

JS engine only understand Javascript .It does not understand the JSX or react. So parcel transpiled the React code so that browser can understand it. Parcel wit help of babel does the transpilation.

    JSX ===> React.createlement() ===> Object ===> HTMLElement(render)

# Ep-04 Talk is cheap, show me the code

    not using keys(not acceptable) <<<< index as a key <<<<< unique id(best practice)

# Ep-05 Let's get Hooked

There are two types of Export/Import

- Default Export/Import

        export default component;
        import Component from "path";

- Named Export/Import

        export const Component;
        import {Component} from "path";

## Hooks

- A hook is just a normal javascript function.
- There are multiple react hooks.
- 2 very imp hooks useState() , useEffect()
- useState() -> to manage states
- useEffect() -> to manage side effects like api calls, subscriptions , timers ,mutations and more.

**Whenever a state variable updates react re-render the component .It does it very fast.**

**React makes DOM operations very fast, this is where react is best than Angular and Vue**

**React uses re-conciliation algo (React Fiber)**

```
React creates a virtual dom of the UI.
Virtual DOM is a representation of the actual DOM.
Virtual DOM is an object.

Diff algorithm finds out the difference between the vitual dom and the previous virtual dom.
```

**Always create a state variable inside the function only that too on the top only never create a state varaible inside if else or for loop.**
