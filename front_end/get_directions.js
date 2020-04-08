import React from 'react';
import{View} from 'react-native';
import{WebView} from 'react-native-webview';
export default class details_link_view extends React.Component{
      render()
        {
        return(
        <View style={{flex:1}}>
        <WebView
        source= {{uri:this.props.screenProps.link}}
        style={{flex:1}}
        />
        </View>
        )
     }
}