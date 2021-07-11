import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero height={500} image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
        <div>
          <h4 className="text-white d-block text-center">Emerging Leaders</h4>
          <h4 className="text-white d-block text-center">and</h4>
          <h4 className="text-white d-block text-center">Scholars in STEM Academy</h4>
        </div>
      </Hero>
      <div className="container" style={{ minHeight: 1000 }}>
        <h2 className="text-center">Mission</h2>
        <p>
          To increase and promote inclusivity of students in pursuing
          (degrees/careers) in science, technology, engineering and mathematics (STEM).
        </p>
        <h2 className="text-center">Goals</h2>
        <ul>
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
          <li>Feedback on personal statement and strong reference for future opportunities</li>
        </ul>
        <h2 className="text-center">Boost Underrepresentation in STEM</h2>
        <ol>
          <li>Identify Role Models That Students can Relate To</li>
          <li>To Encourage students in STEM, Emphasize a Growth Mindset</li>
          <li>Involve Students in Project-Based Learning</li>
        </ol>
        <h2 className="text-center">The Power of Basic Research</h2>
        <h2 className="text-center">Why is Basic Research important?</h2>
        <ul>
          <li>Helps identify problems</li>
          <li>Collect informational resources to address problem</li>
          <li>Evaluate resources for quality and relevance</li>
          <li>Define and create effective solutions to problems</li>
          <li>Translational Skill</li>
        </ul>
        <h2 className="text-center">Discoveries Within a Decade</h2>
        <ul>
          <li>2011: HIV Preventative Treatment: 93% reduction in HIV transmission</li>
          <li>2014: Gravitational Waves: First evidence of the big bang</li>
          <li>2015: First CRISPR editing of human embryos: Potential to Cure genetic diseases</li>
          <li>2017: Oldest Homo sapiens fossils push species back 100,000 years!</li>
          <li>2019: First Black Hole Image</li>
        </ul>
        <h2 className="text-center">Future Leaders and Scholars</h2>
        <p>What will you discover?</p>
      </div>
    </>
  );
}

export default Home;
