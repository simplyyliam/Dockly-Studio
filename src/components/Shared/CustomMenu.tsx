
interface Props {
  onclick1: () => void
  onclick2?: () => void
  onclick3?: () => void
  onclick4?: () => void
  label1: string
  label2: string
  label3: string
  label4?: string
  label5?: string
}
function CustomMenu({onclick1, onclick2, onclick3, onclick4, label1, label2, label3, label4}:Props) {
  return (
    <div className="flex p-2 items-center w-[14em]">
      <div className="flex flex-col w-full gap-2">
        <button
          onClick={onclick1}
          className="flex text-sm w-full p-1 px-2 rounded-lg text-white hover:bg-white/10 transition ease-out"
        >
          {label1}
        </button>
        <button onClick={onclick2} className="flex text-sm w-full p-1 px-2 rounded-lg text-white hover:bg-white/10 transition ease-out">
          {label2}
        </button>
        <button onClick={onclick3} className="flex text-sm w-full p-1 px-2 rounded-lg text-white hover:bg-white/10 transition ease-out">
          {label3}
        </button>
        <button onClick={onclick4} className="flex text-sm w-full p-1 px-2 rounded-lg text-white hover:bg-white/10 transition ease-out">
          {label4}
        </button>
      </div>
    </div>
  );
}

export default CustomMenu