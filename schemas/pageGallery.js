export default {
  title: 'Page Gallery',
  name: 'pageGallery',
  type: 'object',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [
        {
          title: 'Gallery',
          type: 'pageGalleryItem',
        },
      ],
    },
  ],
};
