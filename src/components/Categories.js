import React from 'react';
import {View, StyleSheet} from 'react-native'
import Category from './Category';
const categoriesData = [
  {
    id: 1,
    title: 'Men',
    img: `https://i.ibb.co/N1Rj78H/bussiness-man.png`
  },
  {
    id: 2,
    title: 'Women',
    img: `https://i.ibb.co/KVm4Kyn/businesswoman.png`
  },
  {
    id: 3,
    title: 'Kids',
    img: `https://i.ibb.co/FVVybk4/playtime.png`
  }, {
    id: 4,
    title: 'Home',
    img: `https://i.ibb.co/bmfb6hs/house.png`
  }
]
const Categories = () => {
  
 return(
  <View style={styles.container}>
  {categoriesData.map(category => <Category key={category.id} {...category}/> )}
</View>
 )
  
}

 const styles = StyleSheet.create({
   container: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     padding: 10,
   }
 })
export default Categories;