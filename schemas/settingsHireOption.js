export default {
  title: 'Settings Hire Option',
  name: 'settingsHireOption',
  type: 'object',
  fields: [
    {
      title: 'Hire Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'settingsHireOptionItem',
        },
      ],
    },
  ],
};
