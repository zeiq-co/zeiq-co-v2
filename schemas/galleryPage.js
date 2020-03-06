export default {
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    {
      name: 'seoTitle',
      title: 'Seo Title',
      type: 'string',
    },
    {
      title: 'Seo Keywords',
      name: 'seoKeywords',
      type: 'string',
    },
    {
      title: 'Seo Meta Description',
      name: 'seoMetaDescription',
      type: 'text',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
    },
    {
      title: 'Gallery Images',
      name: 'galleryImages',
      type: 'gallery',
    },
  ],
};
