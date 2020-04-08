import React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,Icon,TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./img1.jpg')} style={styles.container}>
      <View style={styles.inner}>

       <Text style={{color:"rgba(255,255,255,1)"}}> You have selected { this.props.screenProps.currentFriends.length } symptoms !</Text>
        <TouchableOpacity
          title="Add your symptoms (+)"
          color="rgba(102,0,255,0.8)"
          raised= 'true'
          rounded='true'
          onPress={() =>
            this.props.navigation.navigate('Symptoms')
          }
          style={styles.SubmitButtonStyle2}
          >
        <Text style={styles.text1}>Add your Symptoms (+)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Remove/View your Symptoms(-)"
          raised='true'
          borderRadius='true'
          onPress={() =>
            this.props.navigation.navigate('Remove_Symptoms')

          }
          style={styles.SubmitButtonStyle2}
        >
        <Text style={styles.text1}>Remove/View your Symptoms(-)</Text>
        </TouchableOpacity>
        <TouchableOpacity

          onPress={() =>this.props.screenProps.predictModule1()}
          color='rgba(204,0,255,0.8)'


            style={styles.SubmitButtonStyle}
            title="Predict"
        >
        <Text style={styles.text1}>Predict</Text>
        </TouchableOpacity>
        <TouchableOpacity
        title="Get Reports of Prediction"
        onPress={()=>this.props.screenProps.predictModule2()}
          color='rgba(204,0,255,0.8)'
          raised='true'
          style={styles.SubmitButtonStyle}
        >
        <Text style={styles.text1}>Get reports of Prediction</Text>
         </TouchableOpacity>
        <TouchableOpacity
        title= "See our Analysis"
        onPress={() =>
            this.props.navigation.navigate('Analysis')
         }
         style={styles.SubmitButtonStyle3}
          >
          <Text style={styles.text1}>See our Analysis</Text>
          </TouchableOpacity>

    </View>
      <Text style={{color:'white'}}>{"You may have "+this.props.screenProps.disease+""}</Text>
      <Text>{this.props.screenProps.diseaseVar}</Text>
      </ImageBackground>
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
    inner:{
        width: '80%',
            height: '80%',
         justifyContent:'space-between',
            backgroundColor:'rgba(51,51,255,0.01)',
     },
      SubmitButtonStyle: {

         marginTop:10,
         paddingTop:10,
         paddingBottom:10,
         //marginLeft:30,
         //marginRight:30,
         backgroundColor:'rgba(204,0,255,0.8)',
         borderRadius:10,
         borderWidth: 1,
         borderColor: '#fff',
         justifyContent:'center',
       },
       SubmitButtonStyle2: {
       marginTop:10,
                paddingTop:10,
                paddingBottom:10,
                //marginLeft:30,
                //marginRight:30,
                backgroundColor:'rgba(102,0,255,0.8)',
                borderRadius:10,
                borderWidth: 1,
                borderColor: '#fff',
                justifyContent:'center',

       },
       SubmitButtonStyle3:{
       marginTop:10,
                       paddingTop:10,
                       paddingBottom:10,
                       //marginLeft:30,
                       //marginRight:30,
                       backgroundColor:'rgba(243,0,0,0.8)',
                       borderRadius:10,
                       borderWidth: 1,
                       borderColor: '#fff',
                       justifyContent:'center',
       },
       text1:{
       color:'#fff',
       textAlign:'center',
       fontSize:18,
       }

  });