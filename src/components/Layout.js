import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import Social from './Social'
import Menu from './Menu';

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
        <Grid centered>
          <Grid.Row columns={1}>
            <Menu/>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Social siteTitle={data.site.siteMetadata.title} />
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column computer={8} tablet={10} mobile={12}>
              {children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
