export default {
  name: 'generalPage',
  title: 'General Page',
  type: 'document',
  fields: [
    {
      name: 'seoTitle',
      title: 'Seo Title',
      type: 'string',
    },
    {
      name: 'seoKeywords',
      title: 'Seo Keywords',
      type: 'string',
    },
    {
      name: 'seoMetaDescription',
      title: 'Seo Meta Description',
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
      name: 'middleText',
      title: 'Middle Text ',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'frame',
      title: 'Frame',
      type: 'image',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      title: 'Information',
      name: 'information',
      type: 'array',
      of: [{ type: 'aboutFeature' }],
    },
  ],
  preview: {
    select: {
      title: 'seoTitle',
      subtitle: 'slug.current',
      media: 'backgroundImage',
    },
  },
};
