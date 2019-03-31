import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Grid } from 'react-flexbox-grid';

import { StaticQuery, graphql } from "gatsby"

import Block from './Block';
import {LightBlockHeading} from './BlockHeading';

export default ({sizes}) => {
  return (
    <StaticQuery
      // query={graphql`{}`}
      render={(data) => (
        <Block style={{
          paddingTop: '11.5em',
          paddingBottom: '11.5em',
          position: 'relative',
        }}>
          <GatsbyImage
            sizes={sizes}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
            />
          <Grid>
            <LightBlockHeading>Plan your stay at Thessaloniki</LightBlockHeading>
            <p>
              Lonely Planet has described Thessaloniki as “easy to fall in love with – it has beauty, chaos, history and culture, a remarkable cuisine and wonderful, vast sea views.” Discover hotel options, attractions, things to do and combine your visit with a memorable experience.
            </p>
            <a href="/explore-thessaloniki" className="block__more-cta">Find out more
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </Grid>
        </Block>
      )}/>
  );
};
