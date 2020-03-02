export default {
  title: 'Page Simple Stage',
  name: 'pageSimpleStage',
  type: 'object',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      title: 'Item',
      name: 'item',
      type: 'array',
      of: [
        {
          title: 'Item',
          type: 'pageSimpleStageItem',
        },
      ],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
  ],
};
