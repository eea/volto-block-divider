import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Type: {
    id: 'Divider',
    defaultMessage: 'Divider',
  },
  Title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  TitleHelp: {
    id: 'Divider friendly name',
    defaultMessage: 'Divider friendly name',
  },
  Text: {
    id: 'Text',
    defaultMessage: 'Text',
  },
  TextHelp: {
    id: 'Text on top of the divider',
    defaultMessage: 'Text on top of the divider',
  },
  Hidden: {
    id: 'Hidden',
    defaultMessage: 'Hidden',
  },
  HiddenHelp: {
    id: 'A hidden divider divides content without creating a dividing line.',
    defaultMessage:
      'A hidden divider divides content without creating a dividing line.',
  },
  Section: {
    id: 'Section',
    defaultMessage: 'Section',
  },
  SectionHelp: {
    id: 'A divider can provide greater margins to divide sections of content.',
    defaultMessage:
      'A divider can provide greater margins to divide sections of content.',
  },
  Short: {
    id: 'Short',
    defaultMessage: 'Short',
  },
  ShortHelp: {
    id: 'Shorter line',
    defaultMessage: 'Shorter line',
  },
  Fitted: {
    id: 'Fitted',
    defaultMessage: 'Fitted',
  },
  FittedHelp: {
    id: 'A divider can be fitted, without any space above or below it.',
    defaultMessage:
      'A divider can be fitted, without any space above or below it.',
  },
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  ThemeHelp: {
    id: 'Divider theme',
    defaultMessage: 'Divider theme',
  },
  ThemePrimary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  ThemeSecondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  ThemeTertiary: {
    id: 'Tertiary',
    defaultMessage: 'Tertiary',
  },
  Inverted: {
    id: 'Inverted',
    defaultMessage: 'Inverted',
  },
  InvertedHelp: {
    id: 'A divider can have its colors inverted.',
    defaultMessage: 'A divider can have its colors inverted.',
  },
});

export const DividerEditSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'divider',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'text', 'hidden', 'section', 'fitted', 'short'],
    },
  ],

  properties: {
    title: {
      title: intl.formatMessage(messages.Title),
      description: intl.formatMessage(messages.TitleHelp),
    },
    text: {
      title: intl.formatMessage(messages.Text),
      description: intl.formatMessage(messages.TextHelp),
    },
    hidden: {
      title: intl.formatMessage(messages.Hidden),
      description: intl.formatMessage(messages.HiddenHelp),
      type: 'boolean',
    },
    section: {
      title: intl.formatMessage(messages.Section),
      description: intl.formatMessage(messages.SectionHelp),
      type: 'boolean',
    },
    fitted: {
      title: intl.formatMessage(messages.Fitted),
      description: intl.formatMessage(messages.FittedHelp),
      type: 'boolean',
    },
    short: {
      title: intl.formatMessage(messages.Short),
      description: intl.formatMessage(messages.ShortHelp),
      type: 'boolean',
    },
  },
  required: [],
});

export const DividerStylingSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'divider',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['theme', 'inverted'],
    },
  ],
  properties: {
    theme: {
      title: intl.formatMessage(messages.Theme),
      description: intl.formatMessage(messages.ThemeHelp),
      choices: [
        ['primary', intl.formatMessage(messages.ThemePrimary)],
        ['secondary', intl.formatMessage(messages.ThemeSecondary)],
        ['tertiary', intl.formatMessage(messages.ThemeTertiary)],
      ],
    },
    inverted: {
      title: intl.formatMessage(messages.Inverted),
      description: intl.formatMessage(messages.InvertedHelp),
      type: 'boolean',
    },
  },
  required: [],
});
