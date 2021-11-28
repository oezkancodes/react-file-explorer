const NavigationButton = ({ active, icon, label }) => {
  return (
    <button
      className={
        'px-3 py-2 rounded-md flex items-center space-x-2 text-xs hover:bg-gray-500 hover:bg-opacity-25 transition duration-100 ' +
        (active ? 'bg-gray-500 bg-opacity-25 font-medium' : '')
      }
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default NavigationButton;
