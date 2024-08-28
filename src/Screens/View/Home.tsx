import { View, Text, Switch, FlatList, Image, TouchableOpacity, Modal, TextInput, Button, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Style/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { Images } from '../../Utils/Images';
import InputPopup from '../../Components/InputPopup';



const Home = () => {

  const [data, setData]: any = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [submittedValue, setSubmittedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

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

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSubmit = async () => {
    if (inputValue != '') {
      let newItem = {
        id: data.lenght + 1,
        image:
          'https://imgs.search.brave.com/BrsUyDM5KPm6UGsBgtQklucDSYZw61rY3ju3X6CjA20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MjI4MzU1Ny9waG90/by9jbGFzc2ljLXRo/YWktZm9vZC1kaXNo/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTlZME5CeWxu/ak5pTmw2RWtLNlhh/YkVUemozdEhuSE9R/V3dWay02aVVFX0k9',
        name: inputValue,
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
else{
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

  const onPlusIcon = () => {

  }


  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Image style={styles.imageCont} source={{ uri: item.item.image }}></Image>
        <Text style={styles.title}>{item.item.name}</Text>
        <Switch
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
      <TouchableOpacity onPress={() => handleOpenPopup()}>
        <Image style={styles.plusIcon} source={Images.plusIcon}></Image>
      </TouchableOpacity>
      <FlatList
        scrollEnabled
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Modal
        transparent={true}
        visible={isPopupVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.titleCont}>Enter Value</Text>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Type here..."
            />
            <TouchableOpacity activeOpacity={0} style={styles.buttonContainer}>
              <Text style={styles.buttonTitle} onPress={handleSubmit} >Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Home;