export default {
  title: 'Settings Contact Item',
  name: 'settingsContactUsItem',
  type: 'object',
  fields: [
    {
      title: 'Genre',
      name: 'genre',
      type: 'string',
      options: {
        list: [
          { title: 'Phone Number', value: 'phoneNumber' },
          { title: 'Mail', value: 'mail' },
        ],
        layout: 'radio',
      },
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
