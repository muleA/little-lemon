const PageUnderConstruction = () => {
  return (
    <>
      <div className="coming-soon">
        <div className="w-full h-screen">
          <div className="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
            <div className="flex-1 flex flex-col items-center justify-center">
             
              <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
                Coming Soon
              </h1>
              <div className="flex flex-col items-center space-y-4 mt-24">
          
                <form className="w-full flex items-center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm"
                    placeholder="Email"
                    autoComplete="off"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <ul className="flex items-center space-x-4">
                <li>
                  <a href="#" title="Facebook">
                 
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                  
                  </a>
                </li>
                <li>
                  <a href="#" title="LinkedIn">
                  
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageUnderConstruction;
