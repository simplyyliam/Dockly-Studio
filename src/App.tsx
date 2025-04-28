import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Dock from "./components/Dock/Dock"
import Menubar from "./components/Menubar.tsx/Menubar"
import ControlCenter from "./components/Menubar.tsx/ControlCenter";
import TimeModule from "./components/Shared/TimeModule";
import AppFolder from "./components/Shared/AppFolder";
import CustomMenu from "./components/Shared/CustomMenu";


function App() {
  const [showControlCenter, setShowControlCenter] = useState(false)
  const [showAppFolder, setShowAppFolder] = useState(false)
  const [Wallpapers, setWallpapers] = useState(false)

  const ControlCenterRef = useRef<HTMLDivElement>(null)
  const AppfolderRef = useRef<HTMLDivElement | null>(null)
  const WallpaperRef = useRef<HTMLDivElement | null>(null)

  
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


  //When you click outside or on any area of the page, the component will be set to false
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        ControlCenterRef.current &&
        !ControlCenterRef.current.contains(e.target as Node)
      )  {
        setShowControlCenter(false); // Close menu
      } 

      if (
        AppfolderRef.current &&
        !AppfolderRef.current.contains(e.target as Node)
      ) {
        setShowAppFolder(false)
      }
      if (
        WallpaperRef.current &&
        !WallpaperRef.current.contains(e.target as Node)
      ) {
        setWallpapers(false)
      }
    };

    if (showControlCenter || showAppFolder || Wallpapers) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showControlCenter, showAppFolder, Wallpapers]);

 const handleAppFolder = () => {
  setShowAppFolder((prev) => !prev)
 }

 useEffect(() => {
  if(showAppFolder) {
    gsap.to(AppfolderRef.current, {
      opacity: 1,
      scale: 1,
      ease: "expo.out",
      duration: 0.4,
    })
  }
}, [showAppFolder])


const handleWallpapers = () => {
  setWallpapers((prev) => !prev)
}

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('Shared-Icons/Bg-1.png')] bg-center bg-cover">
      <div className="absolute bottom-5">
        <Dock Folder={handleAppFolder} />
      </div>
      <div className="absolute top-0 w-full">
        <Menubar
          ControlCenter={HandleControlCenter}
          Wallpapers={handleWallpapers}
        />
      </div>
      {showControlCenter && (
        <div
          ref={ControlCenterRef}
          className="absolute top-15 right-5 opacity-0 scale-0"
        >
          <ControlCenter />
        </div>
      )}

      {Wallpapers && (
        <div ref={WallpaperRef} className="absolute top-15 right-5">
          <CustomMenu  onclick={() => {}}/>
        </div>
      )}

      {showAppFolder && (
        <div
          ref={AppfolderRef}
          className="absolute opacity-0 scale-0 backdrop-blur-[5px]"
        >
          <AppFolder />
        </div>
      )}
      <TimeModule />
    </div>
  );
}

export default App
