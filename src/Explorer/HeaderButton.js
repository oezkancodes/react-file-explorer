const HeaderButton = ({ icon }) => {
  return (
    <button className="p-2.5 hover:bg-gray-700 rounded-md transition duration-100">
      {icon}
    </button>
  );
};

export default HeaderButton;
