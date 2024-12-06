import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

function FooterLink({ href, to, children, external }) {
  const className = "block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-2";
  
  if (to) {
    return (
      <Link
        to={to}
        smooth={true}
        duration={800}
        className={className}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer"
      })}
    >
      {children}
    </a>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

export default FooterLink;