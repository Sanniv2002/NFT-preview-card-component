import equilibrium from "./assets/image-equilibrium.jpg"
import view from "./assets/icon-view.svg"
import eth from "./assets/icon-ethereum.svg"
import time from "./assets/icon-clock.svg"
import avatar from "./assets/image-avatar.png"

function App() {

  return (
    <div className="flex justify-center items-center bg-[#0d1a2d] h-screen">
      <div className="bg-[#15273f] rounded-md">
        <div className="relative p-5">
          <img className=" h-64 rounded-md" src={equilibrium} alt="" />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#00a0b8] rounded-md m-5 opacity-0 flex justify-center items-center hover:opacity-80 transition-opacity duration-300">
            <img src={view} alt="" />
          </div>
        </div>


        <h2 className="text-white font-bold text-lg px-5 hover:text-[#14c0c1] transition-colors duration-300 hover:cursor-pointer">Equilibrium #3429</h2>
        <p className="text-[#617693] p-5 text-sm w-72">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between">
          <div className="px-5 flex gap-2">
            <img className="h-4 w-3 mt-1" src={eth} alt="" />
            <h2 className="text-[#23e3e8] font-medium">0.041 ETH</h2>
          </div>
          <div className="px-5 flex">
            <img className="h-4 w-5 mt-[0.125rem] pr-1" src={time} alt="" />
            <p className="text-[#8aa9d0] text-sm">3 days left</p>
          </div>
        </div>
        <div className="p-3 mx-5 border-b border-[#21334b]"></div>
        <div className="flex p-5 gap-4">
          <img className="w-10 h-10 border border-white rounded-full" src={avatar} alt="" />
          <h2 className="pt-1 text-[#657d9c]">Creation of <span className="text-white hover:text-[#1eb6b9] transition-colors duration-300 cursor-pointer">Jules Wyvern</span></h2>
        </div>
      </div>
    </div>
  )
}

export default App
