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
      title: 'Features',
      name: 'features',
      type: 'settingsFeatures',
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
      name: 'homeHeroTitle',
      type: 'text',
      title: 'Home Hero Title',
    },
    {
      name: 'homeHeroSubTitle',
      type: 'text',
      title: 'Home Hero SubTitle',
    },
    {
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
    },
    {
      title: 'Home Hero Link',
      name: 'homeHeroLink',
      type: 'string',
    },
    {
      name: 'homeAboutUs',
      type: 'text',
      title: 'Home About Us',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook URL',
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter URL',
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram URL',
    },
    {
      name: 'pinterest',
      type: 'string',
      title: 'Pinterest URL',
    },

    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your portfolio.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
};
