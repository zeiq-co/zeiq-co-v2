export default {
  title: 'Settings Slider',
  name: 'settingsSlider',
  type: 'object',
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'settingsSliderItem',
        },
      ],
    },
  ],
};
