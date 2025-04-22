import Icon from "../Shared/Icon";

function Dock() {
  return (
    // App Icons
    <div className="flex gap-2.5 items-center justify-center bg-black/10 p-2 rounded-[20px] w-auto absolute bottom-5">
      <Icon onClick={() => {}} Icon="/Dock-Icons/Modules.png" width={34} Rounded={10} />
      <Icon onClick={() => {}} Icon="/Dock-Icons/Folder.png" width={24} Rounded={10} />
      <span className="w-0.75 h-7 bg-[#0D0D0D50] rounded-full "></span>
      <Icon onClick={() => {}} Icon="/Dock-Icons/store.png" width={24} Rounded={10} />
      <Icon onClick={() => {}} Icon="/Dock-Icons/spotify.png" width={24} Rounded={10} />
      <Icon onClick={() => {}} Icon="/Dock-Icons/discord.png" width={24} Rounded={10} />

      {/* Dock Widgets*/}
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

export default Dock;
