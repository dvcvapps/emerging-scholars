/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Hero from '../components/Hero';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <div className="container-xxl p-0">
        <Hero height="100vh" image="./assets/background-image.jpeg">
          <div className="container ">
            <h1 className="text-white">ELSSA</h1>
            <p className="text-white">
              EMERGING LEADERS AND SCHOLARS IN STEM ACADEMY
            </p>
            <div className="social-links">
              <Link to="#" className="text-twitter" onClick={() => alert('This will redirect to Twitter')}><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
            </div>
          </div>
        </Hero>
        <div className="row p-0 m-0">
          <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column bg-primary">
            <Fade>
              <h2 className="text-center open-sans-font text-secondary text-white mt-3">Mission</h2>
              <p className="text-center text-white mb-3 w-75">
                To increase and promote inclusivity of students in pursuing
                (degrees/careers) science, technology, engineering and mathematics (STEM).
              </p>
            </Fade>
          </div>
          <div className="col-sm-6 bg-secondary">
            <div className="row">
              <Zoom>
                <div className="col col-sm-6 p-0">
                  <img width="100%" src="./assets/neuron.png" alt="" />
                </div>
                <div className="col col-sm-6 p-0">
                  <img width="100%" src="./assets/tech.png" alt="" />
                </div>
                <div className="col col-sm-6 p-0">
                  <img width="100%" src="./assets/engineering.png" alt="" />
                </div>
                <div className="col col-sm-6 p-0">
                  <img width="100%" src="./assets/math.png" alt="" />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        <Fade>
          <div className="">
            <h2 className="text-center open-sans-font text-secondary">Goals</h2>
            <div className="row text-primary">
              <div className="col-lg-3 mb-1">
                <Card
                  classNames="h-100"
                  header="#1"
                  desc="Provide students exposure to basics of
                research and examples of current cutting edge biomedical research"
                />
              </div>
              <div className="col-lg-3 mb-1">
                <Card
                  classNames="h-100"
                  header="#2"
                  desc="Acquire skills in developing a research question to
                give a virtual science presentation in a STEM topic"
                />
              </div>
              <div className="col-lg-3 mb-1">
                <Card
                  classNames="h-100"
                  header="#3"
                  desc="Workshops (navigate academia, personal statement,
                financial aid) and panels (STEM transfers, science/healthcare careers)"
                />
              </div>
              <div className="col-lg-3 mb-1">
                <Card
                  classNames="h-100"
                  header="#4"
                  desc="Feedback on personal statement and strong reference for
                future opportunities"
                />
              </div>
            </div>
          </div>
        </Fade>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="col-md-6">
            <Fade>
              <h2 className="text-center open-sans-font text-secondary">Boost Underrepresentation in STEM</h2>
              <ul className="text-primary">
                <li>Identify Role Models That Students can Relate To</li>
                <li>To Encourage students in STEM, Emphasize a Growth Mindset</li>
                <li>Involve Students in Project-Based Learning</li>
              </ul>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade>
              <h2 className="text-center open-sans-font text-secondary">Why is Basic Research important?</h2>
              <ul className="text-primary">
                <li>Helps identify problems</li>
                <li>Collect informational resources to address problem</li>
                <li>Evaluate resources for quality and relevance</li>
                <li>Define and create effective solutions to problems</li>
                <li>Translational Skill</li>
              </ul>
            </Fade>
          </div>
        </div>
        <Fade>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-center open-sans-font text-secondary">Future Leaders and Scholars</h2>
            <p className="text-primary">What will you discover?</p>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Home;
