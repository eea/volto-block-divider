import React from 'react';
import cx from 'classnames';
import { Divider } from 'semantic-ui-react';
import './divider.less';

export default ({ data }) => {
  return (
    <>
      {!data?.styles || Object.keys(data.styles).length === 0 ? (
        <div className="styled-dividerBlock">
          <Divider
            hidden={data.hidden}
            section={data.section}
            fitted={data.fitted}
            className={cx(data.styles?.theme, data.short ? 'short' : '')}
            horizontal={!!data.text}
            inverted={data.styles?.inverted}
          >
            {data.text ? <div>{data.text}</div> : ''}
          </Divider>
        </div>
      ) : (
        <Divider
          hidden={data.hidden}
          section={data.section}
          fitted={data.fitted}
          className={cx(data.styles?.theme, data.short ? 'short' : '')}
          horizontal={!!data.text}
          inverted={data.styles?.inverted}
        >
          {data.text ? <div>{data.text}</div> : ''}
        </Divider>
      )}
    </>
  );
};
