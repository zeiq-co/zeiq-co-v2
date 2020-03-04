export default {
  title: 'Site Settings Blog',
  name: 'siteSettingsBlog',
  type: 'object',
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Blog',
          type: 'siteSettingsBlogItem',
        },
      ],
    },
  ],
};
