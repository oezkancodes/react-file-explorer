import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const Explorer = () => {
  return (
    <div className="text-gray-50 rounded-md border border-gray-700 shadow-xl overflow-hidden w-full max-w-4xl select-none">
      <Header />
      <div className="flex flex-row h-96 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-xl">
        <Navigation />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Explorer;
