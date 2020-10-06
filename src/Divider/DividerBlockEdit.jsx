import React, { Component } from 'react';

import { SidebarPortal } from '@plone/volto/components'; // EditBlock
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';

import { DividerBlockSchema } from './schema';
import DividerBlockView from './DividerBlockView';

class DividerBlockEdit extends Component {
  render() {
    const schema = DividerBlockSchema();
    return (
      <>
        <DividerBlockView data={this.props.data} />

        <SidebarPortal selected={this.props.selected}>
          <InlineForm
            schema={schema}
            title={schema.title}
            onChangeField={(id, value) => {
              this.props.onChangeBlock(this.props.block, {
                ...this.props.data,
                [id]: value,
              });
            }}
            formData={this.props.data}
          />
        </SidebarPortal>
      </>
    );
  }
}

export default DividerBlockEdit;
