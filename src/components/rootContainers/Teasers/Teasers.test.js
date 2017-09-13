import React from 'react';
import Teasers from './index';
import Teaser from 'presentational/Teaser';

import { render } from 'enzyme';
import { expect }  from 'chai';

describe('<Teasers/>', () => {
  it('renders the Teasers component', () => {
    const wrapper = shallow(<Teasers />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
