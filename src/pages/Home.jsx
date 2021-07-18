import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Hero from '../components/Hero';
import Card from '../components/Card';

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
            <Zoom>
              <h2 className="text-center open-sans-font text-secondary text-white mt-3">Mission</h2>
              <p className="text-center text-white mb-3 w-75">
                To increase and promote inclusivity of students in pursuing
                (degrees/careers) science, technology, engineering and mathematics (STEM).
              </p>
            </Zoom>
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
        <Zoom>
          <div className="p-3">
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
        </Zoom>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="col-md-6">
            <Zoom>
              <h2 className="text-center open-sans-font text-secondary">Boost Underrepresentation in STEM</h2>
              <ul className="text-primary">
                <li>Identify Role Models That Students can Relate To</li>
                <li>To Encourage students in STEM, Emphasize a Growth Mindset</li>
                <li>Involve Students in Project-Based Learning</li>
              </ul>
            </Zoom>
          </div>
          <div className="col-md-6">
            <Zoom>
              <h2 className="text-center open-sans-font text-secondary">Why is Basic Research important?</h2>
              <ul className="text-primary">
                <li>Helps identify problems</li>
                <li>Collect informational resources to address problem</li>
                <li>Evaluate resources for quality and relevance</li>
                <li>Define and create effective solutions to problems</li>
                <li>Translational Skill</li>
              </ul>
            </Zoom>
          </div>
        </div>
        <Zoom>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-center open-sans-font text-secondary">Future Leaders and Scholars</h2>
            <p className="text-primary">What will you discover?</p>
          </div>
        </Zoom>
      </div>
    </>
  );
}

export default Home;
