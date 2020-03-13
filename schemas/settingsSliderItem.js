export default {
  title: 'Settings Slider Item',
  name: 'settingsSliderItem',
  type: 'object',
  fields: [
    {
      name: 'hasTextBlack',
      title: 'Has Text Black',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your Slider Features.',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'sliderDate',
      type: 'date',
    },
  ],
};
