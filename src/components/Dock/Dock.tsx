
import { useEffect, useRef, useState } from "react";
import CustomMenu from "../Shared/CustomMenu";
import Icon from "../Shared/Icon";
import gsap from "gsap";

interface Props {
  Folder: () => void
}

function Dock({Folder}:Props) {
  const [showWidgetsMenu, setShowWidgetsMenu] = useState(false)
  const [showMusicPLayer, setShowMusicPLayer] = useState(false)
  const MenuRef = useRef<HTMLDivElement | null>(null)
  const MusicPLayerRef = useRef<HTMLDivElement | null>(null)

  const HandleWidgets = () => {
    setShowWidgetsMenu((prev) => !prev)
  }


  useEffect(() => {
    if (showWidgetsMenu) {
      gsap.to(MenuRef.current, {
        opacity: 1,
        scale: 1, 
        ease: "expo.out",
        duration: 0.4,
      })
    }
  }, [showWidgetsMenu])

    //When you click outside or on any area of the page, the component will be set to false
    useEffect(() => {
      const handleClickOutside = (e: Event) => {
        if (
          MenuRef.current &&
          !MenuRef.current.contains(e.target as Node)
        ) {
          setShowWidgetsMenu(false); // Close menu
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


    const HandleMusicPlayer = () => {
      setShowMusicPLayer((prev) => !prev)
    }

    useEffect(() => {
      if (showMusicPLayer) {
        gsap.to(MusicPLayerRef.current, {
          opacity: 1,
          scale: 1, 
          ease: "expo.out",
          duration: 0.4,
        })
      }
    }, [showMusicPLayer])


  return (
    <>
      {showWidgetsMenu && (
        <div ref={MenuRef} className="absolute bottom-20 opacity-0 scale-0">
          <CustomMenu
            onclick1={HandleMusicPlayer}
            label1="Music Player"
            label2="Empty Widget"
            label3="Empty Widget"
            label4="Empty Widget"
          />
        </div>
      )}
      {/* App Icons */}
      <div className="flex gap-2.5 items-center justify-center bg-black/10 p-2 rounded-[20px] w-auto transition ease-linear">
        <Icon
          onClick={HandleWidgets}
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
        <span className="w-0.75 h-7 bg-[#0D0D0D50] rounded-full "></span>
        <Icon
          onClick={() => {}}
          Icon="/Dock-Icons/store.png"
          width={24}
          Rounded={15}
        />
        <Icon
          onClick={() => {}}
          Icon="/Dock-Icons/spotify.png"
          width={24}
          Rounded={15}
        />
        <Icon
          onClick={() => {}}
          Icon="/Dock-Icons/discord.png"
          width={24}
          Rounded={15}
        />

        {/* Dock Widgets*/}
        {showMusicPLayer && (
          <>
            <span className="w-0.75 h-7 bg-[#0D0D0D50] rounded-full "></span>
            <div
              ref={MusicPLayerRef}
              className="flex items-center gap-2 p-2.5 w-45 h-13 bg-black/10 rounded-[15px] opacity-0 scale-0"
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
