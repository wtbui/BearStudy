import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Dimension prop type
const dimensionPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 300,
  },
};

class Spotify extends Component {
  render() {
    const { uri, view, theme } = this.props;
    let { size } = this.props;

    if (typeof size === 'string') {
      size = sizePresets[size];
    }

    return (
      <iframe
        title="Spotify"
        className="SpotifyPlayer"
        src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
        width={size.width}
        height={size.height}
        allowtransparency="true"
      />
    );
  }

}

Spotify.propTypes = {

  // Spotify URI
  uri: PropTypes.string.isRequired,

  // Size as either a preset or as custom dimensions
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['large', 'compact']),
    PropTypes.shape({
      width: dimensionPropType,
      height: dimensionPropType,
    }),
  ]),

  // View
  view: PropTypes.oneOf(['list', 'coverart']),

  // Theme
  theme: PropTypes.oneOf(['black', 'white']),
};

Spotify.defaultProps = {
  size: 'large',
  view: 'list',
  theme: 'black',
};

export default Spotify;
