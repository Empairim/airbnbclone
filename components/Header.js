import Image from "next/legacy/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://cdn.pixabay.com/photo/2018/05/04/21/27/airbnb-3375057_1280.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className=" flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-teal-400 rounded-full text-white p-2 cursor-pointer md:mx-2 " />
      </div>

      {/* Right */}

      <div className="flex items-center space-x-4 justify-end  ">
        <p className="hidden md:inline text-gray-500">Become a host</p>
        <GlobeAltIcon className="h-6 text-teal-400 cursor-pointer" />

        <div className="flex items-center space-x-1 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 text-teal-400  cursor-pointer" />
          <UserCircleIcon className="h-6 text-teal-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
