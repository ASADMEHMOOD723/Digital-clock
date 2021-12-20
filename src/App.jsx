import React, { useState } from "react";
import './index.css';


const App = () =>{
    
     const [ctime, upTime] = useState(0);

     const CurrentTime = () => {
        let newTime=new Date().toLocaleTimeString();
        upTime(newTime);
        

        
     };
     setInterval(CurrentTime,1000);
    return(
        <>
            <h1>New Time={ctime}</h1>    
        </>
    );
};

export default App;