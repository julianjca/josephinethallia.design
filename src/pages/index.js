import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo';
import { Landing, H1 } from '../styles';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Josephine Thallia - Graphic Designer</title>
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans:300,400,500,600,700,800,900 " rel="stylesheet" />
    </Helmet>
    <SEO title="Home" keywords={['graphic designer', 'designer', 'ui', 'ux']} />
    <Landing>
      <H1>Hello! <br/>
        I’m Josephine Thallia, <br/>
        a graphic designer.
      </H1>
    </Landing>
  </Layout>
)

export default IndexPage
