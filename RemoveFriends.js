import React from 'react';
import { StyleSheet, Text, ScrollView,Button,FlatList} from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <ScrollView >

       <Text> Remove symptoms here!</Text>
        {
          this.props.screenProps.currentFriends.map((disease, index) => (
            <Button
              key={disease}
              title={""+this.props.screenProps.currentFriends[index]}
              onPress={() =>
                this.props.screenProps.remSymptom(index)
              }
            />

          )
        )
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
</ScrollView>
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