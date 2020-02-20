export default {
  title: 'Settings Features',
  name: 'settingsFeatures',
  type: 'object',
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'settingsFeaturesItem',
        },
      ],
    },
  ],
};
