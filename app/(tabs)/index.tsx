import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      {/* <Text style={styles.text}>Home screen</Text> */}
      {/* <Link href="/about" style={styles.button}>
        Go to About screen
      </Link> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  // text: {
  //   color: '#fff',
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: 'underline',
  //   color: '#fff',
  // },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});