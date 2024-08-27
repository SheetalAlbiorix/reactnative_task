import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Style/OnBording';
// import { loginModel } from '../ViewModel/OnBording';
import { Images } from '../../Utils/Images';
import Swiper from 'react-native-swiper';


export default function OnBording() {
  const [onIndexChange, setOnIndexChange] = useState();

  const onSwipeChange = (index: any) => {
    setOnIndexChange(index);
  }

  // const model = loginModel()

  // useEffect(() => {
  //   model.abc()
  //   model.abdbsbs("sjdvasjv")
  // }, [model.first])

  return (
    <View style={{flex: 1}}>
    <Swiper
      loop={false}
      showsPagination={true}
      paginationStyle={styles.pagination}
      activeDotStyle={styles.activeDot}
      autoplay
      onIndexChanged={(index) => { onSwipeChange(index) }}
    >
      <View style={styles.slide}>
        <Image source={Images.onBoarding1} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={Images.onBoarding2} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={Images.onBoarding3} style={styles.image} />
      </View>
    </Swiper>
    {onIndexChange === 2 ? <TouchableOpacity onPress={() => { }} style={styles.nextBtnCon}>
        <Text style={styles.netxtButton}>Next</Text>
      </TouchableOpacity> : <></>}
    </View>
  )
}

