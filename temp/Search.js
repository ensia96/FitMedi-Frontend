import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

import Active from './Active';

export default class Main extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.titlewrapper}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('뒤로 돌아가기!');
                }}>
                <Text style={styles.sample}>←</Text>
              </TouchableOpacity>
              <Text style={styles.title}>검색</Text>
            </View>
          </View>
          <View style={styles.center}>
            <ScrollView>
              <View style={styles.content}>
                <Text style={styles.ctip}>Tips</Text>
                <Text style={styles.citems}>임시용용</Text>
              </View>
              {['냠냠', '쩝쩝'].map((items, id) => {
                return (
                  <>
                    <View style={styles.content}>
                      <Text style={styles.ctitle}>Step {id + 1}</Text>
                      <Text style={styles.citems}>{items}</Text>
                    </View>
                  </>
                );
              })}
            </ScrollView>
          </View>
          <Active />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },
  titlewrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sample: {
    fontSize: 32,
    margin: 8,
    color: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  center: {
    width: Dimensions.get('window').width,
    flex: 6,
  },
  content: {
    width: '92%',
    height: 140,
    alignSelf: 'center',
    marginTop: 15,
  },
  ctip: {
    color: '#f90c69',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ctitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  citems: {
    color: 'black',
    fontSize: 15,
  },
});
