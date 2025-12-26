import styles from "./Footer.module.css";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        {/* we define container , row and col classes in to globals.css */}
        <div className="container">
          <div className="row">
            {/* first col: */}
            <div className="col">
              <h4>Meghdad IT</h4>
              <ul>
                <li>Licenses and certificates</li>
                <li>Rules and regulations</li>
                <li>Privacy</li>
                <li>Contact us</li>
                <li>About us</li>
              </ul>
            </div>

            {/* second col: */}
            <div className="col">
              <h4>Guide</h4>
              <ul>
                <li>Guarantee of product authenticity</li>
                <li>Conditions for returning goods</li>
                <li>How to send goods</li>
                <li>Shopping guide</li>
                <li>Discounts</li>
              </ul>
            </div>

            {/* third col: */}
            <div className="col">
              <h4>Services</h4>
              <ul>
                <li>Free consultation</li>
                <li>Support</li>
                <li>Advertising</li>
                <li>Organizational purchase</li>
                <li>Buyer validation</li>
                <li>Assemble online</li>
              </ul>
            </div>

            {/* forth col: */}
            <div className={`col ${styles.socials}`}>
              <h4>Be in touch with us</h4>
              <ul>
                <li>
                  <FaInstagram size="30px" />
                </li>
                <li>
                  <FaXTwitter size="30px" />
                </li>
                <li>
                  <FaTelegram size="30px" />
                </li>
                <li>
                  <FaFacebook size="30px" />
                </li>
                <li>
                  <FaLinkedin size="30px" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
