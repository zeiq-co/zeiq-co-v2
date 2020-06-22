import Tabs from 'sanity-plugin-tabs';

export default {
  type: 'document',
  title: `Technology`,
  name: `technology`,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'mobile', title: 'Mobile' },
        { name: 'frontEnd', title: 'Front End' },
        { name: 'database', title: 'Database' },
        { name: 'backEnd', title: 'Backend' },
        { name: 'developers', title: 'Developers' },
      ],
      options: {
        layout: 'object',
      },

      fields: [
        {
          title: 'Module',
          name: 'firstTab',
          fieldset: 'mobile',
          type: 'array',
          of: [{ type: 'tab' }],
        },
        {
          title: 'Module',
          name: 'secondTab',
          fieldset: 'frontEnd',
          type: 'array',
          of: [{ type: 'tab' }],
        },
        {
          title: 'Module',
          name: 'thirdTab',
          fieldset: 'database',
          type: 'array',
          of: [{ type: 'tab' }],
        },
        {
          title: 'Module',
          name: 'fourthTab',
          fieldset: 'backEnd',
          type: 'array',
          of: [{ type: 'tab' }],
        },
        {
          title: 'Module',
          name: 'fifthTab',
          fieldset: 'developers',
          type: 'array',
          of: [{ type: 'tab' }],
        },
      ],
    },
  ],
};
