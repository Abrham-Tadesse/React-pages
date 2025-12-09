import { useEffect, useState } from 'react';
import './hom.css'

export function Home(prop){
    const [present,setPresent] = useState(0);
    const [seconds ,setSeconds] = useState(0);
    useEffect(function(){
      const timer = setInterval( ()=> {
        setSeconds(prev => prev + 1);
      },1000)
      return  () => clearInterval(timer);
    },[present])


    return(
        <>
        <div className="home">
        <h1>Hello {prop.name}</h1>
        <p>You attend {present} {present >= 2 ? "classes" : "class"}</p>
        <div className="btns">
        <button onClick={() => setPresent(present+1)}>Attend</button>
        <button onClick={() => setPresent(0)}>reset</button>
        </div>
        <p>You have been on this page for {seconds} seconds</p>
        </div>
        </>
    )
}