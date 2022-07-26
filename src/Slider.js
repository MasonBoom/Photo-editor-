import React from 'react'
import { SliderContainer, SliderObject } from './styles/Slider.styles'

export default function Slider({ min, max, value, handleChange}) {
  return (
    <SliderContainer>
      <SliderObject
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </SliderContainer>
  )
}