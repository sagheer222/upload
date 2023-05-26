import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Api} from './instance';
import axios from 'axios';
const ApiCall = (url, body) => {
  Api.put(url,{ body}, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => {
      console.log('res >>>>', res.data);
    })
    .catch(err => {
      console.log('erorr >>>>', err);
    });
};

export default ApiCall;

const styles = StyleSheet.create({});
