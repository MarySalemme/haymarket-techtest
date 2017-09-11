import React from 'react';
import Teasers from './index';

import { render } from 'enzyme';
import { expect }  from 'chai';

describe('<Teasers/>', () => {
  it('renders the Teasers component', () => {
    const wrapper = render(<Teasers />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
