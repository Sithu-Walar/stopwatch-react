import React from "react"
import { useState,useEffect,useRef } from "react"

export default function App(){
    const [isRunning, setIsRunnning] = useState(false);
    const [elapsed, setElapsed] = useState(0)
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)

    

    useEffect(()=>{
        
        if(isRunning){
           intervalRef.current = setInterval(()=>{setElapsed(Date.now() - startTimeRef.current)},10)
        }
        return ()=> clearInterval(intervalRef.current)


    },[isRunning])
    function start(){
        
        setIsRunnning(true)
       startTimeRef.current = Date.now() - elapsed
       console.log(startTimeRef)
       console.log(startTimeRef)
    }
    function format(){
       let hours = Math.floor(elapsed/ (1000 * 60 * 60))
      let  minute = Math.floor(elapsed/( 1000 * 60) % 60)
      let  second = Math.floor(elapsed/1000 % 60)
      let  millisecond =  Math.floor((elapsed % 1000) /10)

      minute =  String(minute).padStart(2,"0")
      second =  String(second).padStart(2,"0")
      millisecond =  String(millisecond).padStart(2,"0")
      return `${minute}:${second}:${millisecond}`
    }
    function reset(){
      setElapsed(0)
      setIsRunnning(false)
    }
  return(
    <div className="stopwatch">
        <div className="display">{format()}</div>
        <div className="btn">
            <button className="startStopBtn" onClick={()=>start()}>Start</button>
            <button className="resetBtn" onClick={()=>reset()}>Reset</button>

        </div>
        
    </div>
  )
}