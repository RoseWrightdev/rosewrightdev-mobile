import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.paragraph}>Want me on your project? Don't be afraid to shoot me an email! I am a freelancer but I am open to all offers preferring part-time, and internship positions.</Text>
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
