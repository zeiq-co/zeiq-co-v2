import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Heading from '../components/elements/Heading';

const Blogs = () => {
  return (
    <Layout>
      <Seo title="Blog" description="Blog" keywords="Blog" />
      <Heading
        title="Our Blogs"
        subtitle="A home for inspiring stories on business and technology."
      />
      <Blog />
    </Layout>
  );
};

export default Blogs;
