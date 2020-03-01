export default {
  title: 'Settings Slider',
  name: 'settingsSlider',
  type: 'object',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },

    {
      title: 'Slider Item',
      name: 'sliderItem',
      type: 'array',
      of: [
        {
          title: 'Slider Content',
          type: 'settingsSliderItem',
        },
      ],
    },
  ],
};
