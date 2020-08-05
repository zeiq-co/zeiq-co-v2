export default {
  name: 'singleService',
  type: 'object',
  title: 'Single Service',
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
    },

    // {
    //   title: 'Directors',
    //   name: 'directors',
    //   type: 'reference',
    //   to: [{ type: 'technology' }],
    // },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
