/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './Slider.css'

export default () => {
  const salutations = ['Hello', 'Bonjour', 'नमस्ते', 'Hola', 'Ciao', 'Olá']
  const [opacities, setOpacities] = React.useState([])

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        setOpacities(new_opacities)
      },
      drag: false,
      mode: 'free-snap',
      slides: salutations.length,
      // slides: {
      //   origin: "center",
      //   perView: 1,
      //   spacing: 10
      // },
      vertical: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 500)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <div ref={sliderRef} className='keen-slider' style={{ height: 180 }}>
      {salutations.map((src, idx) => {
        return (
          <p
            key={idx}
            className='keen-slide keen-slider__slide number-slide'
            style={{ opacity: opacities[idx] }}
          >
            <p className='slider-text'>{src}</p>
          </p>
        )
      })}
    </div>
  )
}
