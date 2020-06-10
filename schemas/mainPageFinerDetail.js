export default {
  title: 'Finer Details Item',
  name: 'mainPageFinerDetail',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'finerDetailsImage',
      type: 'image',
    },
  ],
  preview: {
    select: {
      // title: 'content',
      media: 'finerDetailsImage',
    },
  },
};
