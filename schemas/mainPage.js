export default {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
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
      type: 'text',
    },
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
      name: 'normalSubtitle',
      title: 'Subtitle Has Text Normal',
      type: 'string',
    },
    {
      title: 'Simple Stages',
      name: 'simpleStages',
      type: 'pageSimpleStage',
    },

    {
      name: 'firstSectionHasFrameRight',
      title: 'First Section Has Frame Right',
      type: 'boolean',
    },
    {
      name: 'firstSectionHasTextWhite',
      title: 'First Section Has Text White',
      type: 'boolean',
    },
    {
      name: 'firstSectionTitle',
      type: 'string',
      title: 'First Section Title',
    },
    {
      name: 'firstSectionBackgroundImage',
      title: 'First Section  Background Image',
      type: 'image',
    },
    {
      name: 'firstSectionBgImageAlt',
      title: 'First Section Background Image Alt',
      type: 'string',
    },
    {
      name: 'firstSectionFrameImage',
      title: 'First Section Frame Image',
      type: 'image',
    },

    {
      title: 'Festival',
      name: 'festival',
      type: 'pageSimpleStage',
    },

    {
      name: 'secondSectionHasFrameRight',
      title: 'Second Section Has Frame Right',
      type: 'boolean',
    },
    {
      name: 'secondSectionHasTextWhite',
      title: 'Second Section Has Text White',
      type: 'boolean',
    },
    {
      name: 'secondSectionTitle',
      type: 'string',
      title: 'Second Section Title',
    },
    {
      name: 'secondSectionBackgroundImage',
      title: 'Second Section  Background Image',
      type: 'image',
    },
    {
      name: 'secondSectionBgImageAlt',
      title: 'Second Section Background Image Alt',
      type: 'string',
    },
    {
      name: 'secondSectionFrameImage',
      title: 'Second Section Frame Image',
      type: 'image',
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
      name: 'thirdSectionHasFrameRight',
      title: 'Third Section Has Frame Right',
      type: 'boolean',
    },
    {
      name: 'thirdSectionHasTextWhite',
      title: 'Third Section Has Text White',
      type: 'boolean',
    },
    {
      name: 'thirdSectionTitle',
      type: 'string',
      title: 'Third Section Title',
    },
    {
      name: 'thirdSectionBackgroundImage',
      title: 'Third Section  Background Image',
      type: 'image',
    },
    {
      name: 'thirdSectionBgImageAlt',
      title: 'Third Section Background Image Alt',
      type: 'string',
    },
    {
      name: 'thirdSectionFrameImage',
      title: 'Third Section Frame Image',
      type: 'image',
    },

    {
      title: 'Gallery',
      name: 'gallery',
      type: 'pageGallery',
    },
  ],
};
