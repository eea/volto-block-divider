import React from 'react';
import cx from 'classnames';

const DividerBlockView = (props) => {
  const { style = 'line', color = 'primary' } = props;
  return (
    <hr
      className={cx('divider-block', style?.cssClass, {
        'divider-secondary': color === 'secondary',
        'divider-primary': color === 'primary',
      })}
    />
  );
};

export default DividerBlockView;
