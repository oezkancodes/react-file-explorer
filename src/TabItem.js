import { XIcon } from '@heroicons/react/outline';

const TabItem = ({ active, icon, label }) => {
  return (
    <div
      className={
        'px-3 py-2 w-48 hover:bg-gray-700 hover:bg-opacity-50 rounded-md flex items-center justify-between group cursor-pointer transition duration-100 ' +
        (active ? 'bg-gray-700' : '')
      }
    >
      {/* Details */}
      <div className="flex items-center space-x-2">
        {/* Type */}
        {icon}
        {/* Title */}
        <span className="text-xs">{label}</span>
      </div>

      {/* Close */}
      <XIcon className="w-5 h-6 opacity-0 group-hover:opacity-100 transition duration-100" />
    </div>
  );
};

export default TabItem;
