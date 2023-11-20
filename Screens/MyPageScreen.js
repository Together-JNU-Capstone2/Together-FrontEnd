import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Margin from '../Components/Margin';
import {useFocusEffect} from '@react-navigation/native';

function MyPageScreen() {
  const insets = useSafeAreaInsets();
  useFocusEffect(() => {
    console.log('4번 스크린');
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'white'} />
      <View style={{height: insets.top, backgroundColor: '#2F2E2C'}} />
      <View style={styles.container1}>
        <View style={styles.pointContainer}>
          <Text style={styles.pointText}>15.3</Text>
          <Image
            source={require('../Images/point.png')}
            style={styles.pointImage}
          />
        </View>
        <Margin value={18} />
        <View style={styles.imageContainer}>
          <Icon1 name={'person'} size={56} color={'black'} />
        </View>
        <Margin value={30} />
        <View style={styles.nameContainer}>
          <View style={styles.subNameContainer1}>
            <Text style={styles.nameText}>감귤탕후루</Text>
          </View>
          <View style={styles.subNameContainer2}>
            <Text style={styles.nameText}>khw5390</Text>
          </View>
        </View>
        <Margin value={50} />
        <View style={styles.roomContainer}>
          <View style={styles.subRoomContainer1}>
            <Text style={styles.roomText1}>개설한 방</Text>
          </View>
          <View style={styles.subRoomContainer2}>
            <Text style={styles.roomText1}>지원한 방</Text>
          </View>
        </View>
        <Margin value={12} />
        <View style={styles.roomContainer}>
          <View style={styles.subRoomContainer1}>
            <Text style={styles.roomText2}>20</Text>
          </View>
          <View style={styles.subRoomContainer2}>
            <Text style={styles.roomText2}>6</Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.3}
            onPress={null}>
            <Icon2 name={'heart-outline'} size={30} color={'black'} />
            <Margin value={12} />
            <Text style={styles.iconText}>{'관심있는\n활동'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.3}
            onPress={null}>
            <Icon1 name={'tag'} size={30} color={'black'} />
            <Margin value={12} />
            <Text style={styles.iconText}>{'관심태그\n설정'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.3}
            onPress={null}>
            <Icon1 name={'phone-iphone'} size={30} color={'black'} />
            <Margin value={12} />
            <Text style={styles.iconText}>{'연락처\n변경'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.3}
            onPress={null}>
            <Icon1 name={'password'} size={30} color={'black'} />
            <Margin value={12} />
            <Text style={styles.iconText}>{'비밀번호\n재설정'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.3}
            onPress={null}>
            <Icon1 name={'folder-open'} size={30} color={'black'} />
            <Margin value={12} />
            <Text style={styles.iconText}>{'오픈소스\n라이선스'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.3}
            onPress={() => {
              Alert.alert(
                '알림',
                '로그아웃 하시겠습니까?',
                [
                  {
                    text: '취소',
                    style: 'cancel',
                  },
                  {
                    text: '로그아웃',
                    onPress: () => {
                      null; //TODO:여기에 화면 login으로 가도록 설정(reset으로)
                    },
                    style: 'destructive',
                  },
                ],
                {cancelable: false},
              );
            }}>
            <Icon1 name={'logout'} size={30} color={'black'} />
            <Margin value={12} />
            <Text style={styles.iconText}>{'계정\n로그아웃'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: insets.bottom}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {flex: 0.5, backgroundColor: '#2F2E2C', alignItems: 'center'},
  container2: {flex: 0.6},
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'flex-end',
  },
  pointImage: {width: 20, height: 20, marginLeft: 2},
  pointText: {fontSize: 16, fontWeight: '700', color: 'white'},
  imageContainer: {
    width: 74,
    height: 74,
    backgroundColor: 'white',
    borderRadius: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  nameContainer: {flexDirection: 'row'},
  subNameContainer1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderColor: 'rgba(182, 182, 182, 0.21)',
  },
  subNameContainer2: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {fontSize: 16, fontWeight: '700', color: 'rgba(182, 182, 182, 1)'},
  roomContainer: {flexDirection: 'row'},
  subRoomContainer1: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subRoomContainer2: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roomText1: {fontSize: 13, fontWeight: '700', color: 'rgba(182, 182, 182, 1)'},
  roomText2: {fontSize: 30, fontWeight: '700', color: 'white'},
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 42,
  },
  iconText: {textAlign: 'center', fontSize: 12, fontWeight: '700'},
});

export default MyPageScreen;
