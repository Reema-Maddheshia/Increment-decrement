import React,{useState} from "react";

 const App = () => {
  const state = useState();
const [count,setCount]=useState(0);

const IncNum=()=>
{
  setCount(count+1);
  //console.log('clicked' + count++)
  
};

const DecNum=()=>
{
  setCount(count-1);
};

   return(
     <>
  <h1>{count}</h1>
  <ul>
  <button onClick={IncNum}>Click me to increase</button>
  <button onClick={DecNum}>Click me to decrease</button>
  </ul>
  
  </>
   );

 };

 export default App;