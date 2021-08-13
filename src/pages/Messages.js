import {ListDoctor} from 'components';
import {JSONDummyData} from 'mocks';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from 'utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {JSONDummyData.messages.map(item => {
            return (
              <ListDoctor
                key={item.id}
                name={item.name}
                pic={item.pic}
                desc={item.message}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    fontSize: 20,
    marginTop: 30,
    marginLeft: 16,
  },
});
