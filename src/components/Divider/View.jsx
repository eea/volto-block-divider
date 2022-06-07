import React from 'react';
import cx from 'classnames';
import { Divider } from 'semantic-ui-react';

const View = ({ data }) => (
  <Divider
    hidden={data.hidden}
    section={data.section}
    fitted={data.fitted}
    className={cx(data.styles?.theme, data.styles?.short ? 'short' : '')}
    horizontal={data.text}
    inverted={data.styles?.inverted}
  >
    {data.text ? <div>{data.text}</div> : ''}
  </Divider>
);

export default View;
