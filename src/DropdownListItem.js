const DropdownListItem = (props) => {
  return (
    <button className="px-3 py-2 w-36 hover:bg-gray-700 flex items-center space-x-2 transition duration-100 rounded-md">
      {props.icon}
      <span className="text-xs">{props.label}</span>
    </button>
  );
};

export default DropdownListItem;
