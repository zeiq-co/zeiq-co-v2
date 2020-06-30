import Tabs from 'sanity-plugin-tabs';

export default {
  type: 'document',
  title: `Frontpage`,
  name: `frontpage`,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,

      fieldsets: [
        { name: 'main', title: 'Main' },
        { name: 'aside', title: 'Aside' },
        { name: 'meta', title: 'Meta' },
      ],
      options: {
        layout: 'object',
      },

      fields: [
        {
          type: 'object',
          name: 'mainTitle',
          title: 'Main Title',
          fieldset: 'main',
          fields: [
            {
              type: 'string',
              name: 'header',
              title: 'Header',
            },
            {
              type: 'image',
              name: 'ingressText',
              title: 'Text',
            },
          ],
        },
        {
          type: 'string',
          name: 'info',
          title: 'Information',
          fieldset: 'aside',
        },
        {
          type: 'object',
          name: 'aside',
          fieldset: 'meta',
          inputComponent: Tabs,

          fieldsets: [
            { name: 'tags', title: 'Tags' },
            { name: 'categories', title: 'Categories' },
          ],

          fields: [
            {
              type: 'string',
              name: 'contentType',
              title: 'Content Type',
              fieldset: 'tags',
            },
            {
              type: 'string',
              name: 'category',
              title: 'Category',
              fieldset: 'categories',
            },
          ],
        },
      ],
    },
  ],
};
