import React from 'react';
import { View, Text , Image, StyleSheet} from 'react-native';
const Category = ({img, title}) => {
return(
  <View style={styles.category}>
  <Image style={styles.img} source={{uri: img}} ></Image>
  <Text style={{fontSize: 18}}>{title}</Text>
</View>
)
}

const styles = StyleSheet.create({
  img: {
    width: 45,
    height:45,
    borderRadius: 9999999,
    borderWidth: 2,
    padding: 10,
    borderColor: '#f14'
   
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
export default Category;