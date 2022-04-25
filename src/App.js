import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //  1.state
  const [result1,setResult1] = useState([])
  

  let result = ()=>{
   // alert('ok')
   let x = parseInt(prompt('enter value'))
   //alert(x)
   //console.log(x)
   setResult1([...result1,x])
   
  
  }
  // 3. return statement

  return (
    <div className="App">
      <button onClick ={()=>{result()}}>result</button>
      {
       result1.map(function(currentValue,index,arr){
         //console.log(currentValue)
         return (
           <h1 key={index}>{currentValue}</h1>
         )

         
       })
         
      }
    </div>
  );
}

export default App;
