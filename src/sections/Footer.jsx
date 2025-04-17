import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href="https://www.linkedin.com/in/luis-felipe-dos-santos-andrade-73756822a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAV0Gvi%2BrRIq8YpfV6BKGTg%3D%3D">
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Luis Felipe dos Santos Andrade. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
