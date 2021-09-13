import React from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderItem from './SliderItem';
const slideData = [
  {
    img: 'https://i.ibb.co/9gKzkHH/image.png' 
  },
  {
    content: {
      subTitle: 'hot deals',
      title: 'Easy to style upto 60% off',
      button: {
        label: 'Shop now'
      }
    }
  }
]
const Slider = () => {
  return ( <>
   <Carousel 
   layout={'default'}
   data = {slideData}
   renderItem= {SliderItem}
   sliderWidth={300}
   sliderHeight={300}
   itemHeight={300}
   itemWidth={300}
   />
   </> );
}
 
export default Slider;