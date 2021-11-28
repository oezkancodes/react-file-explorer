import { HomeIcon, DownloadIcon } from '@heroicons/react/solid';
import ExplorerNavigationButton from './ExplorerNavigationButton';

const ExplorerNavigation = () => {
  return (
    <aside className="flex-shrink-0 p-2 w-52 border-r border-gray-700 flex flex-col space-y-1 overflow-y-auto">
      <ExplorerNavigationButton active>
        <HomeIcon className="w-5 h-5 text-yellow-300" />
        <span>Desktop</span>
      </ExplorerNavigationButton>
      <ExplorerNavigationButton>
        <DownloadIcon className="w-5 h-5 text-blue-400" />
        <span>Download</span>
      </ExplorerNavigationButton>
    </aside>
  );
};

export default ExplorerNavigation;
