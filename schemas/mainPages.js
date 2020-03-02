export default {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background image',
      type: 'image',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'string',
    },
    {
      title: 'Simple Stages',
      name: 'simpleStages',
      type: 'pageSimpleStage',
    },
    {
      title: 'Features',
      name: 'feature',
      type: 'vehicleFeature',
    },
    {
      title: 'Festival',
      name: 'festival',
      type: 'pageSimpleStage',
    },
    {
      name: 'detailsMainHeading',
      title: 'Details Main Heading',
      type: 'string',
    },
    {
      name: 'firstCardDescription',
      type: 'text',
      title: 'First Card Description',
      description: 'Describe your Finer Details.',
    },
    {
      name: 'secondCardDescription',
      type: 'text',
      title: 'Second Card Description',
      description: 'Describe your Finer Details.',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'pageGallery',
    },
  ],
};
