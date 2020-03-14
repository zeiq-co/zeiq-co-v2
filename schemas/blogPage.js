export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      name: 'isSizeHalf',
      title: 'Is Size Half',
      type: 'boolean',
    },
    {
      name: 'hasTextBlack',
      title: 'Has Text Black',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'blogArticleTitle',
      title: 'Blog Article Title',
      type: 'date',
    },
    {
      name: 'blogArticleMiddleText',
      title: 'Blog Article MiddleText',
      type: 'string',
    },
    {
      name: 'blogArticleSubtitle',
      title: 'Blog Article Subtitle',
      type: 'string',
    },
    {
      name: 'blogArticleHomeHeroImage',
      title: 'Blog Article Home Hero Image',
      type: 'image',
    },
    {
      name: 'blogArticleCategoriesHeading',
      title: 'Blog Article Categories Heading',
      type: 'string',
    },
    {
      title: 'Blog Article Categories',
      name: 'blogArticleCategories',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'string',
      },
    },
  ],
};
