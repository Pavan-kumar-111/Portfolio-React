import resume from '../assets/PavanKumarResume.pdf'

export default function Hero() {
  return (
<section className="hero glass">
  <h2>Hello, I’m Pavan Kumar</h2>
  <p>Full Stack Java Developer | Spring Boot | React | MySQL</p>
  <a href="#contact" className="btn primary">Hire Me</a>
  <a
    href={resume}
    className="btn secondary"
    download
  >
    Download Resume
  </a>
</section>

  );
}