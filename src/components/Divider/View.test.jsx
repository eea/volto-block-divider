import React from 'react';
import renderer from 'react-test-renderer';
import View from './View';

describe('View', () => {
  it('should render the component', () => {
    const component = renderer.create(<View data={{}} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render the component with prop hidden', () => {
    const component = renderer.create(<View data={{ hidden: true }} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('hidden');
  });

  it('should render the component with prop section', () => {
    const component = renderer.create(<View data={{ section: true }} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('section');
  });

  it('should render the component with prop fitted', () => {
    const component = renderer.create(<View data={{ fitted: true }} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('fitted');
  });

  it('should render the component with prop text', () => {
    const component = renderer.create(<View data={{ text: 'test test' }} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('horizontal');
  });

  it('should render the component with prop styles with theme', () => {
    const component = renderer.create(
      <View data={{ styles: { theme: 'test', inverted: true } }} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.props.className).toContain('test');
    expect(json.props.className).toContain('inverted');
  });

  it('should render the component with prop styles, with no theme', () => {
    const component = renderer.create(
      <View data={{ styles: { inverted: true } }} />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('inverted');
  });

  it('should render the component with short', () => {
    const component = renderer.create(<View data={{ short: true }} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('short');
  });

  it('should render the component with all props with no theme', () => {
    const component = renderer.create(
      <View
        data={{
          hidden: true,
          fitted: true,
          text: 'test test',
          styles: { inverted: true },
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.children[0].props.className).toContain('hidden');
    expect(json.children[0].props.className).toContain('fitted');
    expect(json.children[0].props.className).toContain('inverted');
    expect(json.children[0].props.className).toContain('horizontal');
  });

  it('should render the component with all props with theme', () => {
    const component = renderer.create(
      <View
        data={{
          hidden: true,
          fitted: true,
          text: 'test test',
          styles: { theme: 'test', inverted: true },
        }}
      />,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
    expect(json.props.className).toContain('hidden');
    expect(json.props.className).toContain('fitted');
    expect(json.props.className).toContain('inverted');
    expect(json.props.className).toContain('horizontal');
  });
});
