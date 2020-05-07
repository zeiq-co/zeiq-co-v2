export default {
  title: 'Finer Details Item',
  name: 'mainPageFinerDetail',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'finerDetailsTitle',
      type: 'text',
      description: 'Describe your Finer Details.',
    },
    {
      title: 'Image',
      name: 'finerDetailsImage',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'finerDetailsTitle',
      media: 'finerDetailsImage',
    },
  },
};
