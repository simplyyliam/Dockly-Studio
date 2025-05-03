import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Dock from "./components/Dock/Dock";
import Menubar from "./components/Menubar.tsx/Menubar";
import ControlCenter from "./components/Menubar.tsx/ControlCenter";
import TimeModule from "./components/Shared/TimeModule";
import AppFolder from "./components/Shared/AppFolder";
import CustomMenu from "./components/Shared/CustomMenu";
import CustomScreen from "./components/Dock/Apps/CustomScreen";

function App() {
  // State variables
  const [showControlCenter, setShowControlCenter] = useState(false);
  const [showAppFolder, setShowAppFolder] = useState(false);
  const [Wallpapers, setWallpapers] = useState(false);
  const [activeWallpaper, setActiveWallpaper] = useState<string | null>("Wallpaper1");
  const [openApp, setOpenApp] = useState<string | boolean>(false);

  // Refs for DOM elements
  const ControlCenterRef = useRef<HTMLDivElement>(null);
  const AppfolderRef = useRef<HTMLDivElement | null>(null);
  const WallpaperRef = useRef<HTMLDivElement | null>(null);
  const AppRef = useRef<HTMLDivElement | null>(null);

  // Toggles the Control Center visibility
  const HandleControlCenter = () => {
    setShowControlCenter((prev) => !prev);
  };

  // Toggles the App Folder visibility
  const handleAppFolder = () => {
    setShowAppFolder((prev) => !prev);
  };

  // Toggles the Wallpapers menu visibility
  const handleWallpapers = () => {
    setWallpapers((prev) => !prev);
  };

  // Sets the active wallpaper
  const handleWallpaper = (currentWallpaper: string) => {
    setActiveWallpaper(currentWallpaper);
  };

  // Handles opening and closing of applications
  const handleApplication = (currentApplication: string) => {
    setOpenApp((prev) => (prev === currentApplication ? false : currentApplication));
  };

  // GSAP animation for Control Center
  useEffect(() => {
    if (showControlCenter) {
      gsap.to(ControlCenterRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      });
    }
  }, [showControlCenter]);

  // GSAP animation for App Folder
  useEffect(() => {
    if (showAppFolder) {
      gsap.to(AppfolderRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      });
    }
  }, [showAppFolder]);

  // GSAP animation for App Screens
  useEffect(() => {
    if (openApp) {
      gsap.to(AppRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      });
    }
  }, [openApp]);

  // Handles clicks outside of components to close them
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        ControlCenterRef.current &&
        !ControlCenterRef.current.contains(e.target as Node)
      ) {
        setShowControlCenter(false);
      }

      if (
        AppfolderRef.current &&
        !AppfolderRef.current.contains(e.target as Node)
      ) {
        setShowAppFolder(false);
      }

      if (
        WallpaperRef.current &&
        !WallpaperRef.current.contains(e.target as Node)
      ) {
        setWallpapers(false);
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
      {/* Dock */}
      <div className="absolute bottom-5">
        <Dock
          Folder={handleAppFolder}
          onStore={() => handleApplication("Microsoft Store")}
          onSpotify={() => handleApplication("Spotify")}
          onDiscord={() => handleApplication("Discord")}
        />
      </div>

      {/* Menubar */}
      <div className="absolute top-0 w-full">
        <Menubar
          ControlCenter={HandleControlCenter}
          Wallpapers={handleWallpapers}
        />
      </div>

      {/* Control Center */}
      {showControlCenter && (
        <div
          ref={ControlCenterRef}
          className="absolute top-15 right-5 opacity-0 scale-0"
        >
          <ControlCenter />
        </div>
      )}

      {/* Wallpapers Menu */}
      {Wallpapers && (
        <div
          ref={WallpaperRef}
          className="absolute top-15 right-5 bg-black/10 rounded-xl backdrop-blur-md border-1 border-stone-200/25"
        >
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

      {/* App Folder */}
      {showAppFolder && (
        <div
          ref={AppfolderRef}
          className="absolute opacity-0 scale-0 backdrop-blur-[5px] z-10"
        >
          <AppFolder />
        </div>
      )}

      {/* Time Module */}
      <TimeModule />

      {/* App Screens */}
      {openApp === "Microsoft Store" && (
        <div ref={AppRef} className="opacity-0 scale-0">
          <CustomScreen
            url="https://apps.microsoft.com/"
            name="Microsoft Store"
          />
        </div>
      )}
      {openApp === "Spotify" && (
        <div ref={AppRef} className="opacity-0 scale-0">
          <CustomScreen url="https://zapinterest.com/" name="Spotify" />
        </div>
      )}
      {openApp === "Discord" && (
        <div ref={AppRef} className="opacity-0 scale-0">
          <CustomScreen url="https://discord.gg/" name="Discord" />
        </div>
      )}
    </div>
  );
}

export default App;
