import React from 'react';
import about from '../../constants/about';
import Title from '../layout/Title';
import '../../asset/css/About.css';

const About = () => {
  const { title, image, info, stack } = about;
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={image.publicURL} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
