import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box {
    min-height: 8rem;
  }
  img {
    width: auto;
    margin: 0 auto;
  }
`;

const TabComponents = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Mario</Tab>
        <Tab>Luigi</Tab>
        <Tab>Peach</Tab>
        <Tab>Yoshi</Tab>
        <Tab>Toad</Tab>
      </TabList>

      <TabPanel>
        <div className="columns">
          <Wrapper className="column is-one-quarter hero">
            <div className="box hero-body">
              <figure className="image">
                <img src="/images/Vector.png" alt="social" />
              </figure>
            </div>
          </Wrapper>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabComponents;
