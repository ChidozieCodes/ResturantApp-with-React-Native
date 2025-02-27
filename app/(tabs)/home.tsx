import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import Search from '@/components/Search';

const home = () => {
  return (
    <ScrollView>
      <Header />
      <Search />
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})