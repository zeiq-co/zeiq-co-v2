export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'object',
  fields: [
    {
      title: 'Gallery Image',
      name: 'galleryImage',
      type: 'array',
      of: [
        {
          title: 'Gallery',
          type: 'galleryImage',
        },
      ],
    },
  ],
};
