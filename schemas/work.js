import { RiAppsLine } from 'react-icons/ri';
export default {
  name: 'work',
  type: 'document',
  icon: RiAppsLine,
  title: 'Our Work',
  fields: [
    {
      name: 'seoTitle',
      type: 'string',
      title: 'Seo Title',
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'Seo Description',
      description: 'Describe Your Website',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      title: 'Work Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Work Type',
      name: 'type',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      options: {
        minRows: 10,
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Play Store Url',
      name: 'playStoreUrl',
      type: 'url',
    },
    {
      title: 'App Store Url',
      name: 'appStoreUrl',
      type: 'url',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      // fields: [
      //   {
      //     name: 'alt',
      //     type: 'string',
      //     title: 'Alternative',
      //   },
      // ],
    },
    {
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
      // fields: [
      //   {
      //     title: 'Alternative Text',
      //     name: 'alt',
      //     type: 'string',
      //   },
      // ],
    },
    {
      title: 'About',
      name: 'about',
      type: 'aboutProject',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'image',
    },
  },
};
