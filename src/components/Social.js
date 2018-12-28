import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import 'semantic-ui-css/semantic.min.css';

const IconLink = styled(SocialIcon)`
  background-image: none;
  margin: 0 10px;
  
  :hover g.social-svg-mask {
    fill: #1ca086 !important; // #49bf9d lighter green
  }
`;

const Social = () => (
  <>
    <IconLink url='https://github.com/celineben' color='#282B2E' style={{ height: 40, width: 40 }}/>
    <IconLink url='https://twitter.com/celine_bsn' color='#282B2E' style={{ height: 40, width: 40 }}/>
    <IconLink url='https://www.linkedin.com/in/celinebensoussan' color='#282B2E' style={{ height: 40, width: 40 }}/>
  </>
);

export default Social;
