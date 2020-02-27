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
      title: 'Stages',
      name: 'stages',
      type: 'array',
      of: [
        {
          title: 'Stages',
          type: 'pageSimpleStageItem',
        },
      ],
    },
  ],
};
