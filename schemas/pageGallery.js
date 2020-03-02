export default {
  title: 'Page Gallery',
  name: 'pageGallery',
  type: 'object',
  fields: [
    {
      title: 'Gallery Items',
      name: 'galleryItems',
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
