import React from "react";
import tagName from "./tagname";

const forward=React.forwardRef

type element=HTMLDivElement

interface Props
  extends React.ComponentPropsWithoutRef<'div'> {
    "data-capture"?:string;
  }

/**
 * First you need to import 
 ```js
 import { Capture } from "capture-dom";
 ```
 After that you can use this component like this
```
const DemoComponent = () => {
  return (
    <Capture className="center">
      <div>
        <h1>I am inside Capture </h1>
      </div>
    </Capture>
  );
};

export default DemoComponent;
```
 */

const Capture = forward<element, Props>((props, ref) =>{
  return(
    <div ref={ref} data-capture={tagName} {...props}/>
  )
}
);

export default Capture;