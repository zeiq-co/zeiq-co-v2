import { RiMoneyDollarBoxLine } from 'react-icons/ri';
export default {
  name: 'paidProject',
  type: 'document',
  icon: RiMoneyDollarBoxLine,
  title: 'Paid Projects',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'seoTitle',
      type: 'string',
      title: 'Seo Title',
    },
    {
      name: 'seoDescription',
      title: 'Seo Description',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      options: {
        minRows: 10,
      },
    },
    {
      title: 'Live Demo',
      name: 'liveDemo',
      type: 'url',
    },
    {
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
    },
    {
      name: 'categoryTitle',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'categoryDescription',
      title: 'Category Description',
      type: 'markdown',
      options: {
        minRows: 5,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Screenshots',
      name: 'screenshots',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'homeHeroImage',
    },
  },
};
