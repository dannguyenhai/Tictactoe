import React, { useState } from 'react';

const ExampleFunctional = () => {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count +1);
    }
    return (
        <div>
            <p>Count {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ExampleFunctional;