import React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
    <ImageBackground source={require('./img7.jpg')} style={styles.container}>
    <View/>
        <Text>Reports..</Text>
      <View style={styles.inner}>

        <Text style={styles.text2}>{"You may be suffering from "}<Text style={styles.text3}>{this.props.screenProps.disease}</Text></Text>
        <Text style={styles.text2}>{"You must consult a/an: "}<Text style={styles.text3}>{this.props.screenProps.specalist}</Text></Text>
        <TouchableOpacity
        title={"Get more details about "+this.props.screenProps.disease}
        onPress={() =>
               this.props.navigation.navigate('details_link_View')
        }
        style={styles.SubmitButtonStyle}
        >
        <Text style={styles.text1}>{"Get more details about "+this.props.screenProps.disease}</Text>
        </TouchableOpacity>
        <TouchableOpacity
                     title="Video Call"
                     onPress={() =>
                      this.props.navigation.navigate('VideoCall')
                          }
                          style={styles.SubmitButtonStyle3}
                        >
                    <Text style={styles.text1}>{"Consult a Doctor on Video Call"}</Text>
                 </TouchableOpacity>
        <TouchableOpacity
             title="Get Directions to the nearest hospital"
             onPress={() =>
               this.props.screenProps.getDirection()
                  }
                  style={styles.SubmitButtonStyle2}
                >
                <Text style={styles.text1}>Get Directions to the nearest hospital</Text>
                </TouchableOpacity>
       </View>
       <View/>
       </ImageBackground>

    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'white',
      alignItems: 'center',
      width:null,
      height:null,
      justifyContent: 'space-between',
      resizeMode:'cover',
    },
    inner:{
         width: '80%',
         height: '70%',
         backgroundColor:'rgba(255,255,0,0.2)',
         justifyContent:'space-between',
    },
    SubmitButtonStyle: {

             marginTop:10,
             paddingTop:10,
             paddingBottom:10,
             //marginLeft:30,
             //marginRight:30,
             backgroundColor:'rgba(204,0,0,0.8)',
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
                    backgroundColor:'rgba(0,204,0,0.9)',
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
                           backgroundColor:'rgba(153,51, 255,0.8)',
                           borderRadius:10,
                           borderWidth: 1,
                           borderColor: '#fff',
                           justifyContent:'center',
           },
           text1:{
           color:'#fff',
           textAlign:'center',
           fontSize:18,
           },
           text2:{
           color:'rgba(255,0,0,1)',
           //color:'#339966',
           textAlign:'center',
           fontSize:16,
           },
           text3:{
           //color:'rgba(255,0,0,1)',
           color:'#339966',
           textAlign:'center',
           fontSize:18,
           fontWeight:'bold',
           }
    }
  );
