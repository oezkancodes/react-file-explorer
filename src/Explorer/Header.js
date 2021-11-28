import TabItem from './TabItem';
import HeaderButton from './HeaderButton';
import {
  PlusIcon,
  CollectionIcon,
  HomeIcon,
  DownloadIcon,
} from '@heroicons/react/solid';
import {
  XIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  RefreshIcon,
} from '@heroicons/react/outline';
import Dropdown from './Dropdown';

const Header = () => {
  const tabs = [
    {
      icon: <HomeIcon className="w-5 h-5 text-yellow-300" />,
      iconSm: <HomeIcon className="w-4 h-4 text-yellow-300" />,
      label: 'Desktop',
    },
    {
      icon: <DownloadIcon className="w-5 h-5 text-blue-500" />,
      iconSm: <DownloadIcon className="w-4 h-4 text-blue-500" />,
      label: 'Download',
    },
  ];
  const activeTab = 0;

  const actions = [
    {
      icon: <ArrowLeftIcon className="w-5 h-5" />,
    },
    {
      icon: <ArrowRightIcon className="w-5 h-5" />,
    },
    {
      icon: <ArrowUpIcon className="w-5 h-5" />,
    },
    {
      icon: <RefreshIcon className="w-5 h-5" />,
    },
  ];

  return (
    <header className="p-2 bg-gray-800 space-y-2 border-b border-gray-700">
      {/* Primary Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {/* Tabs */}
          {tabs.map(({ icon, label }, index) => (
            <TabItem
              icon={icon}
              label={label}
              active={index === activeTab}
              key={label}
            />
          ))}

          {/* Tab Management */}
          <HeaderButton icon={<PlusIcon className="w-5 h-5" />} />
        </div>

        {/* OS Actions */}
        <div className="flex items-center space-x-1">
          <Dropdown
            button={
              <HeaderButton icon={<CollectionIcon className="w-5 h-5" />} />
            }
            list={tabs}
          />
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
        {actions.map(({ icon }, index) => (
          <HeaderButton icon={icon} key={index} />
        ))}
      </div>
    </header>
  );
};

export default Header;
