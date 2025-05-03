import { useEffect, useRef, useState } from "react";
import CustomMenu from "../Shared/CustomMenu";
import Icon from "../Shared/Icon";
import gsap from "gsap";

interface Props {
  Folder: () => void;
  onStore: () => void;
  onSpotify: () => void;
  onDiscord: () => void;
}

function Dock({ Folder, onStore, onDiscord, onSpotify }: Props) {
  const [showWidgetsMenu, setShowWidgetsMenu] = useState(false); // State to toggle widgets menu
  const [showMusicPlayer, setShowMusicPlayer] = useState(false); // State to toggle music player
  const MenuRef = useRef<HTMLDivElement | null>(null); // Ref for widgets menu
  const MusicPlayerRef = useRef<HTMLDivElement | null>(null); // Ref for music player

  // Toggle widgets menu visibility
  const handleWidgets = () => {
    setShowWidgetsMenu((prev) => !prev);
  };

  // Animate widgets menu when it becomes visible
  useEffect(() => {
    if (showWidgetsMenu) {
      gsap.to(MenuRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      });
    }
  }, [showWidgetsMenu]);

  // Close widgets menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (MenuRef.current && !MenuRef.current.contains(e.target as Node)) {
        setShowWidgetsMenu(false);
      }
    };

    if (showWidgetsMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWidgetsMenu]);

  // Toggle music player visibility
  const handleMusicPlayer = () => {
    setShowMusicPlayer((prev) => !prev);
  };

  // Animate music player when it becomes visible
  useEffect(() => {
    if (showMusicPlayer) {
      gsap.to(MusicPlayerRef.current, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 0.4,
      });
    }
  }, [showMusicPlayer]);

  return (
    <>
      {/* Widgets Menu */}
      {showWidgetsMenu && (
        <div
          ref={MenuRef}
          className="absolute bottom-20 opacity-0 scale-0 bg-black/10 rounded-xl backdrop-blur-md border-1 border-stone-200/25"
        >
          <CustomMenu
            onclick1={handleMusicPlayer}
            label1="Music Player"
            label2="Empty Widget"
            label3="Empty Widget"
            label4="Empty Widget"
          />
        </div>
      )}

      {/* Dock Icons */}
      <div className="flex gap-2.5 items-center justify-center bg-black/15 backdrop-blur-md border-1 border-stone-200/25 p-2 rounded-[20px] w-auto transition ease-linear">
        <Icon
          onClick={handleWidgets}
          Icon="/Dock-Icons/Modules.png"
          width={24}
          Rounded={15}
        />
        <Icon
          onClick={Folder}
          Icon="/Dock-Icons/Folder.png"
          width={24}
          Rounded={15}
        />
        <span className="w-0.75 h-7 bg-[#0D0D0D50] rounded-full"></span>
        <Icon
          onClick={onStore}
          Icon="/Dock-Icons/store.png"
          width={24}
          Rounded={15}
        />
        <Icon
          onClick={onSpotify}
          Icon="/Dock-Icons/spotify.png"
          width={24}
          Rounded={15}
        />
        <Icon
          onClick={onDiscord}
          Icon="/Dock-Icons/discord.png"
          width={24}
          Rounded={15}
        />

        {/* Music Player */}
        {showMusicPlayer && (
          <>
            <span className="w-0.75 h-7 bg-[#0D0D0D50] rounded-full"></span>
            <div
              ref={MusicPlayerRef}
              className="flex items-center gap-2 p-2.5 w-45 h-13 bg-black/15 rounded-[15px] opacity-0 scale-0"
            >
              <div className="flex gap-2 flex-auto">
                <div className="relative w-[34px] flex items-center justify-center">
                  <img src="/Shared-Icons/SZA.png" className="rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-medium text-[12px] text-white">
                    Kill Bill
                  </h1>
                  <h1 className="font-medium text-[9px] text-white">SZA</h1>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <div className="relative w-[18px] flex items-center justify-center">
                  <img src="/Shared-Icons/play.png" />
                </div>
                <div className="relative w-[18px] flex items-center justify-center">
                  <img src="/Shared-Icons/play-next.png" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dock;
