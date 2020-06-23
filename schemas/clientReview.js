import { FaUsers } from 'react-icons/fa';
export default {
  name: 'clientReview',
  type: 'document',
  icon: FaUsers,
  title: 'Client Review',
  fields: [
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
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
};
