import React from 'react';
import 'src/dev-src/assets/style/footer.css';
import IconButton from 'src/dev-src/components/IconButton';
import SchoolLogoIcon from 'src/dev-src/assets/images/rs_school_js.svg';
import GithubIcon from 'src/dev-src/assets/images/GitHub-Icon.png';
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <IconButton src={SchoolLogoIcon} iconCntClassname='footer__school-logo' alt="rs_school_logo" />
      </div>
      <div>
        <IconButton src={GithubIcon}  alt="rs_school_logo" />
      </div>
    </div>
  );
};

export default Footer;
