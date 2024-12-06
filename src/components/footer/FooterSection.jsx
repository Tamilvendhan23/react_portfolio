import React from 'react';
import PropTypes from 'prop-types';

function FooterSection({ title, children }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h4>
      {children}
    </div>
  );
}

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterSection;