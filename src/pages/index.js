import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Section = styled.div`
  padding: 2rem 0;
  
  :not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  
  p {
    font-size: 1.2em;
  }
`;

const Highlighted = styled.span`
  color: #1ca086;
`;

const Bio = () => (
  <Section text>
    <h2>Bio</h2>
    <Grid columns={2} stackable>
      <Grid.Column textAlign='justified'>
        <p>My name is <Highlighted>Céline B</Highlighted> and I am a web developer.</p>
        <p>Originally from Paris, I have moved in Canada since 2009 and now live in <Highlighted>Montréal</Highlighted>.</p>
        <p>I graduated from Bishop's University with a BSc in Computer Science and from McGill with an MSc in Computer Science as well.</p>
      </Grid.Column>
      <Grid.Column textAlign='justified'>
        <p>When discovering web development, I left research behind and worked in fast growing Montréal startups. I first worked at <Highlighted>SweetIQ</Highlighted>, that was acquired in 2017 and I now work at <Highlighted>Breathe Life</Highlighted>.</p>
        <p>On top of being a developer, I have been involved in the women in tech community, mentoring for Canada Learning Code and Technovation Montréal.</p>
      </Grid.Column>
    </Grid>
  </Section>
);

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Bio/>
  </Layout>
);

export default IndexPage;
