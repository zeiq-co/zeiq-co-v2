export default {
  name: 'vehicleHirePages',
  title: 'Vehicle Hire Page',
  type: 'document',
  fields: [
    {
      title: 'Options',
      name: 'hireOptions',
      type: 'settingsHireOption',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
};
