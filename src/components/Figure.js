import React from 'react'
import image1 from './state1.GIF'
import image2 from './state2.GIF'
import image3 from './state3.GIF'
import image4 from './state4.GIF'
import image5 from './state5.GIF'
import image6 from './state6.GIF'
import image7 from './state7.GIF'
import image8 from './state8.GIF'
import image9 from './state9.GIF'
import image10 from './state10.GIF'
import image11 from './state11.GIF'

const Figure = ({wrongLetters}) => {

    const errors = wrongLetters.length

  return (
    <div className="figure-container">
        {errors == 0 && <img src={image1} alt="State 1" />}
        {errors == 1 && <img src={image2} alt="State 2" />}
        {errors == 2 && <img src={image3} alt="State 3" />}
        {errors == 3 && <img src={image4} alt="State 4" />}
        {errors == 4 && <img src={image5} alt="State 5" />}
        {errors == 5 && <img src={image6} alt="State 6" />}
        {errors == 6 && <img src={image7} alt="State 7" />}
        {errors == 7 && <img src={image8} alt="State 8" />}
        {errors == 8 && <img src={image9} alt="State 9" />}
        {errors == 9 && <img src={image10} alt="State 10" />}
        {errors == 10 && <img src={image11} alt="State 11" />}
      </div>
  )
}

export default Figure
