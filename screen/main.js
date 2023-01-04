import {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
const Main = () => {
  const data = useSelector(state => state.list);
  console.log(data);

  const array = [
    {
      name: 'fresh Vegetables',
      sub: [
        {label: 'Tomato', value: 'Tomato'},
        {label: 'Spinach', value: 'Spinach'},
        {label: 'Onions', value: 'Onions'},
      ],
    },
    {
      name: 'Diet Food',
      sub: [
        {label: 'Quinoa', value: 'Quinoa'},
        {label: 'Oats', value: 'Oats'},
      ],
    },
    {
      name: 'Healthy Food',
      sub: [
        {label: 'Boiled Eggs', value: 'Boiled Eggs'},
        {label: ' Whole Wheat', value: ' Whole Wheat'},
      ],
    },
    {
      name: 'Fast Food Items ',
      sub: [
        {label: 'Sandwich', value: 'Sandwich'},
        {label: 'Burger', value: 'Burger'},
        {label: 'Tacos', value: 'Tacos'},
        {label: 'Pizza', value: 'Pizza'},
      ],
    },
    {
      name: 'Juicy Fruits ',
      sub: [
        {label: 'Watermelon', value: 'Watermelon'},
        {label: 'Grapes', value: 'Grapes'},
        {label: 'Berries', value: 'Berries'},
      ],
    },
  ];
  // const [value, setvalue] = useState(null);
  function ItemHandler(data) {
    return (
      <View
        style={{
          borderWidth: 1,
          marginTop: 5,
          marginBottom: 5,
          margin: 5,
          borderRadius: 5,
        }}>
        {/* <Icon name="add" /> */}
        <Dropdown
          style={{
            marginLeft: 10,
            marginRight: 5,
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            height: 60,
          }}
          placeholder={data.item.name}
          data={data.item.sub}
          labelField="label"
          valueField="value"
          onChange={i => {
            console.log(i);

            setvalue(i);
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        marginTop: 20,
        flex: 1,
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#e9e6e6',
        borderColor: '#e9e6e6',
        elevation: 5,
      }}>
      <Text style={{fontSize: 24, color: '#000000', fontWeight: 'bold'}}>
        Categories & SubCategories
      </Text>
      <View>
        <FlatList data={data} renderItem={ItemHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Main;
