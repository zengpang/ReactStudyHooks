import React, { useState ,useEffect} from 'react';

//useState
// function App(){
//   const[count,setCount]=useState(0);
//   return(
//     <div className='App'>
//       <p>You clicked{count} times</p>
//       <button onClick={()=>setCount(count+1)}>点击我</button>
//     </div>
//   );
// }

//多个useState
// function App(){
//   const[count,setCount]=useState(0);
//   const[age,setAge]=useState(20);
//   return(
//     <div className='App'>
//       <p>你点击了{count}次数</p>
//       <button onClick={()=>setCount(count+1)}>点击我</button>
//       <p>你的年龄{age} times</p>
//       <button onClick={()=>setAge(age+1)}>点击增加年龄</button>
//     </div>
//   );
// }

//useEffect
// function Counter(){
//   const [count,setCount]=useState(0);
//   const [age,setAge]=useState(0);
//   //相当于componentDidMount 和 componentDidUpdate
//   useEffect(()=>{
//     console.log(`You clicked ${count}`);
//   });//监控所有state,只要有任意state变化都会触发
//   return(
//     <div className='App'>
//      <p>You clicked{count} times</p>
//      <button onClick={()=>{setCount(count+1)}}>Add count</button>
//      <p>You are {age} years old!</p>
//      <button onClick={()=>{setAge(age+1)}}>Add age</button>
//     </div>
//   );
// }

//useEffect针对性监控
function Counter(){
  const [count,setCount]=useState(0);
  const [age,setAge]=useState(0);
  //相当于componentDidMount 和 componentDidUpdate
  useEffect(()=>{
    console.log(`挂载和状态更新时执行`);
    return()=>{
      console.log(`状态更新和卸载组件时执行`);
    }
  },[count]);//只监控count状态
  return(
    <div className='App'>
     <p>You clicked{count} times</p>
     <button onClick={()=>{setCount(count+1)}}>Add count</button>
     <p>You are {age} years old!</p>
     <button onClick={()=>{setAge(age+1)}}>Add age</button>
    </div>
  );
}

export default Counter;


