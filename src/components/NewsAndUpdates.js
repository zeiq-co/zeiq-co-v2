import React from 'react';

import ImageWithDetails from './elements/ImageWithDetails';

const Data = [
  {
    subtitle:
      "Many of us are working on a computer desktop that when it comes to purchase a new computer , we don't consider",
    title: 'Why Do You Need To Join An Affiliate Marketing Network',
    date: '27 May , 2019',
    source:
      'https://images.unsplash.com/photo-1544380935-17ce6a107313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    subtitle:
      "Many of us are working on a computer desktop that when it comes to purchase a new computer , we don't consider",
    title: 'Why Do You Need To Join An Affiliate Marketing Network',
    date: '27 May , 2019',
    source:
      'https://images.unsplash.com/photo-1544380935-17ce6a107313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
  {
    subtitle:
      "Many of us are working on a computer desktop that when it comes to purchase a new computer , we don't consider",
    title: 'Why Do You Need To Join An Affiliate Marketing Network',
    date: '27 May , 2019',
    source:
      'https://images.unsplash.com/photo-1544380935-17ce6a107313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  },
];

const NewsAndUpdates = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-3 has-text-centered">News and Updates</h1>
        <div className="columns is-centered">
          {Data.map(data => (
            <div className="column is-4">
              <ImageWithDetails
                subtitle={data.subtitle}
                title={data.title}
                date={data.date}
                source={data.source}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsAndUpdates;
