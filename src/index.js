import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/* 
1. fix the syntax error 'Expected corresponding JSX closing tag for <h1>'
2. print current year to the screen instead of the expression 'new Date().getFullYear()'
3. print the value of the firstName variable to the screen instead of the name of the variable
4. make the comment an actual JSX comment
5. add the 'red' css className attribute to the h3 element
*/

function App() {
  const firstName = "Sarah";
  return (
    <div>
      <h1>Buggy Code Challenge</h1>
      <p>This year is: {new Date().getFullYear()}</p>
      <p>firstName is my favorite crusher of skillz!</p>
      {/* this comment shouldn't appear on the screen, just in the code */}
      <h3 className="red">Make me colorful!</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
