import Icon from "./Icon";


function AppFolder() {
  return (
    <div className="flex flex-col items-center p-5 gap-8 w-[45em] h-[30em] bg-black/60 rounded-2xl  shadow-2xl shadow-black/50">
      <div className="flex w-full h-auto items-center justify-center">
        <h1 className="text-white text-lg font-medium">Apps</h1>
      </div>

      <div className="flex w-full h-full gap-4 justify-center">
        <Icon
          onClick={() => {}}
          Icon="/Dock-Icons/store.png"
          width={34}
          Rounded={15}
          tag="Microsoft Store"
          mb={10}
        />
        <Icon
          onClick={() => {}}
          Icon="/Dock-Icons/spotify.png"
          width={34}
          Rounded={15}
          tag="Spotify"
          mb={10}
        />
        <Icon
          onClick={() => {}}
          Icon="/Dock-Icons/discord.png"
          width={34}
          Rounded={15}
          tag="Discord"
          mb={10}
        />
      </div>
    </div>
  );
}

export default AppFolder