import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <img src="/logo.png" alt="logo" className="h-20 w-20" />
          <p className="font-bold">
            Tech Trends Ltd. <br />
            Providing reliable Tech News since 2012
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Logos */}
            <FaFacebook size={40} />
            <FaInstagram size={40} />
            <FaYoutube size={40} />
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
