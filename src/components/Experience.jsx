import React from 'react'

function Experience() {
  return (
    <>
     <section id="experience" className="section glass">
    <h2>Experience</h2>
    <div className="timeline">
      <div className="timeline-item">
        <h3>Intern | Sathya Technologies</h3>
        <p>Developed Bank Management System and Contact Manager applications using Spring Boot, MySQL, React.js, and REST APIs.</p>
      </div>
      <div className="timeline-item">
        <h3>Freelance Projects</h3>
        <p>Delivered multiple responsive websites and full stack applications for clients, focusing on performance and user experience.</p>
      </div>
    </div>
  </section>

  <section id="portfolio" className="section glass">
    <h2>Projects</h2>
    <div className="filter-bar">
      <button className="filter-btn active" data-filter="all">All</button>
      <button className="filter-btn" data-filter="java">Java</button>
      <button className="filter-btn" data-filter="react">React</button>
      <button className="filter-btn" data-filter="fullstack">Full Stack</button>
    </div>
      <div className="grid portfolio">
      <div className="card" data-cat="java">👤 Portfolio</div>
      <div className="card" data-cat="fullstack">🎵 MP3 Player Web App</div>
      <div className="card" data-cat="react">📇 Contact Manager App</div>
      <div className="card" data-cat="java">🏦 Bank Management System</div>
    </div>
  </section>

  <section id="education" className="section glass">
    <h2>Education & Certifications</h2>
    <ul>
      <li><strong>B.Sc.</strong> – Graduated with strong focus on programming fundamentals.</li>
      <li><strong>Full Stack Java Developer</strong> – Sathya Technologies, Grade A.</li>
      <li>Certifications in Data Structures & Algorithms, MongoDB, and Web Development.</li>
    </ul>
  </section>
    </>
  )
}

export default Experience