import { FcNews } from 'react-icons/fc';
export default {
  name: 'news',
  type: 'document',
  icon: FcNews,
  title: 'News & Update',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      options: {
        minRows: 14,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseDate',
      media: 'image',
    },
  },
};
