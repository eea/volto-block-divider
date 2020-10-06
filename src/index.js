import rowSVG from '@plone/volto/icons/row.svg';
import DividerBlockView from './Divider/DividerBlockView';
import DividerBlockEdit from './Divider/DividerBlockEdit';

export default (config) => {
  config.blocks.blocksConfig.divider = {
    id: 'divider',
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
        title: 'Line',
        cssClass: 'divider-line',
      },
    ],
  };
  return config;
};
