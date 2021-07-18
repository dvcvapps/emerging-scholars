import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <div className="container-xxl p-0" style={{ minHeight: 600 }}>
        <Hero height="100vh" image="./assets/background-image.jpeg">
          <div className="border-top border-bottom p-3">
            <h4 className="text-white d-block text-center">Emerging Leaders</h4>
            <h4 className="text-white d-block text-center">and</h4>
            <h4 className="text-white d-block text-center">Scholars in STEM Academy</h4>
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
        <div className="row p-0 m-0">
          <Fade>
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
              <h2 className="text-center open-sans-font text-secondary">Goals</h2>
              <ul className="text-primary">
                <li>
                  Provide students exposure to basics of
                  research and examples of current cutting edge biomedical research
                </li>
                <li>
                  Acquire skills in developing a research question to
                  give a virtual science presentation in a STEM topic
                </li>
                <li>
                  Workshops (navigate academia, personal statement,
                  financial aid) and panels (STEM transfers, science/healthcare careers)
                </li>
                <li>
                  Feedback on personal statement and strong reference for
                  future opportunities
                </li>
              </ul>
            </div>
          </Fade>
          <Fade>
            <div className="col-md-6 d-flex  align-items-center flex-column">
              <h2 className="text-center open-sans-font text-secondary">Boost Underrepresentation in STEM</h2>
              <ol className="text-primary">
                <li>Identify Role Models That Students can Relate To</li>
                <li>To Encourage students in STEM, Emphasize a Growth Mindset</li>
                <li>Involve Students in Project-Based Learning</li>
              </ol>
            </div>
          </Fade>
        </div>
        <Fade>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-center open-sans-font text-secondary">Why is Basic Research important?</h2>
            <ul className="text-primary">
              <li>Helps identify problems</li>
              <li>Collect informational resources to address problem</li>
              <li>Evaluate resources for quality and relevance</li>
              <li>Define and create effective solutions to problems</li>
              <li>Translational Skill</li>
            </ul>
          </div>
        </Fade>
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
