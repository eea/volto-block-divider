import { vi } from 'vitest';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import config from '@plone/volto/registry';
import { blocksConfig } from '@plone/volto/config/Blocks';
import installSlate from '@plone/volto-slate/index';

global.jest = vi;

config.blocks.blocksConfig = {
  ...blocksConfig,
  ...config.blocks.blocksConfig,
};

[installSlate].reduce((acc, apply) => apply(acc), config);

const mockStore = configureStore([thunk]);

global.store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
    formatMessage: vi.fn(),
  },
  content: {
    create: {},
    subrequests: [],
  },
  connected_data_parameters: {},
  screen: {
    page: {
      width: 768,
    },
  },
});

const mockSemanticComponents = await vi.importActual('semantic-ui-react');
const mockComponents = await vi.importActual('@plone/volto/components');

vi.doMock('semantic-ui-react', () => ({
  ...mockSemanticComponents,
  Popup: ({ content, trigger }) => {
    return (
      <div className="popup">
        <div className="trigger">{trigger}</div>
        <div className="content">{content}</div>
      </div>
    );
  },
}));

vi.doMock('@plone/volto/components', () => {
  return {
    __esModule: true,
    ...mockComponents,
    SidebarPortal: ({ children }) => <div id="sidebar">{children}</div>,
  };
});

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);
