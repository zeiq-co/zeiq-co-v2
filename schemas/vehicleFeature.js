export default {
  title: ' Vehicle Feature',
  name: 'vehicleFeature',
  type: 'object',
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'Items',
          type: 'vehicleFeatureItem',
        },
      ],
    },
  ],
};
