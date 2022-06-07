import installDeprecatedSplitter from './Splitter';

export default (config) => {
  return [installDeprecatedSplitter].reduce((acc, apply) => apply(acc), config);
};
