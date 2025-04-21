import Icon from "../Shared/Icon"


function Menubar() {
  return (
    <div className="relative flex items-center justify-center w-full h-auto p-2">
        <div className="absolute right-5 top-[50%] flex items-center justify-center w-auto bg-black/10 rounded-2xl">
            <Icon onClick={() => {}} Icon="/Menubar-Icons/wifi.png" width={18}/>
            <Icon onClick={() => {}} Icon="/Menubar-Icons/Battery.png" width={18}/>
            <Icon onClick={() => {}} Icon="/Menubar-Icons/Volume.png" width={18}/>
            <Icon onClick={() => {}} Icon="/Menubar-Icons/Category.png" width={18}/>
        </div>
        <div className="absolute left-5 top-[50%] flex items-center justify-center pr-3 w-auto bg-black/10 rounded-2xl">
            <Icon onClick={() => {}} Icon="/Shared-Icons/DP.png" width={34} rounded={20}/>
            <h1 className="text-sm text-white">Discord</h1>
        </div>
    </div>
  )
}

export default Menubar