import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, {useState} from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import { SafeAreaView } from 'react-native-safe-area-context'

type ItemProps = NativeStackScreenProps<RootStackParamList, 'ViewIndividualData'>

const ViewIndividualData = ({navigation, route}:ItemProps) => {
 const {Title, Notes} = route.params
 const [title_string, set_title_string] = useState(Title);
 const [notes_string, set_notes_string] = useState(Notes);
  return (
    <SafeAreaView style={styles.Container}>
    <ScrollView style={styles.ScrollView}>
      <View style={styles.ItemPair}>
            <Text style={styles.Heading}>Title</Text>
            <Text style={styles.InputField}>{title_string}</Text>
      </View>
      <View style={styles.ItemPair}>
            <Text style={styles.Heading}>Notes</Text>
            <Text style={styles.InputField}>{notes_string}</Text>
      </View>   

    </ScrollView>
    </SafeAreaView>
  )
}

export default ViewIndividualData

const styles = StyleSheet.create({
    Container:{
        flexGrow: 1,
        backgroundColor: "lightcyan",
    },
    ScrollView:{
        marginBottom: 40,
    },
    ItemPair:{
        margin: 5,
    },
    InputField:{
        backgroundColor: "white",
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        color: "black"
    },
    Heading:{
        margin: 2,
        fontSize: 21,
        color: "#000000",
    }
})