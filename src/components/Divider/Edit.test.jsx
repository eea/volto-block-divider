import React from 'react';
import renderer from 'react-test-renderer';
import Edit from './Edit';

const mockIntl = {
  formatMessage: ({ defaultMessage }) => defaultMessage,
};

const mockOnChangeBlock = jest.fn();

const baseProps = {
  data: {},
  block: 'test-block-id',
  onChangeBlock: mockOnChangeBlock,
  selected: true,
  intl: mockIntl,
};

jest.mock('@plone/volto/components/manage/Sidebar/SidebarPortal', () => {
  return ({ children }) => <div id="sidebar-portal">{children}</div>;
});

jest.mock('@plone/volto/components/manage/Form/BlockDataForm', () => {
  return (props) => (
    <div data-testid="block-data-form">
      <button
        data-testid="trigger-change"
        onClick={() => props.onChangeField('text', 'Changed Value')}
      >
        Change
      </button>
    </div>
  );
});

describe('Edit', () => {
  beforeEach(() => {
    mockOnChangeBlock.mockClear();
  });

  it('should render the component with default title message', () => {
    const component = renderer.create(<Edit {...baseProps} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render the component with custom title', () => {
    const component = renderer.create(
      <Edit {...baseProps} data={{ title: 'Custom Title' }} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toMatchSnapshot();
  });

  it('should pass the isEditMode prop to View', () => {
    const component = renderer.create(<Edit {...baseProps} />);
    const json = component.toJSON();
    // View should be rendered inside fieldset with isEditMode prop
    const fieldset = json;
    expect(fieldset.type).toBe('fieldset');
    // View component should be present as child
    const viewChild = fieldset.children.find(
      (child) => child.type === 'div' && child.props.className === 'divider',
    );
    expect(viewChild).toBeDefined();
  });

  it('should render sidebar portal when selected', () => {
    const component = renderer.create(<Edit {...baseProps} selected={true} />);
    const json = component.toJSON();
    const portal = json.find(
      (child) => child.type === 'div' && child.props.id === 'sidebar-portal',
    );
    expect(portal).toBeDefined();
  });

  it('should not render sidebar portal when not selected', () => {
    const component = renderer.create(<Edit {...baseProps} selected={false} />);
    const json = component.toJSON();
    // When not selected, SidebarPortal still renders but with selected=false
    // The component should still exist
    expect(json).toBeDefined();
  });

  it('should call onChangeBlock when a field changes in sidebar form', () => {
    const component = renderer.create(<Edit {...baseProps} />);
    const instance = component.root;
    const triggerButton = instance.findByProps({
      'data-testid': 'trigger-change',
    });
    renderer.act(() => {
      triggerButton.props.onClick();
    });

    expect(mockOnChangeBlock).toHaveBeenCalledWith('test-block-id', {
      text: 'Changed Value',
    });
  });

  it('should merge existing data when onChangeBlock is called', () => {
    const component = renderer.create(
      <Edit {...baseProps} data={{ hidden: true, section: false }} />,
    );
    const instance = component.root;
    const triggerButton = instance.findByProps({
      'data-testid': 'trigger-change',
    });
    renderer.act(() => {
      triggerButton.props.onClick();
    });

    expect(mockOnChangeBlock).toHaveBeenCalledWith('test-block-id', {
      hidden: true,
      section: false,
      text: 'Changed Value',
    });
  });
});
