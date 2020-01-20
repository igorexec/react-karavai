import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import K from 'karavai'

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  threshold: PropTypes.number
}

const defaultProps = {
  threshold: 30
}

const Karavai = ({ images, threshold }) => {
  const canvasRef = useRef()

  useEffect(() => {
    const k = new K()
  }, [])

  return <canvas ref={canvasRef} />
}

Karavai.propTypes = propTypes
Karavai.defaultProps = defaultProps

export default Karavai
