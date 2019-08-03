import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
          <Text>Hello Setting</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});
