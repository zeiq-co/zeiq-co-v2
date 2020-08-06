import { FcServices } from 'react-icons/fc';
export default {
  name: 'service',
  type: 'document',
  icon: FcServices,
  title: 'Services',
  fields: [
    {
      title: 'Column Reverse',
      name: 'reverse',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'seoTitle',
      type: 'string',
      title: 'Seo Title',
    },
    {
      name: 'seoDescription',
      type: 'string',
      title: 'Seo Description',
    },

    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      options: {
        minRows: 14,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Single Services',
      name: 'singleServices',
      type: 'array',
      of: [{ type: 'singleService' }],
    },
    {
      title: 'Technology Items',
      name: 'technologyItems',
      type: 'reference',
      to: [{ type: 'technology' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
};
