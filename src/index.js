import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectAllTodo, selectLoading} from './reducer';
import {todoActions} from './reducer';
import Icon from 'react-native-vector-icons/Ionicons';

const Todo = () => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const todos = useSelector(selectAllTodo);

  useEffect(() => {
    dispatch(todoActions.getTodo());
    console.log('useEffect is Call');
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator />;
  }

  const onAddButton = () => {
    dispatch(todoActions.addTodo(data));
    setData('');
  };

  const onCheck = (item) => {
    console.log({item});
    const content = {id: item.id, text: item.text, isDone: !item.isDone};
    dispatch(todoActions.toogleTodo(content));
  };

  const onDelete = (id) => {
    dispatch(todoActions.deleteTodo(id));
  }
  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter task"
          value={data}
          onChangeText={text => setData(text)}
        />
        <Button
          title="Add"
          onPress={() => {
            onAddButton();
          }}
        />
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={()=> {
                console.log(item);
                onCheck(item);
              }}>
                <Icon
                  name={item.isDone ? 'ios-checkmark' : 'square-outline'}
                  size={30}
                />
              </TouchableOpacity>
              <Text>{item.text}</Text>
              <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <Icon name="ios-close-outline" size={30} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Todo;
