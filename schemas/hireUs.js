export default {
  name: 'hireUs',
  type: 'object',
  title: 'Hire Us',
  fields: [
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
