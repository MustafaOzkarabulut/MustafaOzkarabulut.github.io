import React, { useState } from "react";
import {
  UilBracketsCurly,
  UilAngleDown,
  UilServerAlt,
  UilMobileAndroidAlt,
} from "@iconscout/react-unicons";
import useAnalyticsEventTracker from './Analytics/useAnalyticsEventTracker';



export default function Skills() {

  const gaEventTracker = useAnalyticsEventTracker('Skills');

  const [state, setState] = useState({
    openned: 0,
  });
  const getPertange = (value) => {
    return `${value}%`;
  };

  const getClassName = (value) => {
    return value === state.openned ? "skills__open" : "skills__close";
  };

  const handleSetOpen = (value) => {
    if (state.openned === value) {
      setState({
        ...state,
        openned: 0,
      });
    } else {
      setState({
        ...state,
        openned: value,
      });
    }
  };
  return (
    <section className="skills section" enum-data={3}>
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>

    <div className="skills__container container grid">
      <div>
        {/* Skills 1 */}
        <div className={`skills_content ${getClassName(1)}`}>
          <div className="skills__header" onClick={() => handleSetOpen(1 ,gaEventTracker('Frontend Developer'))}>
            <UilBracketsCurly className="skills__icon" />

            <div>
              <h1 className="skills__titles">Frontend Developer</h1>
              <span className="skills__subtitle">More than 3 years</span>
            </div>
            <UilAngleDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">95%</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__pertange skills__html"
                  style={{ width: getPertange(95) }}
                ></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__pertange skills__css"
                  style={{ width: getPertange(80) }}
                ></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__pertange skills__js"
                  style={{ width: getPertange(40) }}
                ></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span
                  className="skills__pertange skills__react"
                  style={{ width: getPertange(80) }}
                ></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Skills 2 */}

      {/* Skills 3 */}
      <div className={`skills_content ${getClassName(3)}`}>
        <div className="skills__header" onClick={() => handleSetOpen(3 ,gaEventTracker('Backend Developer'))}>
          <UilServerAlt className="skills__icon" />

          <div>
            <h1 className="skills__titles">Backend Developer</h1>
            <span className="skills__subtitle">More than 2 years</span>
          </div>

          <UilAngleDown className="skills__arrow" />
        </div>
        <div className="skills__list grid">

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Java</h3>
              <span className="skills__number">90%</span>
            </div>
            <div className="skills__bar">
              <span
                className="skills__pertange skills__csharp"
                style={{ width: getPertange(90) }}
              ></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Python</h3>
              <span className="skills__number">60%</span>
            </div>
            <div className="skills__bar">
              <span
                className="skills__pertange skills__java"
                style={{ width: getPertange(60) }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
