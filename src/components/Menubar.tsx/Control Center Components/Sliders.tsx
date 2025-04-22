
function Sliders() {
  return (
    <div className="flex flex-col p-4 gap-4 items-start w-full h-full bg-[#6A6A6A]/25 rounded-2xl">
        <div className="flex flex-col gap-2 w-full">
            <h1 className="text-white">Display</h1>
            <input type="range" className="slider  focus:outline-none" />
        </div>
        <div className="flex flex-col gap-2 w-full">
            <h1 className="text-white">Volume</h1>
            <input type="range" className="slider  focus:outline-none" />
        </div>
    </div>
  )
}

export default Sliders