import React, {useState} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import RequestedQuote from './RequestedQuote';
import DatePicker from 'react-native-date-picker';

const SubmitQuoteRequest = () => {
//   const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectedDate,SetSelectedDate] = useState('')
  const [open, setOpen] = useState(false);


  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const pickedDateToString = JSON.stringify(date)
    
    const trimmedString = pickedDateToString.slice(1,11)

    SetSelectedDate(trimmedString)

  };


    console.log(selectedDate)


  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              height: 20,
              width: '95%',
              marginTop: 30,
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
              }}>
              Specify Recipient
            </Text>
          </View>
          <View
            style={{
              height: 80,
              width: '95%',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text>
              If you would like to send this quote to a specific sales
              representative, enter their email below:
            </Text>
          </View>

          <View
            style={{
              height: 50,
              width: '95%',
              justifyContent: 'flex-start',
              paddingLeft: 10,
            }}>
            <Text style={styles.defaultColor}>EMAIL ADDRESS</Text>

            <View
              style={{
                width: '90%',
                height: 45,
                backgroundColor: 'white',
                flexDirection: 'row',
                borderColor:'lightgrey',
                borderWidth:1
              }}>
              <View
                style={{ width: '75%', height: '100%'}}>
                <TextInput
                  style={{
                    height: '100%',
                    padding: 5,
                    justifyContent: 'space-between',
                  }}
                  onChangeText={emails => setEmail(emails)}
                  defaultValue={email}
                />

              </View>

              <View
                style={{
                //   backgroundColor: 'yellow',
                  width: '25%',
                  height: '100%',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Text style={{color:'grey'}}>@mail.weir</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 80,
              width: '95%',
              justifyContent: 'center',
              paddingLeft: 10,
              paddingTop: 50,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
              }}>
              Requested Delivery Date
            </Text>
          </View>
          
{/* DatePiker */}

<DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          handleConfirm(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
         <Text style={[styles.defaultColor,{paddingLeft:5}]}>SELECT A DATE</Text>
          <TouchableOpacity
          onPress={()=>setOpen(true)}
          activeOpacity={0.9}
            style={{
              width: '90%',
              height: 45,
              backgroundColor: 'white',
              flexDirection: 'row',
              borderColor:'lightgrey',
              borderWidth:1,
              marginLeft:5
            }}>
            <View
              style={{ width: '85%', height: '100%'}}>
              <View 
              style={{width:'90%',height:'100%',justifyContent:'center'}}>
                <Text style={{color:'lightgrey',paddingLeft:10}}>{selectedDate ? selectedDate : 'Select'}</Text>
              </View> 
            </View>

            <View
              style={{width: '15%', height: '100%',borderLeftWidth:1,borderLeftColor:'lightgrey'}}>
                <Image source={require('../Assets/images/invitation.png')} style={{width:'100%',height:'100%'}} resizeMode={'center'} />
            </View>
          </TouchableOpacity>




          <View
            style={{
              height: 60,
              width: '95%',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
              }}>
              Additional Comments
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: '95%',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text style={styles.defaultColor}>
              ADDITIONAL COMMENTS FOR YOUR REQUEST
            </Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Enter your comment..."
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
              />
            </View>
          </View>
          <View
            style={{
              height: 100,
              width: '95%',
              justifyContent: 'flex-end',
              paddingLeft: 10,
            }}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                // navigation.navigate('RequestedQuote');
              }}
              underlayColor="#fff">
              <Text style={styles.submitBtnTxt}>Submit Quote Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default SubmitQuoteRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultColor: {
    color: '#72808a',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  textArea: {
    height: 50,
    justifyContent: 'flex-start',
  },
  submitButton: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#005eb8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
