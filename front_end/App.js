import React from 'react';
import {View,Linking} from 'react-native';
import AppNavigator from './AppNavigator';
import axios from 'axios';

const serverUrl='http://cheersanimesh2.pythonanywhere.com/';
const http = axios.create({
      baseURL:serverUrl,
});

  export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state= {
        //symptomsDict: ['itching','skin rash','nodal skin eruptions','continuous sneezing','shivering','chills','joint pain','stomach pain','acidity','ulcers on tongue','muscle wasting','vomiting','burning micturition','spotting  urination','fatigue','weight gain','anxiety','cold hands and feets','mood swings','weight loss','restlessness','lethargy','patches in throat','irregular sugar level','cough','high fever','sunken eyes','breathlessness','sweating','dehydration','indigestion','headache','yellowish skin','dark urine','nausea','loss of appetite','pain behind the eyes','back pain','constipation','abdominal pain','diarrhoea','mild fever','yellow urine','yellowing of eyes','acute liver failure','fluid overload','swelling of stomach','swelled lymph nodes','malaise','blurred and distorted vision','phlegm','throat irritation','redness of eyes','sinus pressure','runny nose','congestion','chest pain','weakness in limbs','fast heart rate','pain during bowel movements','pain in anal region','bloody stool','irritation in anus','neck pain','dizziness','cramps','bruising','obesity','swollen legs','swollen blood vessels','puffy face and eyes','enlarged thyroid','brittle nails','swollen extremeties','excessive hunger','extra marital contacts','drying and tingling lips','slurred speech','knee pain','hip joint pain','muscle weakness','stiff neck','swelling joints','movement stiffness','spinning movements','loss of balance','unsteadiness','weakness of one body side','loss of smell','bladder discomfort','foul smell of urine','continuous feel of urine','passage of gases','internal itching','toxic look (typhos)','depression','irritability','muscle pain','altered sensorium','red spots over body','belly pain','abnormal menstruation','dischromic  patches','watering from eyes','increased appetite','polyuria','family history','mucoid sputum','rusty sputum','lack of concentration','visual disturbances','receiving blood transfusion','receiving unsterile injections','coma','stomach bleeding','distention of abdomen','history of alcohol consumption','fluid overload.1','blood in sputum','prominent veins on calf','palpitations','painful walking','pus filled pimples','blackheads','scurring','skin peeling','silver like dusting','small dents in nails','inflammatory nails','blister','red sore around nose','yellow crust ooze',],
        symptomsDict:['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain','stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue','weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat','irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion','headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation','redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails','swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)','depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption','fluid_overload.1','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling','silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze','prognosis',],
        currentSymptom: [],
        diseaseVar : "",
        obj1:{},
        disease:"",
        link: "",
        specalist: "",
      }
    }

    addSymptom= (index) => {
      
      var{
        symptomsDict,
        currentSymptom,
        diseaseVar,
        obj1,
      }= this.state

      // Pull friend out of possibleFriends
      const addedSymptom = symptomsDict.splice(index, 1)
  
      // And put friend in currentFriends
      currentSymptom.push(addedSymptom)
      diseaseVar=diseaseVar+addedSymptom+";"
      obj1={'symp':diseaseVar}
      // Finally, update our app state
      this.setState({
        currentSymptom,
        symptomsDict,
        diseaseVar,
        obj1,
      })
    }
    remSymptom= (index) =>{
      var{ 
      currentSymptom,
      symptomsDict,
      diseaseVar,
      obj1,
      }= this.state
      const remSymptom = currentSymptom.splice(index,1)
      symptomsDict.push(remSymptom)
      //diseaseVar game to be  played here
      const remSymptom2=remSymptom+";"
      diseaseVar=diseaseVar.replace(remSymptom2,"")
      obj1={'symp':diseaseVar};
      this.setState({
        currentSymptom,
        symptomsDict,
        diseaseVar,
        obj1,
      })
    }
    predictModule1=()=>
    {
       var{
       diseaseVar,
       obj1,
       disease,
       link,
       specalist,
       }=this.state
       var obj2={}
       http.post('/',{
       'symp':diseaseVar,
        }).then((response)=> obj2=response.data);
         obj1=obj2
         disease= obj2.disease
         link= obj2.link
         specalist=obj2.specalist
          this.setState({
                 obj1,
                 disease,
                 link,
                 specalist,
                 })
     }
    predictModule2=()=>
    {
    var{
    diseaseVar,
    obj1,
    disease,
    link,
    specalist,
    }=this.state
    var obj2={}
    http.get('/get').then((response) =>{this.state.obj1=response.data}).catch((error)=>{console.log(error)})
             disease=obj1.disease
             link= obj1.link
             specalist= obj1.specalist
             this.setState({
             obj1,
             disease,
             link,
             specalist,
            })
    }
    getDirection=()=>{
              Linking.openURL('https://stripiestmexican.htmlpasta.com/')
            }


ListViewItemSeparatorLine = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

    render() {
      return (
        <AppNavigator
          screenProps={ {
            currentFriends: this.state.currentSymptom,
            possibleFriends: this.state.symptomsDict,
            diseaseVar: this.state.diseaseVar,
            disease: this.state.disease,
            link: this.state.link,
            specalist:this.state.specalist,
            obj1:this.state.obj1,
            addFriend: this.addSymptom,
            remSymptom: this.remSymptom,
            predictModule1: this.predictModule1,
            predictModule2: this.predictModule2,
            listViewItemSeparatorLine: this.ListViewItemSeparatorLine,
            getDirection: this.getDirection,
          } }
        />
      );
    }
  }