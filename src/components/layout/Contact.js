import React from 'react';
import socialLinks from '../../constants/socialLinks';

const Contact = () => {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
        return (
          <a href={link.url} key={link.id} className="social-link">
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
