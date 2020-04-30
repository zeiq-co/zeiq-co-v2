export default {
  name: 'mainPage',
  title: 'Main Page',
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
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background image',
      type: 'image',
    },
    {
      name: 'normalSubtitle',
      title: 'Subtitle Has Text Normal',
      type: 'string',
    },
    {
      name: 'detailsMainHeading',
      title: 'Details Main Heading',
      type: 'string',
    },
    {
      name: 'firstCardDescription',
      type: 'text',
      title: 'First Card Description',
      description: 'Describe your Finer Details.',
    },
    {
      name: 'secondCardDescription',
      type: 'text',
      title: 'Second Card Description',
      description: 'Describe your Finer Details.',
    },
    {
      title: 'features',
      name: 'Features',
      type: 'vehicleFeature',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{ type: 'mainPageGallery' }],
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'slug.current',
      media: 'heroBackgroundImage',
    },
  },
};
