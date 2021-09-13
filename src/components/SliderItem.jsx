import React from 'react';
import { Button, Image, View, Text } from 'react-native';
const SliderContent = ({content}) => {
  const {subTitle, title, button} = content
  return (
    <View>
      <Text>{subTitle}</Text>
      <Text>{title}</Text>
      <Button title='Shop now'></Button>
    </View>
  )
}
const SliderItem = ({item, index}) => {
  return ( <View>
    {item.img && <Image  source={{uri: item.img}} style={{height: 300, width: 300}} />}
    {item.content && <SliderContent content={item.content} /> }
  </View> );
}
 
export default SliderItem;