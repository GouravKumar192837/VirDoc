import React from 'react';
import { StyleSheet, Text, ScrollView,Button,FlatList,View} from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <ScrollView>

       <Text> Add friends here!</Text>
        {
          this.props.screenProps.possibleFriends.map((disease, index) => (
            <View style={styles.container}>
            <Button
              key={ disease}
              title={""+disease}
              type= "solid"
              onPress={() =>
                this.props.screenProps.addFriend(index)
              }
            />
            </View>
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