import React from 'react';
import styled from 'styled-components';
import Heading from './elements/Heading';

const data = [
  {
    text: 'Requirement Analysis',
  },
  {
    text: 'Project Allocation',
  },
  {
    text: 'Team match-up',
  },
];

const Container = styled.div`
  /* p {
    color: ${props => props.theme.textColor};
  } */
`;

const ClientReview = () => {
  return (
    <Container className="section">
      <div className="container">
        <Heading title="Words From Clients" />
        <div className="columns is-multiline">
          {data.map(item => (
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <p className="subtitle is-6">
                    For business professionals caught between high OEM price and
                    mediocre print and graphic output, there’s a solution:
                    Business Express’s Eclipse line of compatible laser toner
                    cartridges that meet or exceed
                  </p>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          className="is-rounded"
                          src="/images/userIcon.png"
                          alt="Place"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-6">John Smith</p>
                      <p className="subtitle is-7">@johnsmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default ClientReview;
