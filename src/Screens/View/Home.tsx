import { View, Text, Switch, FlatList, Image, TouchableOpacity, Modal, TextInput, Button, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Style/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { Images } from '../../Utils/Images';
import InputPopup from '../../Components/InputPopup';
import Responsive from '../../Utils/Responsive';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../Navigation/Routes';
import { AddNewItem } from '../../Components/AddNewItem';



const Home = () => {

  const [data, setData]: any = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [submittedValue, setSubmittedValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value: any = await AsyncStorage.getItem('ListView');
        if (value !== null) {
          setData(JSON.parse(value))
        }
      } catch (error) {
        console.log('error2', error)
      }
    }
    _retrieveData();
  }, [])

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleLogout = () => {
    Alert.alert(
      `Logout`, `Are you sure you wants to logout?`,
      [
        {
          text: `Cancel`,
        },
        {
          text: `Logout`,
          onPress: async () => {
            await AsyncStorage.setItem('isLoggeIn', "false");
            navigation.navigate(Routes.Login);
          },
        }
      ],)
  };

  const handleSubmit = async (inputStr: any) => {
    if (inputStr != '') {
      let newItem = {
        id: data.lenght + 1,
        image:
          'https://imgs.search.brave.com/BrsUyDM5KPm6UGsBgtQklucDSYZw61rY3ju3X6CjA20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MjI4MzU1Ny9waG90/by9jbGFzc2ljLXRo/YWktZm9vZC1kaXNo/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTlZME5CeWxu/ak5pTmw2RWtLNlhh/YkVUemozdEhuSE9R/V3dWay02aVVFX0k9',
        name: inputStr,
        isEnabled: false
      }
      let tempData = [
        ...data
      ]
      setData([...tempData, newItem]);
      await AsyncStorage.setItem('ListView', JSON.stringify(tempData));
      console.log('data item', data.length)
      setIsPopupVisible(false)
    }
    else {
      ToastAndroid.show('Enter Value', ToastAndroid.LONG)
    }
  };


  const toggleSwitch = async (index: any) => {
    let tempData = [
      ...data
    ]

    tempData[index].isEnabled = !tempData[index].isEnabled

    setData(tempData);
    await AsyncStorage.setItem('ListView', JSON.stringify(tempData));
  };

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Image style={styles.imageCont} source={{ uri: item.item.image }}></Image>
        <Text style={styles.title}>{item.item.name}</Text>
        <Switch
          style={{ marginRight: Responsive.wp(3) }}
          onValueChange={() => toggleSwitch(item.index)}
          value={item.item.isEnabled}
          thumbColor={item.item.isEnabled ? '#f2f1e6' : '#808080'}
          trackColor={{ false: "#D3D3D3", true: "#81b0ff" }}
        />
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => handleOpenPopup()} style={{ marginRight: Responsive.hp(1) }}>
          <Image style={styles.plusIcon} source={Images.plusIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogout()} style={{ marginRight: Responsive.hp(1) }}>
          <Text style={{ fontWeight: "500", fontSize: 17 }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        scrollEnabled
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <AddNewItem isPopupVisible={isPopupVisible} handleSubmit={(value: any) => {
        handleSubmit(value)
      }}
        handleHide={() => {
          setIsPopupVisible(!isPopupVisible)
        }} />
    </View>
  )
}

export default Home;