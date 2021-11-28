import FooterButton from './FooterButton';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-2 border-t border-gray-700 flex justify-between">
      <section></section>
      <section className="flex space-x-1">
        <FooterButton>
          <img className="h-4 w-4" src="/git.svg" alt="Git" />
        </FooterButton>
        <FooterButton>
          <img className="h-4 w-4" src="/onedrive.svg" alt="OneDrive" />
        </FooterButton>
      </section>
    </footer>
  );
};

export default Footer;
