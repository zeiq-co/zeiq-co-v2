import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';
import Features from './elements/Features';

const features = [
  {
    title: 'Category',
    points: ['GROCERY BY CATEGORY', 'NOTIFICATIONS', 'STORE LOCATOR'],
  },
  {
    title: 'Features',
    points: [
      'FILTER AVAILABLE',
      'PROFILE',
      'ORDER TRACKING',
      'APP SOURCE CODE,',
    ],
  },

  {
    title: 'Order Status',
    points: [
      'SEARCH GROCERY ITEMS',
      'ORDER HISTORY',
      'COUPONS',
      'COUPON OFFERS',
      'ATTRIBUTES OF PRODUCT',
    ],
  },
  {
    title: 'Activities',
    points: ['CREATE PRODUCT ITEM', 'EDIT PRODUCT ITEM', 'DELETE PRODUCT ITEM'],
  },
];

const Section = styled.div`
  h1 {
    margin-bottom: 8px !important;
    line-height: 40px !important;
  }
`;
const PaidScreens = () => {
  return (
    <Section className="section is-medium">
      <div className="container">
        <Heading
          title="APP ORDERING SYSTEM SCREENS"
          subtitle="Fully customizable, functional, ready-to-use by the end-users with easily configurable Online Zeiq delivery Mobile Application/Software built on the latest leading technology Flutter. You Should check out with app features."
        />

        <div className="columns is-multiline">
          {features.map(item => (
            <div className="column is-3">
              <h1 className="title is-size-6">{item.title}</h1>
              {item.points.map(text => (
                <Features text={text} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PaidScreens;
