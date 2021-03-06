import React from "react";
import { Link } from "react-scroll";
import { UilLinkedin, UilInstagram, UilGithub, UilYoutube, } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">Mustafa Özkarabulut</h1>
          <span className="footer__subtitle">
            Frontend & Backend Developer
          </span>
        </div>

        <ul className="footer__links">
          <li>
            <Link to="portfolio" className="footer__link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" className="footer__link">
              Contactme
            </Link>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.youtube.com/channel/UC4_Y573ksLfpVG2VgPfh7jQ"
            target="_blank"
            className="footer__social"
            rel="noreferrer"
          >
            <UilYoutube />
          </a>
          <a
            href="https://www.instagram.com/mustafa_ozkarabulut/"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <UilInstagram />
          </a>
          <a
            href="https://github.com/MustafaOzkarabulut"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <UilGithub />
          </a>
        </div>
      </div>
      <p className="footer__copy">&#169; Mustafa Ozkarabulut. All right reserved. </p>
    </div>
  </footer>
  )
}
