import React from 'react';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { defineMessages } from 'react-intl';
import { DividerEditSchema } from './Schema';
import View from './View';
import './divider.less';

const messages = defineMessages({
  Type: {
    id: 'Divider',
    defaultMessage: 'Divider',
  },
});

export default function DividerBlockEdit(props) {
  const { data, block, onChangeBlock, selected, intl } = props;
  const schema = DividerEditSchema({ intl });
  return (
    <>
      <fieldset className="divider-block">
        <legend aria-hidden="true">
          {data.title || intl.formatMessage(messages.Type)}
        </legend>
        <View {...props} isEditMode />
      </fieldset>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.Type)}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          fieldIndex={data.index}
          block={block}
        />
      </SidebarPortal>
    </>
  );
}
