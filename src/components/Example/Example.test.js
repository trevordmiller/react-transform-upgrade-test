import assert from 'assert';
import React from 'react/addons';
const {TestUtils} = React.addons;
import Example from './Example';

describe('Example', () => {

  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Example content='hello world' />);
  const result = shallowRenderer.getRenderOutput();

  it('should render the correct type and children', () => {
    assert.equal(result.type, 'p');
    assert.equal(result.props.children, 'hello world');
  });
});
