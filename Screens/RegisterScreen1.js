import React, {useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IndicatorBar from '../Components/IndicatorBar';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';

function RegisterScreen1() {
  const {account, setAccount} = useContext(DataContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={19} />
      <IndicatorBar value={1} />
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'사용하실\n닉네임을 입력해주세요'}</Text>
      </View>
      <Margin value={120} />
      <TextInput
        style={styles.body}
        placeholder={null}
        value={account.name}
        onChangeText={text => {
          setAccount({...account, name: text});
        }}
        autoComplete={'off'}
        keyboardType={'default'}
        secureTextEntry={false}
        autoCapitalize={'none'}
        autoCorrect={false}
        passwordRules={null}
        autoFocus={true}
      />
      <View style={styles.button}>
        <NextIcon
          onPress={() => {
            if (account.name !== '') {
              navigation.navigate('Register2');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  body: {
    fontSize: 32,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 490,
  },
});

export default RegisterScreen1;
