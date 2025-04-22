import QuickToggles from "./Control Center Components/QuickToggles";
import Sliders from "./Control Center Components/Sliders";

function ControlCenter() {
  return (
    <div className="flex flex-col gap-4 p-3 bg-black/10 w-85 h-110 relative rounded-4xl">
      <QuickToggles />
      <Sliders />

      {/* Music Player */}
      <div className="flex items-center gap-2 p-2.5 w-full h-13 bg-black/10 rounded-[15px]">
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

export default ControlCenter;
