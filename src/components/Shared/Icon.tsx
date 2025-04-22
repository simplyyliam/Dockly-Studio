
interface Icon {
    Icon: string
    onClick: () => void
    width?: number
    IconRadius?: number
    Rounded?: number
}

function Icon({Icon, onClick, width, IconRadius, Rounded}:Icon) {
  return (
    <div className={`flex items-center justify-center p-2 w-11 h-11 hover:bg-black/5 transition ease-linear delay-50 cursor-pointer rounded-[${Rounded}px]`}>
      <button
        onClick={onClick}
        className={`relative w-[${width}px] flex items-center justify-center cursor-pointer`}
      >
        <img src={Icon} alt="App Icon" className={`rounded-[${IconRadius}px]`}/>
      </button>
    </div>
  );
}

export default Icon

