import React from 'react';
import { StyleSheet, Text, ScrollView,Button,FlatList,AgoraRtcEngine} from 'react-native';

_joinChannel= () => {
        AgoraRtcEngine.setLocalVideoView(this._localView, AgoraRtcEngine.AgoraVideoRenderModeFit);
        AgoraRtcEngine.setVideoProfile(AgoraRtcEngine.AgoraVideoProfileDEFAULT, false);
        AgoraRtcEngine.startPreview();
        AgoraRtcEngine.joinChannel(null, "rnchannel01", "React Native for Agora RTC SDK", 0);

}
_leaveChannel= () =>{
        AgoraRtcEngine.stopPreview();
        AgoraRtcEngine.leaveChannel();
}
switchCamera=() => {
    AgoraRtcEngine.switchCamera();
}
_switchAudio=() => {
    AgoraRtcEngine.setEnableSpeakerphone(isSpeakerPhone);
    isSpeakerPhone = !isSpeakerPhone;
}

export default class VideoCall extends React.Component {
  render() {
    AgoraRtcEngine.createEngine('8d1b1fd6e17c40e888d38fd7a754cc4a');
    AgoraRtcEngine.enableVideo();
    AgoraRtcEngine.enableAudio();
    AgoraRtcEngine.setVideoProfileDetail(360, 640, 15, 300);
    AgoraRtcEngine.setChannelProfile(AgoraRtcEngine.AgoraChannelProfileCommunication);
    return (
        <View style = {styles.container} >
        <AgoraRendererView
            ref={component => this._localView = component}
            style = {{width: 360, height: 240}}
        />

        <AgoraRendererView
            ref={component => this._remoteView = component}
            style = {{width: 360, height: 240}}
        />
        <View style={{flexDirection: 'row'}}>
             <Button style = {{flex: 1}}
                onPress={this._joinChannel.bind(this)}
                title="Join Channel"
                style={{width:180, float:"left", backgroundColor:"rgb(0,0,0)"}}
                color="#841584"
             />
             <Button style = {{flex: 1}}
                 onPress={this._leaveChannel.bind(this)}
                 title="Leave Channel"
                 color="#841584"
                 style={{width:180, float:"left"}}
             />
             </View>

             <View style={{flexDirection: 'row'}}>
             <Button
                 onPress={this._switchCamera.bind(this)}
                 title="Switch Camera"
                 color="#841584"
             />
             <Button
                 onPress={this._switchAudio.bind(this)}
                 title="Switch Audio Route"
                 color="#841584"
             />
             </View>
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