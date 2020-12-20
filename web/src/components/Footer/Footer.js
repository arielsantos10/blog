import React from "react";
import "./footer.css";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
  

  return (
    <div className="footer">
        <div className="redes-sociais">
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
            <InstagramIcon className="icon" />
        </div>
        <div className="direitos">
            <span >Copyright © 2020 Blog Experience - Todos os direitos reservados</span>
        </div>
    </div>
  );
}
