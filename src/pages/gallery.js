import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Gallery = () => (
  <Layout>
    <Seo title="Gallery" />
    <Container text>
      <Header>Gallery</Header>
      <p>Photos coming soon</p>
    </Container>
  </Layout>
);

export default Gallery;
