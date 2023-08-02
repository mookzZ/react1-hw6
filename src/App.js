import React from 'react';
import './App.css'
import Slider from './components/Slider/Slider';
import Image1 from './assets/Slider/1.jpg'
import Image2 from './assets/Slider/2.png'
import Image3 from './assets/Slider/3.png'
import Image4 from './assets/Slider/4.jpg'
import Image5 from './assets/Slider/5.jpg'
import Image6 from './assets/Slider/6.jpg'


const photos = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
]

const App = () => {
    return (
        <div className={'wrapper'}>
            <h1>Мой фото-слайдер</h1>
            <Slider photos={photos}/>
        </div>
    )
}

export default App
