import React from 'react';

import Image1 from '../image'
import Image2 from '../image.1'
import Image3 from '../image.2'
import Image4 from '../image.3'

import { Container, H2, H3, GridContainer, Span } from './ProjectsStyle';

const Projects = () => (
  <Container>
    <H2>My Projects</H2>
    <GridContainer>
      <Image1/>
      <Image2/>
      <Image3/>
      <Image4/>
    </GridContainer>
    <H3>view all projects on <a href="https://dribbble.com/josephinethalia" target="blank" style={{color : '#78868F'}}><u>dribbble</u></a></H3>
  </Container>
);

export default Projects;