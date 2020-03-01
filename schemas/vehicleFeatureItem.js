export default {
  title: 'Vehicle Feature Item',
  name: 'vehicleFeatureItem',
  type: 'object',
  fields: [
    {
      name: 'hasFrameRight',
      title: 'Has Frame Right',
      type: 'boolean',
    },
    {
      name: 'hasTextWhite',
      title: 'Has Text White',
      type: 'boolean',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'featuresBackgroundImage',
      title: 'Features Background Image',
      type: 'image',
    },
    {
      name: 'bgImageAlt',
      title: 'Background Image Alt',
      type: 'string',
    },
    {
      name: 'featuresFrameImage',
      title: 'Features Frame Image',
      type: 'image',
    },
  ],
};
