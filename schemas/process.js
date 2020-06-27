import { FcProcess } from 'react-icons/fc';
export default {
  name: 'process',
  type: 'document',
  icon: FcProcess,
  title: 'Process',
  fields: [
    {
      title: 'Has the icon been right?',
      name: 'arrowIcon',
      type: 'boolean',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Icon',
      name: 'svgIcon',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'svgIcon',
    },
  },
};
