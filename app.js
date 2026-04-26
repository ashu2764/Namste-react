import React from "react";
import ReactDOM from "react-dom/client";



// Reart element
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");


const Title = () => (
<h1 className="heading" tabIndex="1"> 
  React with jsx 
  </h1>
  );

const NewComponent = () => {
  return (
   <h2 className="heading" tabIndex="1">
    This is a new component
   </h2>
  );
}

const title = <h1 className="heading" tabIndex="1"> React with jsx with the h1 tag </h1>;

const number = 1000;
 

//react 
//jsx => React.element => React.js object = > HTMLElement (Reder)-< Babel chanegse all jsxcode into the undersatndbel to th borwser and then it render the code in the browser



//React Component
// two types of component
// 1. Functional Component - new way of creating component  
// 2. Class Component - old way of creating component

//1. Functional component is a funtion that returns a React element. It is a simple and easy way to create a component. It is also called a stateless component because it does not have state.
const HeadingComponent = () => {
    return (
      <div id="container">
        {number *  2}
         {title}
        <Title />
        <NewComponent />
        <h1 className="heading" tabIndex="1"> React Functional component </h1>
      </div> 
    );
}

//COMPONENT COMPOSITION-> It is a way to combine multiple components to create a new component. It is also called nesting of components. In the above code, we have created a functional component called HeadingComponent which is composed of Title component and h1 element.

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading); 
// root.render(heading);
root.render(<HeadingComponent />);









