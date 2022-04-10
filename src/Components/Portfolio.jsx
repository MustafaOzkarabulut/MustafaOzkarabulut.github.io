import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";

export default function Portfolio() {
  return (
    <section className="section portfolio" enum-data={5}>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio__container container">
        <div>
          {/* Project 1 */}
          <div className="portfolio__content grid">
            <img
              src="https://i.hizliresim.com/nh8w1ov.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                HRMS Aplication React Frontend
              </h3>
              <p className="portfolio__description">
                A full functionality human resources management system app. It
                made with React and java spring boot
              </p>

              <a
                href="https://github.com/MustafaOzkarabulut/HRMS-Project-frontend"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="portfolio__content grid">
            <img
              src="https://i.hizliresim.com/ccydo7i.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                HRMS Aplication Spring Api Service
              </h3>
              <p className="portfolio__description">
              A full functionality human resources management system app. It
                made with React and java spring boot
              </p>

              <a
                href="https://github.com/MustafaOzkarabulut/javaCamp/tree/master/hrms"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="portfolio__content grid">
            <img
              src="https://user-images.githubusercontent.com/81626732/157667964-a8832519-78e7-4f55-8cbf-596bdac039ae.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Northwind E-Commerce Aplication React Frontend
              </h3>
              <p className="portfolio__description">
                A full functionality E-Commerce system app. It
                made with React and java spring boot
              </p>

              <a
                href="https://github.com/MustafaOzkarabulut/Northwind-Project-Frontend"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="portfolio__content grid">
            <img
              src="https://i.hizliresim.com/eauytdn.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                Northwind E-Commerce Aplication Spring Api Service
              </h3>
              <p className="portfolio__description">
                A full functionality E-Commerce system app. It
                made with React and java spring boot.
              </p>

              <a
                href="https://github.com/MustafaOzkarabulut/javaCamp/tree/master/northwind"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="portfolio__content grid">
            <img
              src="https://i.hizliresim.com/ojqqal6.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">
                YouTube Video Downloader
              </h3>
              <p className="portfolio__description">
                A full functionality youtube video downloader app. It
                made with React and Python Flask.
              </p>

              <a
                href="https://github.com/MustafaOzkarabulut/React-Youtube-Video-Downloader"
                target="_blank"
                className="button button__flex button__small portfolio__button"
                rel="noreferrer"
              >
                Demo
                <UilArrowRight className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
