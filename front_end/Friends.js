import React from 'react';
import { StyleSheet, Text, ScrollView,Button,FlatList,View,ImageBackground,TouchableOpacity} from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (


<ImageBackground source={require('./symptoms2.jpg')} style={styles.container}>
       <Text style={{color:'rgba(0,255,0,1)',fontSize:45,fontWeight:'bold',fontFamily:'sans-serif-light',}}> Add Symptoms here</Text>
      <View style={styles.inner}>
      <ScrollView >


        {
          this.props.screenProps.possibleFriends.map((disease, index) => (

            <TouchableOpacity
              key={ disease}
              title={""+disease}
              style={styles.SubmitButtonStyle}
              onPress={() =>
                this.props.screenProps.addFriend(index)
              }
            >
            <Text style={styles.text1}>{""+disease}</Text>
            </TouchableOpacity>

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
    <View/>
</View>
<View/>
<View/>
</ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width:null,
    //height:null,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    resizeMode: 'stretch',
  },
  inner: {
           width: '80%',
           height: '80%',
           //backgroundColor:'rgba(255,255,0,0.2)',
           justifyContent:'space-between',
  },
  SubmitButtonStyle:{
         marginTop:10,
                         paddingTop:10,
                         paddingBottom:10,
                         //marginLeft:30,
                         //marginRight:30,
                         backgroundColor:'rgba(255,0,102,0.3)',
                         borderRadius:10,
                         borderWidth: 1,
                         borderColor: 'blue',
                         justifyContent:'center',
         },
         text1:{
         color:'#fff',
         textAlign:'center',
         fontSize:30,
         fontFamily:'sans-serif-condensed',
         }

});