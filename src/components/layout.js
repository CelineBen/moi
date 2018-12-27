import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Social from './header'
import Menu from './menu'

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: #33333D;
`;

const Footer = styled.footer`
  text-align: center;
  border-top: 1px solid #eee;
  font-size: 0.85em;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Menu/>
        <Social siteTitle={data.site.siteMetadata.title} />
        <Body>{children}</Body>
        <Footer>
          © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
