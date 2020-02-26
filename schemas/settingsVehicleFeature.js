export default {
  title: 'Settings Vehicle Feature',
  name: 'settingsVehicleFeature',
  type: 'object',
  fields: [
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        {
          title: 'Options',
          type: 'settingsVehicleFeatureItem',
        },
      ],
    },
  ],
};
