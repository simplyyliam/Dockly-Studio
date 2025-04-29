import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Dock from "./components/Dock/Dock"
import Menubar from "./components/Menubar.tsx/Menubar"
import ControlCenter from "./components/Menubar.tsx/ControlCenter";
import TimeModule from "./components/Shared/TimeModule";
import AppFolder from "./components/Shared/AppFolder";
import CustomMenu from "./components/Shared/CustomMenu";
import MicrosoftStore from "./components/Dock/Apps/CustomScreen";
import CustomScreen from "./components/Dock/Apps/CustomScreen";


function App() {
  const [showControlCenter, setShowControlCenter] = useState(false)
  const [showAppFolder, setShowAppFolder] = useState(false)
  const [Wallpapers, setWallpapers] = useState(false)
  const [activeWallpaper, setActivewallpaper] = useState<string | null>('Wallpaper4')

  //Screens
  const [openApp, setOpenApp] = useState<string | boolean>(false)



  const ControlCenterRef = useRef<HTMLDivElement>(null)
  const AppfolderRef = useRef<HTMLDivElement | null>(null)
  const WallpaperRef = useRef<HTMLDivElement | null>(null)
  const AppRef = useRef<HTMLDivElement | null>(null)

  
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

  const handleWallpaper = (currentWallaper: string) => {
    setActivewallpaper(currentWallaper)
  }


  const handleApplication = (currentApplication: string) => {
    setOpenApp(currentApplication)
    if (openApp === currentApplication) {
      setOpenApp(false)
    }
  }

  useEffect(() => {
    if(openApp) {
      gsap.to(AppRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      })
    }
  }, [openApp])



  return (
    <div
      className={`flex items-center justify-center w-screen h-screen overflow-hidden
          ${
            activeWallpaper === "Wallpaper1"
              ? "bg-[url('/wallpapers/Wallpaper1.png')]"
              : "bg-amber-50"
          }
          ${
            activeWallpaper === "Wallpaper2"
              ? "bg-[url('/wallpapers/Wallpaper2.png')]"
              : "bg-amber-50"
          }
          ${
            activeWallpaper === "Wallpaper3"
              ? "bg-[url('/wallpapers/Wallpaper3.png')]"
              : "bg-amber-50"
          }
          ${
            activeWallpaper === "Wallpaper4"
              ? "bg-[url('/wallpapers/Wallpaper4.png')]"
              : "bg-amber-50"
          }
        bg-center bg-cover`}
    >
      <div className="absolute bottom-5">
        <Dock
          Folder={handleAppFolder}
          onStore={() => handleApplication("Microsoft Store")}
          onSpotify={() => handleApplication("Spotify")}
          onDiscord={() => handleApplication("Discord")}
        />
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
          <CustomMenu
            onclick1={() => handleWallpaper("Wallpaper1")}
            label1="Wallpaper 1"
            onclick2={() => handleWallpaper("Wallpaper2")}
            label2="Wallpaper 2"
            onclick3={() => handleWallpaper("Wallpaper3")}
            label3="Wallpaper 3"
            onclick4={() => handleWallpaper("Wallpaper4")}
            label4="Wallpaper 4"
          />
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

      {/* App Screens */}
      {openApp === "Microsoft Store" && (
        <div ref={AppRef} className="opacity-0 scale-0">
          <CustomScreen
            url="https://apps.microsoft.com/home?hl=en-US&gl=US"
            name="Microsoft Store"
          />
        </div>
      )}
      {openApp === "Spotify" && (
        <div ref={AppRef} className="opacity-0 scale-0">
          <CustomScreen
            url="https://open.spotify.com/"
            name="Microsoft Store"
          />
        </div>
      )}
      {openApp === "Discord" && (
        <div ref={AppRef} className="opacity-0 scale-0">
          <CustomScreen
            url="https://discord.com/"
            name="Microsoft Store"
          />
        </div>
      )}
    </div>
  );
}

export default App
