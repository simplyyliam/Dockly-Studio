import Icon from "../Shared/Icon"

interface onClickProps {
  ControlCenter: () => void
}

function Menubar({ControlCenter}:onClickProps) {
  return (
    <div className="relative flex items-center justify-center w-full h-auto p-2">
        <div className="absolute right-0 top-[50%] flex items-center justify-center w-auto bg-black/10 rounded-xl scale-85">
            <Icon onClick={() => {}} Icon="/Shared-Icons/wifi.png" width={24} Rounded={10}/>
            <Icon onClick={() => {}} Icon="/Menubar-Icons/Battery.png" width={18} Rounded={10}/>
            <Icon onClick={() => {}} Icon="/Shared-Icons/Volume.png" width={18} Rounded={10}/>
            <Icon onClick={ControlCenter} Icon="/Menubar-Icons/Category.png" width={18} Rounded={10}/>
        </div>
        <div className="absolute left-0 top-[50%] flex items-center justify-center pr-3 w-auto bg-black/10 rounded-xl scale-85">
            <Icon onClick={() => {}} Icon="/Shared-Icons/DP.png" width={19} IconRadius={20}/>
            <h1 className="text-sm text-white">Discord</h1>
        </div>
    </div>
  )
}

export default Menubar