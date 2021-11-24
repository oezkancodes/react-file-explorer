import ExplorerContent from './ExplorerContent';
import ExplorerFooter from './ExplorerFooter';
import ExplorerHeader from './ExplorerHeader';
import ExplorerNavigation from './ExplorerNavigation';

const Explorer = () => {
  return (
    <div className="text-gray-50 rounded-md border border-gray-700 shadow-xl overflow-hidden w-full max-w-4xl">
      <ExplorerHeader />
      <div className="flex flex-row h-96 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-xl">
        <ExplorerNavigation />
        <ExplorerContent />
      </div>
      <ExplorerFooter />
    </div>
  );
};

export default Explorer;
