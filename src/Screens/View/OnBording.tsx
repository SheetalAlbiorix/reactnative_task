import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../Style/OnBording';
import { loginModel } from '../ViewModel/OnBording';
import { Images } from '../../Utils/Images';
import Onboarding from 'react-native-onboarding-swiper';
import Swiper from 'react-native-swiper';


export default function OnBording() {

  const model = loginModel()

  useEffect(() => {
    model.abc()
    model.abdbsbs("sjdvasjv")
  }, [model.first])

  return (
    <View>
    <Swiper
      loop={false}
      showsPagination={true}
      paginationStyle={styles.pagination}
      activeDotStyle={styles.activeDot}
      autoplay
    >
      <View style={styles.slide}>
        <Image source={Images.onBoarding1} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={Images.onBoarding2} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={Images.onBoarding3} style={styles.image} />
        <View>
          <Text>Next</Text>
        </View>
      </View>
    </Swiper>
    </View>
  )
}

