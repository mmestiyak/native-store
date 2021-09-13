import React, { useState } from 'react';
import { TextInput , StyleSheet, View, Image} from 'react-native';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  return (
   <View style={styles.searchSection}>
     <Image style={styles.searchIcon} source={require('../images/loupe.png')}/>
       <TextInput style={styles.input} value={inputValue} placeholder="Search By Products" onChangeText={(value)=> { setInputValue(value)}}/>
   </View>
  )
}
 
const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    position: 'relative'
},
searchIcon: {
    // padding: 10,
    position: 'absolute',
    width:20,
    height: 20,
    top: 26,
    left: 20,
},
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding:10,
    margin: 10,
    fontSize: 25,
    paddingLeft:40
  }
})
export default SearchBar;