import {View, Image, Text, TextInput, Button} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
function Viewr() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        borderWidth: 0,
        margin: 5,
      }}>
      <Text style={{fontSize: 22, textAlign: 'center', color: 'black'}}>
        AddCategories & SubCategories
      </Text>
      <View style={{flex: 1, borderWidth: 0, margin: 10}}>
        <Text style={{fontSize: 18, color: 'black'}}>CategoryName</Text>
        <TextInput
          style={{width: 320, marginTop: 5, borderWidth: 1, borderRadius: 10}}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 18, marginBottom: 5, color: 'black'}}>
              Category Image
            </Text>
            <View style={{borderWidth: 1, width: 170, height: 170}}>
              <Image />
            </View>
          </View>
          <Pressable>
            <Text
              style={{
                color: 'black',
                marginTop: 100,
                fontSize: 20,
                padding: 7,
                borderRadius: 5,
                backgroundColor: 'skyblue',
                borderWidth: 0.5,
              }}>
              Choose File
            </Text>
          </Pressable>
        </View>
        <Text style={{fontSize: 18, marginTop: 20, color: 'black'}}>
          Create SubCategories
        </Text>
        <View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                height: 45,
                width: 280,
                marginTop: 5,
                borderWidth: 1,
                borderRadius: 10,
              }}
            />
            <Pressable
              style={{
                alignItems: 'center',
                margin: 4,
                alignSelf: 'center',
                width: 50,
                height: 40,
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Text>+</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                height: 45,
                width: 280,
                marginTop: 5,
                borderWidth: 1,
                borderRadius: 10,
              }}
            />
            <Pressable
              style={{
                alignItems: 'center',
                margin: 4,
                alignSelf: 'center',
                width: 50,
                height: 40,
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                -
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <Button title="Add" sss />
        </View>
      </View>
    </View>
  );
}
export default Viewr;
