import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text> We have selected { this.props.screenProps.currentFriends.length } symptoms !</Text>
        <Button
          title="Add your symptoms (+)"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
        <Button
          title="Remove/View your Symptoms(-)"
          onPress={() =>
            this.props.navigation.navigate('RemoveFriends')
          }
        />
        <Button
          title="Predict"
          onPress={() =>this.props.screenProps.predictModule()}
        />
        <Button
        title= "See our Analysis"
        onPress={() =>
            this.props.navigation.navigate('Analysis')
        }
        />
        <Text>{this.props.screenProps.diseaseVar}</Text>
        <Text>{this.props.screenProps.obj1}</Text>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });