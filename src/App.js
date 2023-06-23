import unoveo from './unoveo.png';
import './App.css';
import React from "react";
import Calculator from './pages/calculator/calculator';

 


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from './pages/login/login';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={unoveo} className="App-logo" alt="logo" />
      </header>
     
      <div className='calculator'>
        <Calculator />
      </div>
    </div>
  );
}


// function Calculator() {

//   const [content, setContent] = useState(0);
//   const [inputStack, setInputStack] = useState([]);

//   const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//   const funArray = ["AC", "DEL", "UNDO", "REDO"];
//   const opArray = ["+", "-", "*", "/", "="];
//   const inputArray = [];


//   function clickHandle(value, type) {

//     if (type === "num") {
//       value = content + value;
//       setContent(value);
//     } else if (type === "fun") {

//       switch (value) {

//         case "AC":
//           value = ""
//           setContent(value)

//         case "DEL":
//           if (content) {
//             value = content.slice(0, -1);
//             setContent(value)
//           }

//           case "UNDO":
//           value = "to be implemented"
//           setContent(value)

//           case "REDO":
//             value = "to be implemented"
//           setContent(value)
//       }


//     }
//     else {
//       if (value == "=") {
//         inputArray.push({ type: 'number', inputNumber: content })
//         setInputStack(inputStack => [...inputStack, ...inputArray]);

//         let username='nikhil'
//         let password='nikhil'
      

//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' ,  Authorization: 'Basic ' + btoa(username + ':' + password)},
//           body: JSON.stringify(inputStack)
//       };

       
//           axios.post("http://localhost:8080/SecurityDemo4/Calc",requestOptions)
//           .then(response => console.log(response.body))
        
      
       
        
//         value = "=";
//         setContent(value);
        
//       }
//       else {
//         inputArray.push({ type: 'number', inputNumber: content })
//         inputArray.push({ type: 'operation', inputNumber: value })
//         setInputStack(inputStack => [...inputStack, ...inputArray]);
//         value = "";
//         setContent(value);
//       }
//     }


//   }

//                 const numricElements = [];
//                 const funElements = [];
//                 const opElements = [];

//               {
//                 numArray.map((num,index) => {
//                   numricElements.push(
//                     <NumericButtons numClicked={() => clickHandle(num, "num")} number={num} cssId = {"num"+index}/>
//                   );
//                 })
//               }

//             {
//               funArray.map(fun => {
//                 funElements.push(
//                   <FunctionButtons funClicked={() => clickHandle(fun, "fun")} functionBtn={fun} />
//                 );
//               })
//             }

//             {
//               opArray.map(op => {
//                 opElements.push(
//                   <OperationButtons opClicked={() => clickHandle(op, "op")} operationBtn={op} />
//                 );
//               })
//             }





//   return (
//     <>
//       <div className='display'>
//         <Display value={content} />
//       </div>

//       <div className='buttons'>
//         <div className="row ">
//           <div>
//             {funElements}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-1">
//           </div>
//           <div className="col-8">
//             {numricElements}
//           </div>
//           <div className="col-3">
//             {opElements}
//           </div>
//         </div>
//       </div>

//     </>)
// }









































































  // return (
  //   <div>
  //     {renderFunctions()}
  //   </div>
  // )


