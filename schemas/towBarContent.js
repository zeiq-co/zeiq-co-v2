export default {
  title: 'Tow Bar Data',
  name: 'towBarContent',
  type: 'object',
  fields: [
    {
      title: 'Tow Bar Slug',
      name: 'towBarSlug',
      type: 'slug',
    },
    {
      name: 'towBarTitle',
      title: 'Tow Bar Title',
      type: 'string',
    },
    {
      name: 'towBarSubtitle',
      title: 'Tow Bar Subtitle',
      type: 'string',
    },
    {
      name: 'towBarDescription',
      title: 'Tow Bar Description',
      type: 'text',
    },
    {
      name: 'towBarBackgroundImage',
      title: 'Tow Bar Background Image',
      type: 'image',
    },
    {
      title: 'Tow Bar Gallery',
      name: 'towBarGallery',
      type: 'array',
      of: [{ type: 'mainPageGallery' }],
    },
  ],
};
