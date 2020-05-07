export default {
  title: 'Extras Page',
  name: 'siteSettingsExtra',
  type: 'object',
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
      type: 'string',
    },
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'mainSubtitle',
      title: 'Main Subtitle',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'extrasContent',
      type: 'array',
      of: [
        {
          title: 'Extra',
          type: 'siteSettingsExtraItem',
        },
      ],
    },
  ],
};
