import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const Banner = (props) => (
  <div className="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="caption">
            <h2>
              <Text field={props.fields.heading} />
            </h2>
            <div className="line-dec"></div>
            <RichText field={props.fields.description} />
            <div className="main-button">
              <a href="#">
                <Text field={props.fields.CTAText} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
