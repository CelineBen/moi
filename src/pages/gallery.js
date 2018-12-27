import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <Container text>
      <Header>Gallery</Header>
      <p>Photos coming soon</p>
    </Container>
  </Layout>
);

export default Gallery;
