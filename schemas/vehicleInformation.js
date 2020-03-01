export default {
  title: 'Vehicle Information',
  name: 'vehicleInformation',
  type: 'object',
  fields: [
    {
      title: 'Item',
      name: 'item',
      type: 'array',
      of: [
        {
          title: 'Item',
          type: 'vehicleInformationItem',
        },
      ],
    },
  ],
};
