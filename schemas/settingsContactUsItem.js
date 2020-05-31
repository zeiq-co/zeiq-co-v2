export default {
  title: 'Settings Contact Item',
  name: 'settingsContactUsItem',
  type: 'object',
  fields: [
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
  ],
};
