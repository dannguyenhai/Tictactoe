import React, { useState } from "react";
import "./ToggleStyle.css";
// stateless functional component: component nhưng k sử dụng state
// function Toggle(){
//     return <div className="toggle"></div>;
// }
// // stateful functional component: component có sử dụng state
// function Toggle2(){
//const [count,setCount] = useState();
//     return (
//         <div className="toggle"></div>
//     )
// }
function Toggle() {
  const [on, setOn] = useState(false);
  // 1. enabling state: useState(initialize value)
  // 2. initialize state : useState(false)
  // 3. reading state
  // 4. update state
  // const array = useState(false);
  // console.log(array); // [false,function]
  // initialize value : các kiểu giữ liệu.
  //   console.log(on);
  // [title, setTitle]
  // [isActive,setIsActive]
  // State change -> re-render
  const handleToggle = () => {
    // setOn(callback) => setOn(prevState => !preSate)
    setOn((on) => !on)
  }
  return (
    <div>
      <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>

        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
