import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import UserChat from "./UserChat";
// import { CiSearch } from "react-icons/ci";
// import UserChat from "./UserChat";

const Chatlist = () => {
  return (
    <>
      <div className="w-xl flex flex-col pt-12 pl-5 truncate">
        <div>
          <div className="flex justify-between items-center pb-4 pr-4">
            <h2 className="text-2xl font-semibold">Chats</h2>
            <button className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
              <AiOutlineUserAdd />
            </button>
          </div>
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full">
            <CiSearch className="text-gray-500 text-[20px] mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
            />
          </div>
        </div>
        <div className="pt-2 overflow-y-auto mt-2 h-screen scrollbar-none">
          <UserChat>participentName is now your friend.</UserChat>
        </div>
      </div>
      {/* Uncomment the following code to enable chat list functionality */}
      {/* <div className="w-xl flex flex-col pt-12 pl-5 truncate">
        <div>
          <div className="flex justify-between items-center pb-4 pr-4">
            <h2 className="text-2xl font-semibold">Chats</h2>
            <button className="text-gray-800 text-2xl py-3 px-3 rounded hover:bg-blue-400 hover:text-white ">
              <AiOutlineUserAdd />
            </button>
          </div>
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full">
            <CiSearch className="text-gray-500 text-[20px] mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
            />
          </div>
        </div>
        <div className="pt-2 overflow-y-auto mt-2 h-screen scrollbar-none">
          <UserChat>participentName is now your friend.</UserChat>
        </div>
        {modal && (
          <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full z-50 bg-[#dae1efb5] ">
            <div className="bg-white p-4 rounded-lg shadow-lg h-6/10 overflow-hidden">
              <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 shadow-sm w-full">
                <CiSearch className="text-gray-500 text-[20px] mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
                />
              </div>
              <div className="w-sm h-full overflow-y-auto scrollbar-hide">
                {userList.map((item) => (
                  <UserList key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Chatlist;
