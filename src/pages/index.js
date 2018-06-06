import React, {Fragment} from 'react'
import Link from 'gatsby-link'

import Hero from '../components/blocks/Hero'
import Early from '../components/blocks/Early'
import About from '../components/blocks/About'
import Testimonials from '../components/blocks/Testimonials'
// import Speakers from '../components/blocks/Speakers'
import Venues from '../components/blocks/Venues'
import Plan from '../components/blocks/Plan'
import Sponsors from '../components/blocks/Sponsors'
import Partners from '../components/blocks/Partners'
import Subscribe from '../components/blocks/Subscribe'
import Footer from '../components/blocks/Footer'

const IndexPage = ({data, location}) => {
  return (
    <div>
      <Hero config={data.config} pathname={location.pathname}></Hero>
      <Early config={data.config}/>
      <About imageSrc={data.aboutImage.childImageSharp.sizes.src}/>
      <Testimonials imageSrcs={{
        hugo: data.hugoTestimonialsImage.childImageSharp.sizes,
        rhita: data.rhitaTestimonialsImage.childImageSharp.sizes,
        leonie: data.leonieTestimonialsImage.childImageSharp.sizes
      }}/>
      {/* <Speakers years='2018'/> */}
      <Venues imageSrcs={{
        cityCollege: data.cityCollegeImage.childImageSharp.sizes,
        royalTheatre: data.royalTheatreImage.childImageSharp.sizes,
      }}/>
      <Plan sizes={data.thessalonikiImage.childImageSharp.sizes}/>
      <Sponsors sponsors={data.sponsors.edges.map(node => node.node)} />
      <Partners
        partners={data.partners.edges.map(node => node.node)}
        weSupport={data.weSupport.edges.map(node => node.node)}
        />
      <Subscribe imageSrc={data.subscribeImage.childImageSharp.sizes} />
      {/* <Footer /> */}
  </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    aboutImage: file(relativePath: { eq: "new/team.jpg" }) {
      childImageSharp {
        sizes {
          src
        }
      }
    }
    hugoTestimonialsImage: file(relativePath: { eq: "new/hugo-342x342.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 342) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    rhitaTestimonialsImage: file(relativePath: { eq: "new/rita-jason-683x342.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    leonieTestimonialsImage: file(relativePath: { eq: "new/leonie-683x342.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 683) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    cityCollegeImage: file(relativePath: { eq: "venues/citycollege.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    royalTheatreImage: file(relativePath: { eq: "venues/royal_theatre.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    thessalonikiImage: file(relativePath: { eq: "new/thessaloniki.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    subscribeImage: file(relativePath: { eq: "new/subscribe.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    config(id: { eq: "Config"}) {
      date,
      tickets {
        enabled
        url
      },
      sponsors {
        cfs
        link_to_sponsorship
      }
    },
    sponsors: allSponsor(filter: { year: { eq: 2018 } }) {
      edges {
        node {
          name
          url
          year
          type
          override_height
          img {
            publicURL
            childImageSharp {
              sizes(maxWidth: 500) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
        }
      }
    },
    partners: allPartner {
      edges {
        node {
          name
          url
          override_height
          img {
            publicURL
            childImageSharp {
              sizes(maxWidth: 500) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
        }
      }
    },
    weSupport: allWeSupport {
      edges {
        node {
          name
          url
          override_height
          img {
            publicURL
            childImageSharp {
              sizes(maxWidth: 500) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
            }
          }
        }
      }
    },
  }
`
