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
      // fields: [
      //   {
      //     name: 'alt',
      //     type: 'string',
      //     title: 'Alternative',
      //   },
      // ],
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    // {
    //   title: 'Directors',
    //   name: 'directors',
    //   type: 'reference',
    //   to: [{ type: 'technology' }],
    // },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
};
