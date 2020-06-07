import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const data = [
  {
    image: '/images/tabs/api.png',
  },
  {
    image: '/images/tabs/aws.png',
  },
  {
    image: '/images/tabs/expo.png',
  },
  {
    image: '/images/tabs/gatsby.png',
  },
  {
    image: '/images/tabs/react.png',
  },
  {
    image: '/images/tabs/next.png',
  },
  {
    image: '/images/tabs/ql.png',
  },
];

const Wrapper = styled.div`
  .box {
    min-height: 12rem;
  }
  img {
    width: auto;
    margin: 0 auto;
  }
`;

const Section = styled.div`
  .react-tabs__tab-list {
    margin: 0px 0 75px;
    border-bottom: none;
    text-align: center;
  }
  .react-tabs__tab {
    border: none;
    user-select: none;
    color: ${props => props.theme.darkShades};
  }
  .react-tabs__tab--selected {
    color: ${props => props.theme.mainBrandColor};
  }
`;

const TabComponents = () => {
  return (
    <Section>
      <Tabs>
        <TabList>
          <Tab>Mobile</Tab>
          <Tab>Front End</Tab>
          <Tab>Database</Tab>
          <Tab>Backend</Tab>
          <Tab>info and developers8</Tab>
        </TabList>
        {data.map(items => (
          <TabPanel>
            <div className="columns">
              <Wrapper className="column is-one-quarter hero">
                <div className="box hero-body">
                  <figure className="image">
                    <img src={items.image} alt="social" />
                    <h2 className="is-size-6 has-text-centered has-text-weight-bold">
                      React js
                    </h2>
                  </figure>
                </div>
              </Wrapper>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </Section>
  );
};

export default TabComponents;
