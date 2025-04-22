import Icon from "../../Shared/Icon"

function QuickToggles() {
  return (
    <div className="flex gap-4 items-center justify-center w-full h-[34em]">
      <div className="flex flex-col  items-center justify-center w-58 h-full bg-[#6A6A6A]/25 p-2 rounded-2xl">
        <div className="flex gap-1.5 items-center w-full h-full ">
          <Icon onClick={() => {}} Icon="/Shared-Icons/wifi.png" width={24} />
          <h1 className="font-medium text-white text-sm">Wifi</h1>
        </div>
        <div className="flex gap-1.5 items-center w-full h-full ">
          <Icon onClick={() => {}} Icon="/Shared-Icons/Eye.png" width={18} />
          <h1 className="font-medium text-white text-sm">Wifi</h1>
        </div>
        <div className="flex gap-1.5 items-center w-full h-full ">
          <Icon onClick={() => {}} Icon="/Shared-Icons/bluetooth.png" width={18} />
          <h1 className="font-medium text-white text-sm">Wifi</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-45 h-full bg-[#6A6A6A]/25 p-2  rounded-2xl"></div>
    </div>
  );
}

export default QuickToggles