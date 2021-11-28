import ExplorerFooterButton from './ExplorerFooterButton';

const ExplorerFooter = () => {
  return (
    <footer className="bg-gray-800 p-2 border-t border-gray-700 flex justify-between">
      <section></section>
      <section className="flex space-x-1">
        <ExplorerFooterButton>
          <img className="h-4 w-4" src="/git.svg" alt="Git" />
        </ExplorerFooterButton>
        <ExplorerFooterButton>
          <img className="h-4 w-4" src="/onedrive.svg" alt="OneDrive" />
        </ExplorerFooterButton>
      </section>
    </footer>
  );
};

export default ExplorerFooter;
