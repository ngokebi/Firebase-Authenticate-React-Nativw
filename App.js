import React, { useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Header, Icon} from '@rneui/base';
import {useDispatch, useSelector} from 'react-redux';
import {getArticles} from './src/store/actions';
import Authenticate from './src/authenticate';

const App = () => {
  // const articles = useSelector(state => state.articles);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getArticles());
  // }, [dispatch]);

  return (
    <ScrollView>
      <View>
        <Header
          leftComponent={
            <Icon
              name="menu"
              color="#ffffff"
              type="entypo"
              onPress={() => alert('open sidedrawer')}
            />
          }
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Authenticate/>
      </View>
    </ScrollView>
  );
};

export default App;
