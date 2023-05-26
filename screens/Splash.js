import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect,} from 'react';
import axios from 'axios';
import { apiClient } from './instance';
import { useContext } from 'react';
import { Pasha } from '../App';
const splash = () => {
  let Sidran=useContext(Pasha)
  console.log("result is>>>>",Sidran)
  // useEffect(() => {
  //   const config = {
  //     method: 'post',
  //     url: '/posts',
  //     data: {
  //       title: 'foo',
  //       body: 'bar',
  //       userId: 1,
  //     },
  //   };
  //   apiClient(config)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <View>
      <Text>ScreenTwo</Text>
    </View>
  );
};

export default splash;

const styles = StyleSheet.create({});
