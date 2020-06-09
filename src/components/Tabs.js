import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const data = [
  {
    box: [
      {
        image: '/images/tabs/api.png',
        text: 'React js',
      },
      {
        image: '/images/tabs/gatsby.png',
        text: 'Gatsby',
      },
      {
        image: '/images/tabs/expo.png',
        text: 'Expo',
      },
      {
        image: '/images/tabs/api.png',
        text: 'Api',
      },
      {
        image: '/images/tabs/ql.png',
        text: 'GraphQL',
      },

      {
        image: '/images/tabs/next.png',
        text: 'Next.js',
      },
      {
        image: '/images/tabs/Aws.png',
        text: 'Aws',
      },
    ],
  },
];

const Wrapper = styled.div`
  .has-text-weight-bold {
    margin: 29px 0px 0px 0px;
  }
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
    color: ${props => props.theme.darkShades};
    user-select: none;
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
            <div className="columns is-multiline">
              {items.box.map(item => (
                <Wrapper className="column is-one-quarter hero">
                  <div className="box hero-body">
                    <figure className="image">
                      <img src={item.image} alt="social" />
                      <h2 className="is-size-6 has-text-centered has-text-weight-bold is-unselectable	">
                        {item.text}
                      </h2>
                    </figure>
                  </div>
                </Wrapper>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </Section>
  );
};

export default TabComponents;
