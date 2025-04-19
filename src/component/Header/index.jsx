import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <>
      <div className="border-1 border-gray-200 p-4 flex justify-between">
        {/* <div className="flex-1 p-2 overflow-y-auto"></div> */}
        <h1 className="text-2xl font-bold text-pink-600 ">Dashboard</h1>

        <div className="flex">
          <div className="mr-4  rounded border-1 border-gray-200 w-[200px] flex align-middle bg-gray-50">
            <button className="pr-1">
              <IoIosSearch />
            </button>
            <input type="text" placeholder="Search..." />
          </div>
          <img alt="" src="../../../public/Lab_05/Avatar 313.png" />
        </div>
      </div>
    </>
  );
};
export default Header;
