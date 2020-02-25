export default {
  name: 'vehicleHirePage',
  title: 'Vehicle Hire Page',
  type: 'document',
  fields: [
    {
      name: 'hasRight',
      title: 'Has Right',
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
      title: 'Hire Option Black  Image',
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
  ],
};
