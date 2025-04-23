import Icon from "../../Shared/Icon"
import FocusModes from "./FocusModes";

function QuickToggles() {
  return (
    <div className="flex gap-4 items-center justify-center w-full h-[34em]">
      <div className="flex flex-col items-center justify-center w-58 h-full bg-[#6A6A6A]/25 p-4 rounded-2xl">
        <div className="flex gap-2.5 items-center w-full h-full ">
          <div className="flex items-center justify-center bg-black/10 rounded-full">
            <Icon
              onClick={() => {}}
              Icon="/Shared-Icons/wifi.png"
              width={24}
              Rounded={20}
            />
          </div>
          <h1 className="font-medium text-white text-sm">Wifi</h1>
        </div>
        <div className="flex gap-2.5 items-center w-full h-full ">
          <div className="flex items-center justify-center bg-black/10 rounded-full">
            <Icon
              onClick={() => {}}
              Icon="/Shared-Icons/Eye.png"
              width={18}
              Rounded={20}
            />
          </div>
          <h1 className="font-medium text-white text-sm">Night light</h1>
        </div>
        <div className="flex gap-2.5 items-center w-full h-full ">
          <div className="flex items-center justify-center bg-black/10 rounded-full">
            <Icon
              onClick={() => {}}
              Icon="/Shared-Icons/bluetooth.png"
              width={18}
              Rounded={20}
            />
          </div>
          <h1 className="font-medium text-white text-sm">Bluetooth</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center w-45 h-full">
        <FocusModes onClick={() => {}} Icon="/Menubar-Icons/Moon.png" ModeTitle="Focus Mode" width={18}/>
        <FocusModes onClick={() => {}} Icon="/Menubar-Icons/Gaming.png" ModeTitle="Gaming" width={18}/>
        <FocusModes onClick={() => {}} Icon="/Menubar-Icons/Productivity.png" ModeTitle="Productivity" width={18}/>
      </div>
    </div>
  );
}

export default QuickToggles