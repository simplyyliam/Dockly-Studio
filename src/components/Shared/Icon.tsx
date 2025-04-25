
interface Icon {
    Icon: string
    onClick: () => void
    width?: number
    mb?: number
    IconRadius?: number
    Rounded?: number
    tag?: string
}

function Icon({Icon, onClick, width, IconRadius, Rounded, tag, mb}:Icon) {
  return (
    <div className={`flex flex-col items-center justify-center p-2 gap-1.5 w-11 h-11 hover:bg-black/5 transition ease-linear delay-50 cursor-pointer rounded-[${Rounded}px] relative`}>
      <button
        onClick={onClick}
        className={`relative w-[${width}px] flex items-center justify-center cursor-pointer mb-[${mb}em]`}
      >
        <img src={Icon} alt="App Icon" className={`rounded-[${IconRadius}px]`}/>
      </button>
      <h1 className="text-nowrap absolute bottom-0 text-[8px] text-white">{tag}</h1>
    </div>
  );
}

export default Icon

