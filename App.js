import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList  } from 'react-native';
import {app} from './firebaseConfig';
import { getDatabase, ref, push, onValue } from "firebase/database";
import React, { useState, useEffect} from 'react';
import { Alert } from 'react-native';


export default function App() {
  const [product, setProduct] = useState({
    title: '',
    amount: ''
  });
  const [items, setItems] = useState([]);

    const database = getDatabase(app); //tietokanta "kahva" jolla pääsee käsiksi tietokantaan

    const handleSave = () => {
      if (product.amount && product.title){ //jos molemmat ovat tosi eli ei ole tyhjä merkkijono
      push(ref(database, 'items/'), product)//viitataan tietokannassa olevaan 'items/', jonne viedään uusi tietue 
      }else{
        Alert.alert('Error', 'Type product and amount first');
      }
    }
    useEffect(() => { //onValue on kuuntelija
      const itemsRef = ref(database, 'items/');
      onValue(itemsRef, (snapshot) => { //snapshot on olio, jonka avulla päästään käsiksi kokoelman items sisältöön
        const data = snapshot.val(); //palauttaa pyydetyn sisällön javascript oliona
        if (data) {
          setItems(Object.values(data));//object.values antaa arvot taulukkona
        } else {
          setItems([]); // Handle the case when there are no items
        }
      })
    }, []);


  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Product title' 
      onChangeText={text => setProduct({...product, title: text})}
      value={product.title}/>  
    <TextInput 
      placeholder='Amount' 
      onChangeText={text => setProduct({...product, amount: text})}
      value={product.amount}/>   
    <Button onPress={handleSave} title="Save" /> 
    <FlatList 
  renderItem={({item}) => 
    <View style={styles.listcontainer}>
      <Text style={{fontSize: 18}}>{item.title}, {item.amount}</Text>
    </View>} 
  data={items} />      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margintop: 50
  },
});
