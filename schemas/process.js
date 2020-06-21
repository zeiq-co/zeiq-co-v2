import { FcProcess } from 'react-icons/fc';
export default {
  name: 'process',
  type: 'document',
  icon: FcProcess,
  title: 'Process',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseDate',
    },
  },
};
