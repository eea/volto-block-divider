import { blocks } from '~/config';

export const DividerBlockSchema = () => ({
  title: 'Divider Block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'style', 'color'],
    },
  ],

  properties: {
    title: {
      title: 'Section title',
      description: 'Filling in will create an entry in the Table of Contents',
      widget: 'string',
    },
    style: {
      title: 'Style',
      choices: blocks.blocksConfig.divider.styles.map((style) => [
        style.id,
        style.title,
      ]),
    },
    color: {
      title: 'Color',
      choices: [
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
      ],
    },
  },

  required: [],
});
