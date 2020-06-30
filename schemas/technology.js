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
      type: 'tab',
      name: 'mobile',
      title: 'Mobile',
      fieldset: 'mobile',
    },
    {
      type: 'tab',
      name: 'frontEnd',
      title: 'FrontEnd',
      fieldset: 'frontEnd',
    },
    {
      type: 'tab',
      name: 'dataBase',
      title: 'DataBase',
      fieldset: 'dataBase',
    },
    {
      type: 'tab',
      name: 'backEnd',
      title: 'Back End',
      fieldset: 'backEnd',
    },
    {
      type: 'tab',
      name: 'cms',
      title: 'Cms',
      fieldset: 'backEnd',
    },
  ],
};
