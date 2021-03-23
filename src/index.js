import rowSVG from '@plone/volto/icons/divide-horizontal.svg';
import DividerBlockView from './Divider/DividerBlockView';
import DividerBlockEdit from './Divider/DividerBlockEdit';
import SimpleColorPicker from './Widgets/SimpleColorPicker';

import './styles.less';

export default (config) => {
  config.blocks.blocksConfig.splitter = {
    id: 'splitter',
    title: 'Divider',
    icon: rowSVG,
    group: 'common',
    view: DividerBlockView,
    edit: DividerBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    styles: [
      {
        id: 'inline',
        title: 'Inline',
        cssClass: 'divider-inline',
      },
      {
        id: 'dotted',
        title: 'Dotted',
        cssClass: 'divider-dotted',
      },
      {
        id: 'wideLine',
        title: 'Wide line',
        cssClass: 'divider-wide-line',
      },
      {
        id: 'line',
        title: 'Short Line',
        cssClass: 'divider-line',
      },
      {
        id: 'simple',
        title: 'Simple',
        cssClass: 'divider-simple',
      },
    ],
  };
  config.widgets.widget.style_simple_color = SimpleColorPicker;
  return config;
};
