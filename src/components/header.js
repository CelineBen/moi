import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import 'semantic-ui-css/semantic.min.css';

const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const IconsContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
  text-align: center;
`;

const IconLink = styled(SocialIcon)`
  background-image: none;
  width: 20;
  height: 20;
  margin: 0 10px;
  
  :hover g.social-svg-mask {
    fill: #1ca086 !important;
  }
`;

const Social = () => (
  <Container>
    <IconsContainer>
      <IconLink url='https://github.com/celineben' color='#282B2E' style={{ height: 40, width: 40 }}/>
      <IconLink url='https://twitter.com/celine_bsn' color='#282B2E' style={{ height: 40, width: 40 }}/>
      <IconLink url='https://www.linkedin.com/in/celinebensoussan' color='#282B2E' style={{ height: 40, width: 40 }}/>
    </IconsContainer>
  </Container>
);

export default Social;
