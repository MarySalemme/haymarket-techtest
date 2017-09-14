import React from 'react';
import Teasers from './index';

import { expect }  from 'chai';

describe('<Teasers/>', () => {
  it('renders the Teasers component', () => {
    const wrapper = shallow(<Teasers />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
