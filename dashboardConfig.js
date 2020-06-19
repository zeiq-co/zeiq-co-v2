export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
    {
      name: 'notes',
      layout: {
        width: 'medium',
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: '9c7cc1cf-d202-4817-a98d-96f8c02bec21',
            buildHookId: '5e3bba5cd5d843dbf74ba934',
            name: 'Zeiq',
          },
        ],
      },
    },
  ],
};
