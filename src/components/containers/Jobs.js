import React from 'react';
import Title from '../layout/Title';
import jobs from '../../constants/jobs';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../asset/css/Jobs.css';

const Jobs = () => {
  const [value, setValue] = React.useState(0);
  const { company, position, date, exp } = jobs[value];

  return (
    <section className="section job">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {exp.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn-common center-btn">
        more info
      </Link>
    </section>
  );
};

export default Jobs;
