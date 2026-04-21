import { DividerEditSchema, DividerStylingSchema } from './Schema';

const mockIntl = {
  formatMessage: ({ defaultMessage }) => defaultMessage,
};

const mockSchema = {
  fieldsets: [{ title: 'Default', fields: [], id: 'default' }],
  properties: {},
  required: [],
};

describe('DividerEditSchema', () => {
  it('should return schema with correct title', () => {
    const schema = DividerEditSchema({ intl: mockIntl });
    expect(schema.title).toBe('Divider');
    expect(schema.block).toBe('divider');
  });

  it('should have all fields in fieldsets', () => {
    const schema = DividerEditSchema({ intl: mockIntl });
    const fields = schema.fieldsets[0].fields;
    expect(fields).toEqual([
      'title',
      'text',
      'hidden',
      'section',
      'fitted',
      'short',
      'spacing',
    ]);
  });

  it('should define all properties with correct types', () => {
    const schema = DividerEditSchema({ intl: mockIntl });
    expect(schema.properties.title).toBeDefined();
    expect(schema.properties.text).toBeDefined();
    expect(schema.properties.hidden).toBeDefined();
    expect(schema.properties.hidden.type).toBe('boolean');
    expect(schema.properties.section).toBeDefined();
    expect(schema.properties.section.type).toBe('boolean');
    expect(schema.properties.fitted).toBeDefined();
    expect(schema.properties.fitted.type).toBe('boolean');
    expect(schema.properties.short).toBeDefined();
    expect(schema.properties.short.type).toBe('boolean');
    expect(schema.properties.spacing).toBeDefined();
    expect(schema.properties.spacing.widget).toBe('image_size');
    expect(schema.properties.spacing.default).toBe('s');
  });

  it('should have no required fields', () => {
    const schema = DividerEditSchema({ intl: mockIntl });
    expect(schema.required).toEqual([]);
  });

  it('should localize property titles', () => {
    const customIntl = {
      formatMessage: ({ defaultMessage, id }) => id,
    };
    const schema = DividerEditSchema({ intl: customIntl });
    expect(schema.properties.title.title).toBe('Title');
    expect(schema.properties.text.title).toBe('Text');
    expect(schema.properties.hidden.title).toBe('Hidden');
    expect(schema.properties.section.title).toBe('Section');
    expect(schema.properties.fitted.title).toBe('Fitted');
    expect(schema.properties.short.title).toBe('Short');
    expect(schema.properties.spacing.title).toBe('Spacing');
  });

  it('should have spacing description', () => {
    const schema = DividerEditSchema({ intl: mockIntl });
    expect(schema.properties.spacing.description).toBe(
      'Use this option with the Hidden option to add spacing between blocks.',
    );
  });
});

describe('DividerStylingSchema', () => {
  it('should return schema with theme and inverted properties', () => {
    const schema = DividerStylingSchema({ intl: mockIntl, schema: mockSchema });
    expect(schema.properties.styles.schema).toBeDefined();
    const stylingSchema = schema.properties.styles.schema;
    expect(stylingSchema.fieldsets[0].fields).toEqual(['theme', 'inverted']);
  });

  it('should have theme with widget theme_picker', () => {
    const schema = DividerStylingSchema({ intl: mockIntl, schema: mockSchema });
    const stylingSchema = schema.properties.styles.schema;
    expect(stylingSchema.properties.theme).toBeDefined();
    expect(stylingSchema.properties.theme.widget).toBe('theme_picker');
  });

  it('should have inverted as boolean type', () => {
    const schema = DividerStylingSchema({ intl: mockIntl, schema: mockSchema });
    const stylingSchema = schema.properties.styles.schema;
    expect(stylingSchema.properties.inverted).toBeDefined();
    expect(stylingSchema.properties.inverted.type).toBe('boolean');
  });

  it('should include color options from config', () => {
    const schema = DividerStylingSchema({ intl: mockIntl, schema: mockSchema });
    const stylingSchema = schema.properties.styles.schema;
    expect(stylingSchema.properties.theme.colors).toBeDefined();
    expect(Array.isArray(stylingSchema.properties.theme.colors)).toBe(true);
  });
});
