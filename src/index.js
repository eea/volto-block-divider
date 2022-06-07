import installDeprecatedSplitter from './deprecated';

export default (config) => {
  // BBB: DEPRECATED Splitter block
  config = installDeprecatedSplitter(config);

  // Install Divider block
};
