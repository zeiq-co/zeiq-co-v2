export default {
  title: 'Extras',
  name: 'siteSettingsExtraItem',
  type: 'object',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      title: 'Extras Page Gallery',
      name: 'gallery',
      type: 'array',
      of: [{ type: 'mainPageGallery' }],
    },
  ],
};
