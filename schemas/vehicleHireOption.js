export default {
  title: 'Vehicle Hire Option',
  name: 'vehicleHireOption',
  type: 'object',
  fields: [
    {
      title: 'Hire Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'vehicleHireOptionItem',
        },
      ],
    },
  ],
};
