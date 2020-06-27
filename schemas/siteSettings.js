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
      name: 'seoTitle',
      type: 'string',
      title: 'Seo Title',
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'Seo Description',
      description: 'Describe Your Website',
    },
    {
      name: 'homeHeroTitle',
      title: 'Home Hero Title',
      type: 'string',
    },
    {
      name: 'homeHeroDescription',
      title: 'Home Hero Description',
      type: 'markdown',
      options: {
        minRows: 7,
      },
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'slug',
      options: {
        maxLength: 80,
      },
    },
    {
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'alternative',
    },
    {
      name: 'workGallery',
      title: 'Work Gallery',
      type: 'array',
      of: [
        {
          type: 'alternative',
        },
      ],
    },
    {
      name: 'purchaseUs',
      type: 'hireUs',
      title: 'Hire Us',
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
      name: 'address',
      type: 'string',
      title: 'Address',
    },
  ],
  preview: {
    select: {
      title: 'homeHeroTitle',
      media: 'homeHeroImage',
    },
  },
};
