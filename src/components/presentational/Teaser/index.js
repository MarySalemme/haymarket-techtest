import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RetinaImage from 'react-retina-image';
import Rating from 'presentational/Rating';

/**
* <Teaser /> component.
*/
class Teaser extends PureComponent {

  /**
   * Implements propTypes().
   *
   * @return {Object} property types.
   */

  static propTypes = {
    carType: PropTypes.string,
    teaserTitle: PropTypes.string,
    rating: PropTypes.number,
    teaserCopy: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      'src@2x': PropTypes.string
    })
  };

  /**
   * Renders <Teaser /> component.
   *
   * @return {JSX} - rendered Teaser component.
   */
  render() : React.Element<*> {
    const {
      image: image = {},
      carType,
      teaserTitle,
      rating,
      teaserCopy,
      ...props
    } = this.props;

    const imageComponent = image.src ?
      <RetinaImage src = { [image.src, image['src@2x']] } /> : null;

    const carTypeComponent = carType ?
      <h2>{ carType }</h2> : null;

    const teaserTitleComponent = teaserTitle ?
      <h3>{ teaserTitle }</h3> : null;

    const ratingComponent = rating ?
      <Rating ratedValue = { rating } /> : null;

    const teaserCopyComponent = teaserCopy ?
      <p>{ teaserCopy.replace(/<\/?p>/g, '')}</p> : null;

    return (
      <div { ...props }>
        { imageComponent }
        { carTypeComponent }
        { teaserTitleComponent }
        { ratingComponent }
        { teaserCopyComponent }
      </div>
    );
  }
}

export default Teaser;
