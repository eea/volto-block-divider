import { settings, blocks } from '~/config';

export const DividerBlockSchema = () => ({
  title: 'Divider Block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'style', 'class_name'],
    },
    {
      id: 'advanced',
      title: 'Advanced',
      fields: ['color'],
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
      choices: blocks.blocksConfig.splitter.styles.map((style) => [
        style.id,
        style.title,
      ]),
    },
    color: {
      title: 'Color',
      widget: 'style_simple_color',
      available_colors: settings.available_colors,
    },
    class_name: {
      title: 'Class',
      choices: [
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
      ],
    },
  },

  required: [],
});
