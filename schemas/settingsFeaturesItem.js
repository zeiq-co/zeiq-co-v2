export default {
  title: 'Settings Features Item',
  name: 'settingsFeaturesItem',
  type: 'object',
  fields: [
    {
      name: 'featuresBackgroundImage',
      title: 'Features Background Image',
      type: 'image',
    },
    {
      name: 'featuresFrameImage',
      title: 'Features Frame Image',
      type: 'image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your Features.',
    },
    {
      title: 'Features',
      name: 'features',
      type: 'settingsFeatures',
    },
  ],
};
