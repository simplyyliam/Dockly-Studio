import { useEffect, useState } from "react"
import { requestFormReset } from "react-dom";

function TimeModule() {
    const [time, setTime] = useState(new Date())


    //Tick counter
    useEffect(() => {
        const Interval = setInterval(() => {
            setTime(new Date())
        }, 1000);
        
        return () => {
            clearInterval(Interval)
        }
    }, [time])

    
    function handleTime () {
        let Hour = time.getHours()
        const Minutes = time.getMinutes()
        
        Hour = Hour % 24 || 24  //24h Cycle      

        return `${handlePadding(Hour)}
        ${handlePadding(Minutes)}`
    }

    //Fixes the time to display the correct number. E.g. if the time is 17:30pm or 10:30am the time wwithout this fucntion would display it as 17:3 or 10:3 without the 0
    function handlePadding (number: number) {
        return (number >= 10 ? "" : "0") + number
    }

  return (
    <h1 className="flex items-center justify-center text-center text-9xl text-white/50 font-medium w-1">{handleTime()}</h1>
  )
}

export default TimeModule