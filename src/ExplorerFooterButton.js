const ExplorerFooterButton = (props) => {
  return (
    <button className="p-2.5 hover:bg-gray-700 rounded-md transition duration-100 text-xs">
      {props.children}
    </button>
  );
};

export default ExplorerFooterButton;
