import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Dock from "./components/Dock/Dock"
import Menubar from "./components/Menubar.tsx/Menubar"
import ControlCenter from "./components/Menubar.tsx/ControlCenter";


function App() {
  const [showControlCenter, setShowControlCenter] = useState(false)

  const ControlCenterRef = useRef(null)
  
  const HandleControlCenter = () => {
    setShowControlCenter((prev) => !prev)
  }

  useEffect(() => {
    if(showControlCenter) {
      gsap.to(ControlCenterRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      })
    }
  }, [showControlCenter])


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('Shared-Icons/Bg-1.png')] bg-center bg-cover">
      <Dock />
      <div className="absolute top-0 w-full">
        <Menubar ControlCenter={HandleControlCenter} />
      </div>
      { showControlCenter && (
        <div ref={ControlCenterRef} className="absolute top-15 right-5 opacity-0 scale-0">
          <ControlCenter />
        </div>
      )}
    </div>
  );
}

export default App
