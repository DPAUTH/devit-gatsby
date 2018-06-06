import React from 'react';
import GatsbyImage from 'gatsby-image';

import Block from './Block';
import {LightBlockHeading} from './BlockHeading';

const Plan = ({sizes}) => {
  return (
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
      <div className="container">
        <LightBlockHeading>Plan your stay at Thessaloniki</LightBlockHeading>
        <p>
          Lonely Planet has described Thessaloniki as “easy to fall in love with – it has beauty, chaos, history and culture, a remarkable cuisine and wonderful, vast sea views.” Discover hotel options, attractions, things to do and combine your visit with a memorable experience.
        </p>
        <a href="/explore-thessaloniki" className="block__more-cta">Find out more
          <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </Block>
  );
};

export default Plan;
