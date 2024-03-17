import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';
const Product = (props) => (
  <div>
    <Text field={props.fields.heading} />
    <div className="single-product">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <Text field={props.fields.title} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-slider">
              <div id="slider" className="flexslider">
                <Image media={props.fields.image} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <h4>
                <Text field={props.fields.title} />
              </h4>
              <h6>
                <Text field={props.fields.price} />
              </h6>
              <RichText field={props.fields.description} />
              <span>7 left on stock</span>
              <form>
                <label htmlFor="quantity">Quantity</label>
                <input name="quantity" type="number" className="quantity-text" id="quantity" />
              </form>
              <div className="down-content">
                <div className="categories">
                  <h6>
                    Category:{' '}
                    <span>
                      <a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a>
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
