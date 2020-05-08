export default {
  title: 'Vehicle Information',
  name: 'vehicleInformation',
  type: 'object',
  fields: [
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
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
      validation: (Rule) => [
        Rule.required().max(2).error('only two items required'),
      ],
    },
  ],
};
