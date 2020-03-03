export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'homeSeoTitle',
      title: 'Home Seo Title',
      type: 'string',
    },
    {
      title: 'Home Seo Keywords',
      name: 'homeSeoKeywords',
      type: 'string',
    },
    {
      title: 'Home Seo Meta Description',
      name: 'homeSeoMetaDescription',
      type: 'text',
    },
    {
      name: 'homeHeroBackgroundImage',
      title: 'Home Hero Background Image',
      type: 'image',
    },
    {
      name: 'homeHeroBannerImage',
      title: 'Home Hero Banner Image',
      type: 'image',
    },
    {
      name: 'telephone',
      type: 'string',
      title: 'Telephone',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      title: 'Home Features',
      name: 'homeFeatures',
      type: 'settingsFeatures',
    },
    {
      name: 'hireOptionSeoTitle',
      title: 'Hire Option Seo Title',
      type: 'string',
    },
    {
      title: 'Hire Option Seo Keywords',
      name: 'hireOptionSeoKeywords',
      type: 'string',
    },
    {
      title: 'Hire Option Seo Meta Description',
      name: 'hireOptionSeoMetaDescription',
      type: 'text',
    },
    {
      name: 'hireOptionSmallText',
      type: 'string',
      title: 'Hire Option Small Text',
    },

    {
      name: 'hireOptionLargeText',
      type: 'string',
      title: 'Hire Option Large Text',
    },
    {
      name: 'hireOptionDescription',
      type: 'text',
      title: 'Hire Option Description',
      description: 'Describe your hireOption .',
    },
    {
      name: 'hireOptionBackgroundImage',
      title: 'Hire Option Background Image',
      type: 'image',
    },
    {
      name: 'hireOptionFrameImage',
      title: 'Hire Option Frame Image',
      type: 'image',
    },
    {
      title: 'For Blog',
      name: 'information',
      type: 'pageSimpleStage',
    },
  ],
};
