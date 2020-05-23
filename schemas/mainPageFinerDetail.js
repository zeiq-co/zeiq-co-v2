export default {
  title: 'Finer Details Item',
  name: 'mainPageFinerDetail',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'finerDetailsImage',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      options: {
        minRows: 20,
      },
    },
  ],
  preview: {
    select: {
      title: 'body',
      media: 'finerDetailsImage',
    },
  },
};
