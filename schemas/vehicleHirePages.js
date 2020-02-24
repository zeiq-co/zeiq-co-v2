export default {
  name: 'vehicleHirePages',
  title: 'Vehicle Hire Page',
  type: 'document',
  fields: [
    {
      title: 'Hire Options',
      name: 'hireOptions',
      type: 'vehicleHireOption',
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
