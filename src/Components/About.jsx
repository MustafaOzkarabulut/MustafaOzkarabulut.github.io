import React from "react";


export default function About() {
  return (
    <section className="about section" enum-data={2}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src="https://i.hizliresim.com/pepqya3.png"
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            Web developer, working in web technologies, freelancer.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">4+</span>
              <span className="about__info-name">
                Years <br /> web development
              </span>
            </div>
            <div>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">
              Years <br /> Java development
              </span>
            </div>
            <div>
              <span className="about__info-title">5+</span>
              <span className="about__info-name">
              Completed <br /> project
              </span>
            </div>
          </div>

          <div className="about__buttons">
           
            
          </div>
        </div>
      </div>
    </section>
  )
}
