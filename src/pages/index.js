import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container text>
      <Header>Bio</Header>
      <p>Céline is a web developer who holds her Masters in Computer Science from McGill University. After graduating, she joined a Montreal startup and played a key role as they scaled up and got acquired. She has built web applications using Polymer and React and is well versed in developing APIs. On top of being a developer, she has been involved in the women in tech community, mentoring for Canada Learning Code and Technovation Montréal.</p>
    </Container>
  </Layout>
);

export default IndexPage;
