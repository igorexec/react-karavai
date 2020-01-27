import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import K from 'karavai'

const propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  threshold: PropTypes.number,
  shouldPreload: PropTypes.bool,
  onStart: PropTypes.func
}

const defaultProps = {
  threshold: 30,
  shouldPreload: false
}

const Karavai = ({ images, threshold, shouldPreload, onStart }) => {
  const canvasRef = useRef(null)

  useEffect(async () => {
    const k = new K(images, canvasRef.current, { threshold })
    if (shouldPreload) {
      await k.preloadImages()
    }
    k.start()
    onStart()
  }, [canvasRef])

  return <canvas ref={canvasRef} />
}

Karavai.propTypes = propTypes
Karavai.defaultProps = defaultProps

export default Karavai
