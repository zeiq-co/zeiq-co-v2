import Tabs from 'sanity-plugin-tabs';

export default {
  type: 'document',
  title: `Technology`,
  name: `technology`,
  inputComponent: Tabs,

  fieldsets: [
    { name: 'mobile', title: 'Mobile' },
    { name: 'frontEnd', title: 'Front End' },
    { name: 'dataBase', title: 'Database' },
    { name: 'backEnd', title: 'BackEnd' },
    { name: 'cms', title: 'Cms' },
  ],

  fields: [
    {
      title: 'Mobile',
      name: 'mobile',
      fieldset: 'mobile',
      type: 'array',
      of: [{ type: 'tab' }],
    },
    {
      name: 'frontEnd',
      title: 'FrontEnd',
      fieldset: 'frontEnd',
      type: 'array',
      of: [{ type: 'tab' }],
    },

    {
      name: 'dataBase',
      title: 'DataBase',
      fieldset: 'dataBase',
      type: 'array',
      of: [{ type: 'tab' }],
    },

    {
      name: 'backEnd',
      title: 'Back End',
      fieldset: 'backEnd',
      type: 'array',
      of: [{ type: 'tab' }],
    },
    {
      name: 'cms',
      title: 'Cms',
      fieldset: 'cms',
      type: 'array',
      of: [{ type: 'tab' }],
    },
  ],
};
