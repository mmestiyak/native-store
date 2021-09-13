
import React from 'react';
import Navbar from './src/components/Navbar';
import { StyleSheet, View } from 'react-native';

import SearchBar from './src/components/SearchBar';
import Categories from './src/components/Categories';
import Slider from './src/components/Slider';

const App = () => (
  <View>
    <Navbar/>
    <SearchBar/>
    <Categories/>
    <Slider/>
  </View>
)

export default App;
