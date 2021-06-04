import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <ImageBackground
          source={require('../assets1/assets/stars.gif')}
          style={styles.backgroundImage}>

          <Image
            source={require('../assets1/assets/main-icon.png')}
            style={{ width: 80, height: 160, marginLeft: 100 }}
          />
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('DailyPic');
            }}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../assets1/assets/daily_pictures.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('SpaceCrafts');
            }}>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Image
              source={require('../assets1/assets/space_crafts.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('StarMap');
            }}>
            <Text style={styles.routeText}>Star Map</Text>
           
            <Image
              source={require('../assets1/assets/star_map.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>

          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  routeCard: {
    backgroundColor:'white',
    marginLeft: 10,
    marginTop: 30,
    borderWidth: 3,
    alignItems: 'center',
    width: 300,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    borderColor: 'red',
    
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 0,
    marginRight: 70
  },
  iconImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    resizeMode: 'contain',
    right: 0,
    margintop: -100,
    marginmBottom: 0,
  },
});
