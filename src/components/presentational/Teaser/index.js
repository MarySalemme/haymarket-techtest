import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
    teaserCopy: PropTypes.string,
  };

  /**
   * Renders <Teaser /> component.
   *
   * @return {JSX} - rendered Teaser component.
   */
  render() : React.Element<*> {
    return (
      <div>
        <div>image goes here</div>
        <h2>{this.props.carType}</h2>
        <h3>{this.props.teaserTitle}</h3>
        <p>{this.props.teaserCopy}</p>
      </div>
    );
  }
}

export default Teaser;
