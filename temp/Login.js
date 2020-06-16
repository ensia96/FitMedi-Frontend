import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.sample}>FM</Text>
          <Text style={styles.topt}>지금 회원가입하고</Text>
          <Text style={styles.topct}>
            맞춤형 운동관리
            <Text style={styles.topt}>를 받아보세요!</Text>
          </Text>
        </View>
        <View style={styles.cnt}>
          <TextInput style={styles.input} placeholder={'휴대폰 번호'} />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder={'비밀번호'}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonfont}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btm}>
          <Text style={styles.btmt}>
            로그인하시면
            <Text> </Text>
            <Text
              style={styles.under}
              onPress={() => {
                Alert.alert('작업 중입니다.');
              }}>
              개인정보처리방침
            </Text>
            <Text> 및 </Text>
            <Text
              style={styles.under}
              onPress={() => {
                Alert.alert('작업 중입니다.');
              }}>
              이용약관
            </Text>
          </Text>
          <Text style={styles.btmt}>
            그리고 저희의 더 나은 서비스 제공을 위한
            <Text> </Text>
            <Text
              style={styles.under}
              onPress={() => {
                Alert.alert('작업 중입니다.');
              }}>
              연구정책
            </Text>
            에
          </Text>
          <Text style={styles.btmt}>동의하는 것으로 간주합니다.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e5355',
  },
  top: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  topct: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#35b3bc',
  },
  cnt: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 5,
    paddingHorizontal: 15,
    fontSize: 15,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#35b3bc',
    margin: 10,
  },
  buttonfont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  btm: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btmt: {
    justifyContent: 'center',
    color: 'white',
  },
  under: {
    textDecorationLine: 'underline',
  },
  sample: {
    fontSize: 160,
    fontWeight: '900',
  },
});

/* {[
    {name: '카카오톡 로그인'},
    {name: '구글 로그인'},
    {name: '페이스북 로그인'},
    {name: '애플 로그인'},
  ].map((thing, id) => {
    return (
      <TouchableOpacity
        style={styles.cont}
        onPress={() => {
          Alert.alert(thing.name, '작업 중입니다.');
        }}>
        <Text key={id} style={styles.contt}>
          {thing.name}
        </Text>
      </TouchableOpacity>
    );
  })} */

/*
cont: {
  width: '83%',
  height: '18%',
  borderRadius: 30,
  borderColor: 'white',
  borderWidth: 1,
  margin: 6,
  justifyContent: 'center',
  alignItems: 'center',
},
contt: {
  color: 'white',
  fontSize: 23,
  fontWeight: 'bold',
},
*/
