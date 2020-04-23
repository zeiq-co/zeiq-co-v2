export default {
  title: 'Tow Bar',
  name: 'towBar',
  type: 'object',
  fields: [
    {
      title: 'Tow Bar Content',
      name: 'towBarContent',
      type: 'array',
      of: [
        {
          title: 'Tow bar',
          type: 'towBarContent',
        },
      ],
    },
  ],
};
