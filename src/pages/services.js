import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/elements/Heading';
import ServicesType from '../components/ServicesType';
import RegisterForm from '../components/form/RegisterForm';

const Data = [
  {
    title: 'Mobile Apps Development',
    description:
      'We  create cross platform mobile apps with javascript and react . Choosing react as an options to build apps already puts you a step forward in the competition as it allows you to give both IOS and android users with native experiences which leads to saved  time and money.Apps built in react native help the team to develop projects in the most efficient way possible as there is no dealing with lower level native code of mobile OS`es',
    features: [
      { feature: 'Native Experiences' },
      { feature: 'Custom UI' },
      { feature: 'Cross Platform Apps' },
      { feature: 'Highly Interactive' },
    ],
    image: '/images/services/serviceOne.png',
    flex: false,
  },
  {
    title: 'Web Apps Development',
    description:
      'Websites built by zeiq feels like native web apps as we use the latest technology stack in the industry and we leverage GraphQl a completely new way of getting data which allows our websites to be super fast and give the users a feel of a native application',
    features: [
      { feature: 'Statically Generated' },
      { feature: 'PWA' },
      { feature: 'Modern Tech Stack' },
      { feature: 'GraphQL' },
    ],
    image: '/images/services/serviceTwo.png',
    flex: true,
  },
  {
    title: 'Ecommerce Websites',
    description:
      "Building an e-commerce sit involves a lot of things, thankfully we've got you're back . We help you build the e-commerce that fits all of your needs, from custom plugins to content from wordpress and payments system , we are there for you!",
    features: [
      { feature: 'Shopify Plugins' },
      { feature: 'Magneto' },
      { feature: 'Plugins on Demand' },
      { feature: 'Payments System Built In' },
    ],
    image: '/images/services/service3rd.png',
    flex: false,
  },
  {
    title: 'Design UX',
    description:
      'Modern and clear design is at the heart of our principles. We design your products in collaboration with so you have the products that fit the needs of your users and we have the clarity to create amazing solutions.',
    features: [
      { feature: 'End to End' },
      { feature: 'Modern Design Practices' },
      { feature: 'Licensed TypeFonts' },
      { feature: 'Highly Contrasted Colors' },
    ],
    image: '/images/services/serviceTwo.png',
    flex: true,
  },
];

const Services = () => {
  return (
    <Layout>
      <Seo title="Services" description="Our Services" />
      <div className="section">
        <div className="container">
          <Heading
            columnSize
            title="A Software Development Company"
            subtitle="Creating future proof reliable websites and apps is our passion and that allows us to make to incredible contribution in making the internet a better place to be! Here are our some of our services that we offer to our clients. Couldn't find what you need here, don't worry reach out to us from the contact page."
          />
          {Data.map(item => (
            <ServicesType
              image={item.image}
              flex={item.flex}
              title={item.title}
              description={item.description}
              features={item.features}
            />
          ))}
        </div>
      </div>
      <RegisterForm />
    </Layout>
  );
};
export default Services;
