import { HomeIcon, DownloadIcon } from '@heroicons/react/solid';
import NavigationButton from './NavigationButton';

const Navigation = () => {
  const items = [
    {
      icon: <HomeIcon className="w-5 h-5 text-yellow-300" />,
      label: 'Desktop',
    },
    {
      icon: <DownloadIcon className="w-5 h-5 text-blue-500" />,
      label: 'Download',
    },
  ];

  const activeItem = 0;

  return (
    <aside className="flex-shrink-0 p-2 w-52 border-r border-gray-700 flex flex-col space-y-1 overflow-y-auto">
      {items.map(({ icon, label }, index) => (
        <NavigationButton
          label={label}
          icon={icon}
          active={index === activeItem}
          key={label}
        />
      ))}
    </aside>
  );
};

export default Navigation;
