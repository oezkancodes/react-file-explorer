import TabItem from './TabItem';
import ExplorerNavigationButton from './ExplorerNavigationButton';
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
          <TabItem />

          {/* Tab Management */}
          <ExplorerNavigationButton>
            <PlusIcon className="w-5 h-5" />
          </ExplorerNavigationButton>
          <ExplorerNavigationButton>
            <CollectionIcon className="w-5 h-5" />
          </ExplorerNavigationButton>
        </div>

        {/* OS Actions */}
        <div className="flex items-center">
          <button className="px-4 py-2.5 hover:bg-gray-700 rounded-md transition duration-100 cursor-pointer">
            <MinusIcon className="w-5 h-5" />
          </button>
          <button className="px-4 py-2.5 hover:bg-red-500 rounded-md transition duration-100 cursor-pointer">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Secondary Row */}
      <div className="flex items-center space-x-2">
        {/* Actions */}
        <ExplorerNavigationButton>
          <ArrowLeftIcon className="w-5 h-5" />
        </ExplorerNavigationButton>
        <ExplorerNavigationButton>
          <ArrowRightIcon className="w-5 h-5" />
        </ExplorerNavigationButton>
        <ExplorerNavigationButton>
          <ArrowUpIcon className="w-5 h-5" />
        </ExplorerNavigationButton>
        <ExplorerNavigationButton>
          <RefreshIcon className="w-5 h-5" />
        </ExplorerNavigationButton>
      </div>
    </header>
  );
};

export default ExplorerHeader;
