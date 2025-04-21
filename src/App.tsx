import Dock from "./components/Dock/Dock"
import Menubar from "./components/Menubar.tsx/Menubar"


function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('Shared-Icons/Bg-1.png')] bg-center bg-cover">
      <Dock />
      <div className="absolute top-0 w-full">
        <Menubar />
      </div>
    </div>
  );
}

export default App
