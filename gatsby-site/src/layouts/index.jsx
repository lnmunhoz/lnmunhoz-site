import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

// This should be passed as prop but I don't know how to do it yet.
import config from '../../gatsby-config';


class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle={config.siteMetadata.title} />
        {children()}
      </div>
    );
  }
}

export default Layout;
