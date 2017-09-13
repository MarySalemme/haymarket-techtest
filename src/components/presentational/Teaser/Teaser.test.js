import React from 'react';
import Teaser from './index';

describe('<Teaser />', () => {

  const prepareTeaser = (props = {}, method = 'shallow') => {
    return global[method](<Teaser { ...props } />);
  }

  it('renders a <div>', () => {
    const wrapper = prepareTeaser();
    expect(wrapper.type()).to.equal('div');
  });

  it('renders only the image when it is set', () => {
    const wrapper = prepareTeaser({
      image: {
        src: 'tesla-model-3-url.jpg'
      }
    }, 'render');
    const img = wrapper.find('div').first().find('img');
    expect(img).to.have.length(1);
    expect(wrapper.find('div').first().find('h2')).to.have.length(0);
    expect(wrapper.find('div').first().find('h3')).to.have.length(0);
    expect(wrapper.find('div').first().find('div')).to.have.length(0);
    expect(wrapper.find('div').first().find('p')).to.have.length(0);
    expect(img.prop('src')).to.equal('tesla-model-3-url.jpg');
  });

  it('renders only the carType when it is set', () => {
    const wrapper = prepareTeaser({
      carType: 'UglyCar'
    }, 'render');
    const h2 = wrapper.find('div').first().find('h2');
    expect(h2).to.have.length(1);
    expect(h2.text()).to.equal('UglyCar');
    expect(wrapper.find('div').first().find('img')).to.have.length(0);
    expect(wrapper.find('div').first().find('h3')).to.have.length(0);
    expect(wrapper.find('div').first().find('div')).to.have.length(0);
    expect(wrapper.find('div').first().find('p')).to.have.length(0);
  });

  it('renders only the teaserTitle when it is set', () => {
    const wrapper = prepareTeaser({
      teaserTitle: 'New flying car'
    }, 'render');
    const title = wrapper.find('div').first().find('h3');
    expect(title).to.have.length(1);
    expect(title.text()).to.equal('New flying car');
    expect(wrapper.find('div').first().find('img')).to.have.length(0);
    expect(wrapper.find('div').first().find('h2')).to.have.length(0);
    expect(wrapper.find('div').first().find('div')).to.have.length(0);
    expect(wrapper.find('div').first().find('p')).to.have.length(0);
  });

  it('renders only the rating when it is set', () => {
    const wrapper = prepareTeaser({
      rating: 3
    }, 'render');
    const rating = wrapper.find('div').first().find('div');
    expect(rating).to.have.length(1);
    expect(wrapper.find('div').first().find('img')).to.have.length(0);
    expect(wrapper.find('div').first().find('h2')).to.have.length(0);
    expect(wrapper.find('div').first().find('h3')).to.have.length(0);
    expect(wrapper.find('div').first().find('p')).to.have.length(0);
  });

  it('renders only the teaserCopy when it is set', () => {
    const wrapper = prepareTeaser({
      teaserCopy: 'Supercool stuff going on here. Click to read more'
    }, 'render');
    const teaserCopy = wrapper.find('div').first().find('p');
    expect(teaserCopy).to.have.length(1);
    expect(teaserCopy.text()).to.equal('Supercool stuff going on here. Click to read more');
    expect(wrapper.find('div').first().find('img')).to.have.length(0);
    expect(wrapper.find('div').first().find('h2')).to.have.length(0);
    expect(wrapper.find('div').first().find('h3')).to.have.length(0);
    expect(wrapper.find('div').first().find('div')).to.have.length(0);
  });

  it('renders the elements in right order', () => {
    const wrapper = prepareTeaser({
      image: {
        src: 'ugly-car-url.jpg'
      },
      carType: 'UglyCar',
      teaserTitle: 'New ugly car out now',
      rating: 3,
      teaserCopy: 'This car will bring you wherever you need to go, but is really ugly'
    }, 'render');
    const div = wrapper.find('div').first().children();
    expect(div.length).to.equal(5);
    expect(div.eq(0).is('img')).to.be.true;
    expect(div.eq(0).prop('src')).to.equal('ugly-car-url.jpg');
    expect(div.eq(1).is('h2')).to.be.true;
    expect(div.eq(1).text()).to.equal('UglyCar');
    expect(div.eq(2).is('h3')).to.be.true;
    expect(div.eq(2).text()).to.equal('New ugly car out now');
    expect(div.eq(3).is('div')).to.be.true;
    expect(div.eq(4).is('p')).to.be.true;
    expect(div.eq(4).text()).to.equal('This car will bring you wherever you need to go, but is really ugly');
  });
});
