interface Props {
    ModeTitle: string
    Icon: string
    onClick: () => void
    Rounded?: number
    width?: number
}

function FocusModes({ModeTitle, Icon, onClick, Rounded, width}:Props) {
  return (
    <button
      onClick={onClick}
      className="flex gap-2.5 items-center w-30 h-full bg-[#6A6A6A]/25 p-2.5 rounded-2xl cursor-pointer hover:bg-black/25 delay-50 transition ease-linear"
    >
      <div
        onClick={onClick}
        className={`relative w-[${width}px] flex items-center justify-center cursor-pointer`}
      >
        <img
          src={Icon}
          alt="App Icon"
          className={`rounded-[${Rounded}px]`}
        />
      </div>
      <h1 className="font-medium text-white text-xs text-nowrap">{ModeTitle}</h1>
    </button>
  );
}

export default FocusModes