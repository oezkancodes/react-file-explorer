import { FolderIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import DropdownListItem from './DropdownListItem';

const Dropdown = ({ button, list }) => {
  const [showList, setShowList] = useState(false);

  const clickHandler = () => setShowList((prevState) => !prevState);

  return (
    <div className="relative group">
      <div onClick={clickHandler}>{button}</div>
      <div
        className={
          'absolute top-12 right-0 p-1 z-50 bg-black bg-opacity-10 backdrop-filter backdrop-blur-md rounded-md border border-gray-700 flex flex-col space-y-0.5 transition transform duration-100 ' +
          (showList
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-4')
        }
      >
        {list.map(({ label }) => (
          <DropdownListItem
            icon={<FolderIcon className="w-4 h-4" />}
            label={label}
            key={label}
          />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
