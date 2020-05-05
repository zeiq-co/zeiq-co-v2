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
      title: 'Category Set',
      name: 'categorySet',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Deckerdence Events', value: 'DECKERDENCE EVENTS' },
          {
            title: 'THE Deckerdence Journal',
            value: 'THE DECKERDENCE JOURNAL',
          },
          { title: 'Wedding Advice & Tips', value: 'WEDDING ADVICE & TIPS' },
          { title: 'Wedding Fairs', value: 'WEDDINGS FAIRS' },
          { title: 'Wedding Venue', value: 'WEDDINGS VENUE' },
        ],
      },
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
      name: 'blogArticleSeoTitle',
      title: 'Blog Article Seo Title',
      type: 'string',
    },
    {
      title: 'Blog Article Seo Keywords',
      name: 'blogArticleSeoKeywords',
      type: 'string',
    },
    {
      title: 'Blog Article Seo Meta Description',
      name: 'blogArticleSeoMetaDescription',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'blogPageContent' }],
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
      name: 'blogArticleSliderHeading',
      title: 'Blog Article Slider Heading',
      type: 'string',
    },
    {
      title: 'Blog Article Slider Items',
      name: 'blogArticleSliderItems',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
};
