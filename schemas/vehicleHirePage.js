export default {
  name: 'vehicleHirePage',
  title: 'Vehicle Hire Page',
  type: 'document',
  fields: [
    {
      name: 'columnReverse',
      title: 'Column Reverse',
      type: 'boolean',
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      name: 'hireOptionTitle',
      title: 'Hire Option Title',
      type: 'string',
    },
    {
      name: 'hireOptionSubtitle',
      title: 'Hire Option Subtitle',
      type: 'string',
    },
    {
      name: 'hireOptionDescription',
      title: 'Hire Option Description',
      type: 'string',
    },
    {
      name: 'hireOptionPrice',
      title: 'Hire Option Price',
      type: 'string',
    },
    {
      name: 'hireOptionBlackImage',
      title: 'Hire Option Black Image',
      type: 'image',
    },
    {
      name: 'hireOptionColoredImage',
      title: 'Hire Option  Colored  Image',
      type: 'image',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },

    {
      name: 'hireHeroBackgroundImage',
      title: 'Hire Hero Background Image',
      type: 'image',
    },
    {
      name: 'hireHeroOption',
      title: 'Hire Hero Option',
      type: 'string',
    },
    {
      name: 'hireHeroTitle',
      title: 'Hire Hero Title',
      type: 'string',
    },
    {
      name: 'hireHeroSubtitle',
      title: 'Hire Hero Subtitle',
      type: 'string',
    },
    {
      title: 'Options Includes ',
      name: 'vehicleFeatures',
      type: 'settingsVehicleFeature',
    },
  ],
};
