import Explorer from './Explorer';

const App = () => {
  const style = {
    backgroundImage: "url('/background.jpg')",
  };

  return (
    <main
      className="bg-gray-900 min-h-screen flex justify-center items-center bg-center bg-cover"
      style={style}
    >
      <Explorer />
    </main>
  );
};

export default App;
