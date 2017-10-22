import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { articleRoute } from 'shared/routes';

class Tutorial extends Component {
  render() {
    const articleLink = articleRoute(this.props.docname);
    return (
      <article>
        <Link to={articleLink}>
          <h2>
            {this.props.title}
          </h2>
        </Link>
        <p>
          {this.props.children}
        </p>
        <Link to={articleLink}>Read more ...</Link>
      </article>
    );
  }
}

Tutorial.propTypes = {
  docname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
};

Tutorial.defaultProps = {
  children: '',
};

export default Tutorial;
