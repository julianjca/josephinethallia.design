import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Landing from '../components/Landing'
import Image from '../components/image'
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Josephine Thallia - Graphic Designer</title>
      <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Open+Sans:300,400,500,600,700,800,900 " rel="stylesheet" />
    </Helmet>
    <SEO title="Home" keywords={['graphic designer', 'designer', 'ui', 'ux']} />
    <Landing/>
  </Layout>
)

export default IndexPage
