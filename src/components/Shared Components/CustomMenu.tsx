

function CustomMenu() {
  return (
    <div className="flex p-2 items-center w-[14em] bg-black/10 rounded-xl">
      <div className="flex flex-col w-full gap-2">
        <button className="flex text-sm w-full p-1 px-2 rounded-lg text-neutral-900 hover:bg-black/10 transition ease-out">
          Music Player
        </button>
        <button className="flex text-sm w-full p-1 px-2 rounded-lg text-neutral-900 hover:bg-black/10 transition ease-out">
          widget 2
        </button>
        <button className="flex text-sm w-full p-1 px-2 rounded-lg text-neutral-900 hover:bg-black/10 transition ease-out">
          widget 3
        </button>
        <button className="flex text-sm w-full p-1 px-2 rounded-lg text-neutral-900 hover:bg-black/10 transition ease-out">
          widget 4
        </button>
      </div>
    </div>
  );
}

export default CustomMenu