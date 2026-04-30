export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Solar Panels', value: 'Solar Panels' },
          { title: 'Battery Storage', value: 'Battery Storage' },
          { title: 'Inverters', value: 'Inverters' },
          { title: 'EV Chargers', value: 'EV Chargers' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'efficiency', title: 'Efficiency', type: 'string' },
        { name: 'capacity', title: 'Capacity', type: 'string' },
        { name: 'warranty', title: 'Warranty', type: 'string' },
        { name: 'power', title: 'Power', type: 'string' },
        { name: 'connector', title: 'Connector', type: 'string' },
        { name: 'type', title: 'Type', type: 'string' },
      ],
    },
  ],
}
