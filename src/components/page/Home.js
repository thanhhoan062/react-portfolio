import React from 'react';
import HomeAnimation from './HomeAnimation';
import { Link } from 'react-router-dom';
import { Contact } from '../layout';
import '../../asset/css/Home.css';
import { Service, Jobs, Projects } from '../containers';

const Home = () => {
  return (
    <main>
      <>
        <header className="homie">
          <section className="section-center homie-center">
            <article className="homie-info">
              <div>
                <div className="underline"></div>
                <h1>i'm ace</h1>
                <h4>freelance web and mobile UI/UX Designer</h4>
                <Link to="/contact" className="btn-common">
                  contact
                </Link>
                <Contact />
              </div>
            </article>
            <img
              src="https://gatsby-strapi-portfolio-project.netlify.app/static/7f6c6bd3fbb2b7fb0973fdf4a19cb784/92499/hero.webp"
              alt="portfolio"
              className="homie-img-svg"
            />
          </section>
        </header>
        {/* <HomeAnimation /> */}
        <Service />
        <Jobs />
        <Projects title="featured projects" showLink />
      </>
    </main>
  );
};
export default Home;
