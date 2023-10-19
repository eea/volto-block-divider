import React from 'react';
import cx from 'classnames';
import { Divider } from 'semantic-ui-react';
import './divider.less';

export default function ViewBlockDivider({ data }) {
  const DividerRender = ({ data }) => (
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
  );

  return (
    <>
      {!data?.styles?.theme ? (
        <div className="styled-dividerBlock">
          <DividerRender data={data} />
        </div>
      ) : (
        <DividerRender data={data} />
      )}
    </>
  );
}
