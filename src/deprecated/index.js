import rowSVG from '@plone/volto/icons/divide-horizontal.svg';
import SplitterView from './Splitter/SplitterView';
import SplitterEdit from './Splitter/SplitterEdit';
import SimpleColorPicker from './Splitter/Widgets/SimpleColorPicker';

import './Splitter/splitter.less';

export default (config) => {
  config.blocks.blocksConfig.splitter = {
    id: 'splitter',
    title: 'Splitter',
    icon: rowSVG,
    group: 'common',
    view: SplitterView,
    edit: SplitterEdit,
    restricted: true,
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
