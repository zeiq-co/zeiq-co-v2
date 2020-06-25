import { GrArticle } from 'react-icons/gr';
import { BsImageFill } from 'react-icons/bs';
export default {
  name: 'article',
  title: 'Article',

  type: 'document',
  icon: GrArticle,
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Except',
      name: 'except',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Body',
      type: 'array',
      name: 'body',
      of: [{ type: 'block' }, { type: 'image', icon: BsImageFill }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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
