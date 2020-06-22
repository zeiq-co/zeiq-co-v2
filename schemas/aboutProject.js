export default {
  name: 'aboutProject',
  type: 'object',
  title: 'About Project',
  fields: [
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
        minRows: 6,
      },
    },
    {
      title: 'Screenshots',
      name: 'screenshots',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
