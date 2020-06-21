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
      name: 'homeHeroTitle',
      type: 'string',
      title: 'Home Hero Title',
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
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'Team Section Title',
      name: 'teamSectionTitle',
      type: 'string',
    },
    {
      title: 'Team Section Subtitle',
      name: 'teamSectionSubtitle',
      type: 'markdown',
      options: {
        minRows: 5,
      },
    },
    {
      title: 'Team Title',
      name: 'teamTitle',
      type: 'string',
    },
    {
      title: 'Team Subtitle',
      name: 'teamSubtitle',
      type: 'markdown',
      options: {
        minRows: 5,
      },
    },
    {
      title: 'Blog Section Title',
      name: 'blogSectionTitle',
      type: 'string',
    },
    {
      title: 'Blog Section Subtitle',
      name: 'blogSectionSubtitle',
      type: 'markdown',
      options: {
        minRows: 5,
      },
    },
    {
      title: 'Package Section Title',
      name: 'packageSectionTitle',
      type: 'string',
    },
    {
      title: 'Package Section Subtitle',
      name: 'packageSectionSubtitle',
      type: 'markdown',
      options: {
        minRows: 5,
      },
    },
    {
      title: 'Package Team Title',
      name: 'packageTeamTitle',
      type: 'string',
    },
    {
      title: 'package Team Subtitle',
      name: 'packageTeamSubtitle',
      type: 'markdown',
      options: {
        minRows: 5,
      },
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
};
