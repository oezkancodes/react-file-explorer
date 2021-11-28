import TabItem from './TabItem';
import ExplorerHeaderButton from './ExplorerHeaderButton';
import { PlusIcon, CollectionIcon } from '@heroicons/react/solid';
import {
  XIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  RefreshIcon,
} from '@heroicons/react/outline';

const ExplorerHeader = () => {
  return (
    <header className="p-2 bg-gray-800 space-y-2 border-b border-gray-700">
      {/* Primary Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {/* Tabs */}
          <TabItem active>Desktop</TabItem>
          <TabItem>Downloads</TabItem>

          {/* Tab Management */}
          <ExplorerHeaderButton>
            <PlusIcon className="w-5 h-5" />
          </ExplorerHeaderButton>
          <ExplorerHeaderButton>
            <CollectionIcon className="w-5 h-5" />
          </ExplorerHeaderButton>
        </div>

        {/* OS Actions */}
        <div className="flex items-center space-x-1">
          <button className="px-3.5 py-2.5 hover:bg-gray-700 rounded-md transition duration-100 cursor-pointer">
            <MinusIcon className="w-5 h-5" />
          </button>
          <button className="px-3.5 py-2.5 hover:bg-red-500 rounded-md transition duration-100 cursor-pointer">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Secondary Row */}
      <div className="flex items-center space-x-1">
        {/* Actions */}
        <ExplorerHeaderButton>
          <ArrowLeftIcon className="w-5 h-5" />
        </ExplorerHeaderButton>
        <ExplorerHeaderButton>
          <ArrowRightIcon className="w-5 h-5" />
        </ExplorerHeaderButton>
        <ExplorerHeaderButton>
          <ArrowUpIcon className="w-5 h-5" />
        </ExplorerHeaderButton>
        <ExplorerHeaderButton>
          <RefreshIcon className="w-5 h-5" />
        </ExplorerHeaderButton>
      </div>
    </header>
  );
};

export default ExplorerHeader;
