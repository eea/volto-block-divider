import React from 'react';
import cx from 'classnames';
import { Divider } from 'semantic-ui-react';
import config from '@plone/volto/registry';

const getStyle = (name) => {
  const { styles = [] } = config.blocks.blocksConfig.splitter;
  return styles.find(({ id }) => id === name);
};

const SplitterView = (props) => {
  const { style, color, class_name } = props.data;
  const styleName = getStyle(style);
  return (
    <Divider
      className={cx('divider-block', styleName?.cssClass, {
        'divider-primary': class_name === 'primary',
        'divider-secondary': class_name === 'secondary',
      })}
      style={{ borderTop: `1px solid ${color}` }}
    />
  );
};

export default SplitterView;
