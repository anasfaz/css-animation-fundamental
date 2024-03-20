import "./App.css";

function App() {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Logo</span>
            <div className="flex space-x-4 text-gray-900">
              <a href="#">Dashboard</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="w-full h-[500px] bg-[#111111] flex justify-between items-center absolute">
          <div className="ml-20">
            <h1 className="  font-sans text-4xl text-gray-50">GET FIT</h1>
            <h6 className="p-2 text-gray-50 font-bold">
              unleash Your potential start Your <br /> fitness journey with me
              know.
            </h6>
            <button className="mt-5 bg-white w-28 h-10 rounded-md">
              Get Start
            </button>
          </div>
          <div className="mr-20 relative ">
            <div className=" rounded-full w-[500px] h-[500px] bg-white opacity-5 absolute align-middle">
            <div className="rounded-full w-[400px] h-[400px] bg-white opacity-5  "></div>
            </div>

            <div className="z-10 w-full h-full">
           
              <img
                className="w-[400px] h-[400px]  z-10"
                src="../public/samlan.png"
                alt="trainer image"
              />
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
