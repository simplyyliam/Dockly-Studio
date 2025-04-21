
interface Icon {
    Icon: string
    onClick: () => void
    width?: number
    rounded?: number
}

function Icon({Icon, onClick, width, rounded}:Icon) {
  return (
    <div className={`flex items-center justify-center p-2 w-11 h-11 hover:bg-black/5 transition ease-linear delay-50 cursor-pointer rounded-[10px]`}>
      <button
        onClick={onClick}
        className={`relative w-[${width}px] flex items-center justify-center`}
      >
        <img src={Icon} alt="App Icon" className={`rounded-[${rounded}px]`}/>
      </button>
    </div>
  );
}

export default Icon

