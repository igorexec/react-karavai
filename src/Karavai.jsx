import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  threshold: PropTypes.number
}

const defaultProps = {
  threshold: 30
}

class Karavai extends React.Component {}

Karavai.propTypes = propTypes
Karavai.defaultProps = defaultProps

export default Karavai
