const Sidebar = () => {
  return (
    <div className=" bg-teal-500 h-full w-[10rem] text-white p-4">
      <h1 className=" text-xl">Dashboard</h1>
      <ul className=" mt-6 space-y-4">
        <li className="">
          <a href="#home" className=" hover:text-gray-200">
            Home
          </a>
        </li>
        <li className="">
          <a href="#settings" className=" hover:text-gray-200">
            Settings
          </a>
        </li>
        <li className="">
          <a href="#profile" className=" hover:text-gray-200">
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
