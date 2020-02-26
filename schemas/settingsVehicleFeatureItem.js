export default {
  title: 'Settings Vehicle Feature Item',
  name: 'settingsVehicleFeatureItem',
  type: 'object',
  fields: [
    {
      name: 'hasRight',
      title: 'Has Right',
      type: 'boolean',
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
      name: 'featuresBackgroundImage',
      title: 'Features Background Image',
      type: 'image',
    },
    {
      name: 'featuresFrameImage',
      title: 'Features Frame Image',
      type: 'image',
    },
  ],
};
