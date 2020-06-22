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
      title: 'Svg Icon Url',
      name: 'svgIcon',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'svgIcon',
    },
  },
};
