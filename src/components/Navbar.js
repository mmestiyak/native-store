import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
const Navbar = () => (
     <View style={styles.container}> 
      <View style={styles.navLeft}>
        <Image style={styles.navMenuIcon} source={require('../images/menu.png')}/>
        <Text style={styles.logo}>Creativa</Text>
      </View>
       <View style={styles.navRight}>
         <Image source={require('../images/shopping-cart.png')} style={styles.navIcon}/>
         <Image source={require('../images/notification.png')} style={styles.navIcon}/>

       </View>
     </View>
)
export default Navbar;

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 3,
  },
 navMenuIcon: {
    height: 35,
    width: 35,
    marginRight: 18,
  },
  navIcon: {
    height: 35, 
    width:35,
    margin: 5,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navRight: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    fontSize: 32,

  }
})