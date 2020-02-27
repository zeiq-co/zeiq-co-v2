export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'eventHeroTitle',
      title: 'Event Hero Title',
      type: 'string',
    },
    {
      name: 'eventHeroBackgroundImage',
      title: 'Event Hero Background image',
      type: 'image',
    },
    {
      name: 'eventHeroFrameImage',
      title: 'Event Hero Frame image',
      type: 'image',
    },
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
    },
    {
      title: 'Three Simple Stages',
      name: 'threeSimpleStages',
      type: 'pageSimpleStage',
    },
    {
      title: 'Home Features',
      name: 'homeFeatures',
      type: 'settingsFeatures',
    },
    {
      title: 'Festival',
      name: 'festival',
      type: 'pageSimpleStage',
    },
    {
      name: 'detailMainHeading',
      title: 'Detail Main Heading',
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

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
};
