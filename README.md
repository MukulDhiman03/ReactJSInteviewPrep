<h1 style="text-align: center">React Js Notes</h1>
React is a library .

Main difference between library and framework is that library takes minimum efforts to put in to the code.

# Emmets

    Set of shortcuts.
    Use to Speed up the process of writing code.

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

If we remove package.json them we cannot genretae the node_modules, because package.json is the core file that defines project metadata.

If we remove package-lock.json we can generate the node_modules, but it will lead to inconsistent installations.

**-D means dev dependency, required during development.**
We will install parcel as a dev dependency.

**^** allows updates to minor and patch versions(Carrot)

**~** allows updates to the patch version only(Tilde)

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

Browser does not understand the react , so babel convert the react code into relable format (ES6) for the browser to understand.

JSX is not HTML inside JS.
JSX is HTML like syntax.

JSX prevents injection attacks.

JSX does code sanitization as well.

If we write a component inside other component that is known as component composition.

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

**Whenever a state variable gets updated, react re-render the component .It does it very fast.**

**React makes DOM operations very fast, this is where react is best than Angular and Vue**

**React uses re-conciliation algo (React Fiber)**

```
React creates a virtual dom of the UI.
Virtual DOM is a representation of the actual DOM.
Virtual DOM is an object.

Diff algorithm finds out the difference between the vitual dom and the previous virtual dom.
```

**Always create a state variable inside the function only that too on the top only never create a state varaible inside if else or for loop.**

# Ep-06 Finding the path

## useEffect()

```js
    useEffect(()=>{
        // callback function
    },[dependency array])
```

- It runs every time after rendering of the component, but dependency array changes the behavious of useEffect().

- If no dependency array , that means useEffect() call on every render.

- If empty dependency array , then it gets call on initial render and just for once.

- If dependency array has something , then it will call after the initial render and when the state mentioned in dependency gets change.

```js
<div className="app">
  <Header />
  <Outlet />
</div>;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
```

- Anchor tag reload the whole page but not React Link tag(SPA)

        2 types of routing in web app

        client side routing
            browser has all the pages on the client side only

        server side routing
            make a network call and the page is coming from server

# Ep-08 Lets'get Classy

A classComponent is a normal javascript class.

```js
class UserClass extends React.Component {
  render() {
    return <div></div>;
  }
}

export default UserClass;
```

```js
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <div></div>;
  }
}
export default UserClass;
```

React.Component is the parent class.

Whenever an instance of the class is created the constructor is called.

The Necessity of super():

- super() essentially calls the constructor of the parent class (React.Component in this case).

Why super(props)?

- The React.Component constructor (which super() calls) is responsible for setting up the component's this.props property.

- By passing props to super(), you are ensuring that the props passed to your UserClass component are correctly initialized and made available as this.props within your component's constructor and throughout its lifecycle methods.

```js
class UserClass extends React.Component {
  constructor(props) {
    super(); // Call parent constructor without props
    console.log(this.props); // This would be undefined here in the constructor
  }
  render() {
    return <div>{this.props.someProp}</div>; // This would work correctly here
  }
}
```

## How to create state inside a class component?

        this.state={
        state1:val,
        state2:val
        }

```js
constructor() {
    super();
    this.state = {
      count: 0,
      count2: 1,
    };
}
```

## How to use state inside a class component?

        this.setState({
            this.state.state1:this.state.state1+1.
            this.state.state2:this.state.state2+1.
        })

```js
<h1>count:{this.state.count}</h1>
<button
    onClick={() => {
    this.setState({
        this.state.count: this.state.count + 1,
        this.state.count2: this.state.count2 + 1,
     });
 }}
>
Count Increase
</button>
```

## Life cycle of class based components.

- Phele parent class ka constructor call hoga phir render call hoga parent class ka then child class ka constructor call hoga then render call hogas child class ka.

        Parent Cons. => Parent render => Child Cons. => Child renders

- If a single class has Cons, render()s and ComponentDidMount().

        Cons => render => Component didmount

- Parent and child relationship

        Parent Cons => parent render => chid const => child render => cild ComponentDidMount => parent ComponentDidMount

## ComponentDidMount()

- To make an API call
- api call, it will re render the component

        - Parent Cons
        - Parent render
            First Child Cons
            First Child render

            Second Child Cons
            Second Child render

            First Child componentDidMount
            Seond Child componentDidMount
        - Parent componentDidMount

## componentDidUpdate()

- componentDidUpdate is a lifecycle method in React class components that is invoked immediately after a component's updates are flushed to the DOM.

## componentWillUnmount()

- It is invoked immediately before a component is unmounted and destroyed.

# Ep-09 Optimizing our app

- We can create our own custom hook .

```js
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      console.log("You are now connected to the network.");
      setOnlineStatus(false);
    });
    window.addEventListener("online", (event) => {
      console.log("You are now connected to the network.");
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
```

## Lazy Loading

- Chunking
- Code Splitting
- Lazy Loading
- Dynamic Bundling
- Hur componenet ka alag se bundle buna rhe hai
- only when we will go to grocery page then only that component code will get load into the browser(On demand loading).

```js

const About = lazy(() => import("./components/About"));

{
    path: "/about",
    element: (
    <Suspense fallback={<h1>Loading.............</h1>}>
      <About />
    </Suspense>
  ),
},

```

# Ep-10 Data is the new oil

## Higher order component

A component takes an component as an input and enhances it and retutn.

Lifting the state up

Controlled component-> if the states are controlled by parent component(via props) then the child component is controlled component.
Unontrolled component-> if the states are controlled by component only then the component is controlled component.

Difference between redux and context api.
