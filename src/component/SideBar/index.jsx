const SideBar = () => {
  return (
    <>
      <aside className="border-1 border-gray-200  bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold text-pink-600 mb-6">Logo</div>
          <nav className="space-y-2">
            <div className="bg-pink-100 text-pink-600 rounded-lg px-3 py-2 font-medium">
              Dashboard
            </div>
            <div className="text-gray-700 px-3 py-2 font-medium hover:bg-gray-100 rounded-lg cursor-pointer">
              Projects
            </div>
            <div className="text-gray-700 px-3 py-2 font-medium hover:bg-gray-100 rounded-lg cursor-pointer">
              Teams
            </div>
            <div className="text-gray-700 px-3 py-2 font-medium hover:bg-gray-100 rounded-lg cursor-pointer">
              Analytics
            </div>
            <div className="text-gray-700 px-3 py-2 font-medium hover:bg-gray-100 rounded-lg cursor-pointer">
              Messages
            </div>
            <div className="text-gray-700 px-3 py-2 font-medium hover:bg-gray-100 rounded-lg cursor-pointer">
              Integrations
            </div>
          </nav>
        </div>
        <div className="bg-purple-100"> 
          <div className="p-4 text-center">
            <img
              src="https://illustrations.popsy.co/gray/work-from-home.svg"
              alt="update"
              className="h-24 mx-auto mb-4"
            />
            <div className="font-semibold mb-2">V2.0 is available</div>
            <button className="w-full bg-blue-500 hover:bg-blue-600">
              Try now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
