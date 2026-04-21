import applyConfig from './index';
import config from '@plone/volto/registry';

describe('index', () => {
  let testConfig;

  beforeEach(() => {
    testConfig = {
      blocks: {
        blocksConfig: {
          ...config.blocks.blocksConfig,
        },
      },
      widgets: {
        widget: {},
      },
      settings: {
        ...config.settings,
      },
    };
  });

  it('should install Divider block configuration', () => {
    const result = applyConfig(testConfig);
    expect(result.blocks.blocksConfig.dividerBlock).toBeDefined();
    expect(result.blocks.blocksConfig.dividerBlock.id).toBe('dividerBlock');
    expect(result.blocks.blocksConfig.dividerBlock.title).toBe('Divider');
    expect(result.blocks.blocksConfig.dividerBlock.group).toBe('common');
    expect(result.blocks.blocksConfig.dividerBlock.sidebarTab).toBe(1);
    expect(result.blocks.blocksConfig.dividerBlock.restricted).toBe(false);
    expect(result.blocks.blocksConfig.dividerBlock.mostUsed).toBe(false);
  });

  it('should set the correct schema for Divider block', () => {
    const result = applyConfig(testConfig);
    const dividerBlock = result.blocks.blocksConfig.dividerBlock;
    expect(dividerBlock.editSchema).toBeDefined();
    expect(dividerBlock.schemaEnhancer).toBeDefined();
  });

  it('should install Splitter deprecated block', () => {
    const result = applyConfig(testConfig);
    expect(result.blocks.blocksConfig.splitter).toBeDefined();
    expect(result.blocks.blocksConfig.splitter.id).toBe('splitter');
    expect(result.blocks.blocksConfig.splitter.title).toBe('Splitter');
    expect(result.blocks.blocksConfig.splitter.restricted).toBe(true);
  });

  it('should register style_simple_color widget', () => {
    const result = applyConfig(testConfig);
    expect(result.widgets.widget.style_simple_color).toBeDefined();
  });

  it('should define splitter styles array', () => {
    const result = applyConfig(testConfig);
    const splitter = result.blocks.blocksConfig.splitter;
    expect(splitter.styles).toBeDefined();
    expect(Array.isArray(splitter.styles)).toBe(true);
    expect(splitter.styles.length).toBe(5);
    expect(splitter.styles[0].id).toBe('inline');
    expect(splitter.styles[1].id).toBe('dotted');
    expect(splitter.styles[2].id).toBe('wideLine');
    expect(splitter.styles[3].id).toBe('line');
    expect(splitter.styles[4].id).toBe('simple');
  });
});
