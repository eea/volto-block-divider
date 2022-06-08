import installDeprecatedSplitter from './deprecated';
import iconSVG from '@plone/volto/icons/divide-horizontal.svg';
import {
  DividerEditSchema,
  DividerStylingSchema,
  DividerView,
  DividerEdit,
} from '@eeacms/volto-block-divider/components';

export default (config) => {
  // Install Divider block
  config.blocks.blocksConfig.dividerBlock = {
    id: 'dividerBlock',
    title: 'Divider',
    icon: iconSVG,
    group: 'common',
    view: DividerView,
    edit: DividerEdit,
    editSchema: DividerEditSchema,
    stylesSchema: DividerStylingSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    enableStyling: true,
    security: {
      addPermission: [],
      view: [],
    },
  };

  // BBB: DEPRECATED Splitter block
  return installDeprecatedSplitter(config);
};
