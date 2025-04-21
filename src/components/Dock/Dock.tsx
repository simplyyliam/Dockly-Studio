
function Dock() {
  return (
    <div className="flex gap-2.5 items-center justify-center bg-black/10 p-3 rounded-[20px] w-auto absolute bottom-5">
      <div className="flex items-center justify-center p-2 w-11 h-11 hover:bg-black/5 transition ease-linear delay-100 cursor-pointer rounded-[10px]">
      <div className="relative w-[34px] h-[24px] felx items-center justify-center">
          <img src="/Dock-Icons/Modules.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center p-2 w-11 h-11 hover:bg-black/5 transition ease-linear delay-100 cursor-pointer rounded-[10px]">
      <div className="relative w-[24px] h-[24px] felx items-center justify-center">
          <img src="/Dock-Icons/Folder.png" alt="" />
        </div></div>
      <span className="w-0.75 h-7 bg-[#0D0D0D50] rounded-full "></span>
      <div className="flex items-center justify-center p-2 w-11 h-11 rounded-[10px]">
        <div className="relative w-[24px] h-[24px] felx items-center justify-center">
          <img src="/Dock-Icons/store.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center p-2 w-11 h-11 rounded-[10px]">
        <div className="relative w-[24px] h-[24px] flex items-center justify-center">
          <img src="/Dock-Icons/spotify.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center p-2 w-11 h-11 rounded-[10px]">
        <div className="relative w-[24px] h-[24px] flex items-center justify-center">
          <img src="/Dock-Icons/discord.png" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-2 p-2.5 w-45 h-13 bg-black/10 rounded-[15px]">
        <div className="flex gap-2 flex-auto">
          <div className="relative w-[34px] flex items-center justify-center">
            <img src="/Shared-Icons/SZA.png" className="rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[12px] text-white">Kill Bill</h1>
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
    </div>
  );
}

export default Dock