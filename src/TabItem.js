import { FolderIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';

const TabItem = () => {
  return (
    <div className="px-3 py-2 w-48 bg-gray-700 hover:bg-opacity-50 rounded-md flex items-center justify-between group cursor-pointer transition duration-100 select-none">
      {/* Details */}
      <div className="flex items-center space-x-2">
        {/* Type */}
        <FolderIcon className="h-5 w-5" />
        {/* Title */}
        <span className="text-xs font-medium">Tab Item</span>
      </div>

      {/* Close */}
      <XIcon className="w-5 h-6 opacity-0 group-hover:opacity-100 transition duration-100" />
    </div>
  );
};

export default TabItem;
