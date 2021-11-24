import { FolderIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';

const TabItem = ({ active, children }) => {
  return (
    <div
      className={
        'px-3 py-2 w-48 hover:bg-gray-700 hover:bg-opacity-50 rounded-md flex items-center justify-between group cursor-pointer transition duration-100 select-none ' +
        (active ? 'bg-gray-700' : '')
      }
    >
      {/* Details */}
      <div className="flex items-center space-x-2">
        {/* Type */}
        <FolderIcon className="h-5 w-5" />
        {/* Title */}
        <span className="text-xs">{children}</span>
      </div>

      {/* Close */}
      <XIcon className="w-5 h-6 opacity-0 group-hover:opacity-100 transition duration-100" />
    </div>
  );
};

export default TabItem;
