export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      name: 'isSizeHalf',
      title: 'Is Size Half',
      type: 'boolean',
    },
    {
      name: 'hasTextBlack',
      title: 'Has Text Black',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
