export default {
  name: 'aboutPage',
  type: 'object',
  title: 'About',
  fields: [
    {
      title: 'Column Reverse',
      name: 'columnReverse',
      type: 'boolean',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'markdown',
      options: {
        minRows: 10,
      },
    },
  ],
};
