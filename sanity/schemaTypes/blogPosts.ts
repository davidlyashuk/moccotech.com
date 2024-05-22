export default {
  name: 'blogPosts',
  type: 'document',
  title: 'Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Post title',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Post excerpt',
    },
    {
      title: 'Post content',
      name: 'blockEditor',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'images',
      type: 'image',
      title: 'Post image',
      // of: [{type: 'image'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Post slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Post categories',
      of: [
        {
          type: 'reference',
          to: [{type: 'blogCategories'}],
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Post SEO description',
    },
  ],
}
