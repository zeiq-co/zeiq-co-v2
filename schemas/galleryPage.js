export default {
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      title: 'Gallery Images',
      name: 'galleryImages',
      type: 'gallery',
    },
  ],
};
