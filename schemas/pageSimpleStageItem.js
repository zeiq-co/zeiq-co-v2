export default {
  title: 'Simple Stage Item',
  name: 'pageSimpleStageItem',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'slug',
    },
  ],
};
