export default {
  title: 'Contact Us Page',
  name: 'settingsContactUs',
  type: 'object',
  fields: [
    {
      title: 'Seo Title',
      name: 'seoTitle',
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
      type: 'string',
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Contact Item',
      name: 'contactItem',
      type: 'array',
      of: [
        {
          title: 'Content',
          type: 'settingsContactUsItem',
        },
      ],
    },
  ],
};
