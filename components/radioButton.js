import React from "react";
import {View, Text, TouchableOpacity,  StyleSheet} from 'react-native';

const RadioButton =({
    options =[], 
    horizontal = false, 
    onChangeSelect,
    selected,
}) =>{return(
        <View style={horizontal? styles.horizontal : styles.vertical}>
            {options.map((opt,index) => (
                <TouchableOpacity onPress={() => onChangeSelect(opt, index)} style={styles.optionView}>
                    <View style={styles.circle}>{
                        selected == index && 
                    <View style={styles.innerCircle}/>}
                    </View>
                    <Text style={[styles.text, {color: selected == index ? '#444' : '#777'}]}>
                    {opt}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    optionView:{
        flexDirection: 'row',
        aligneItems: 'center',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle:{
        width: 10,
        height: 10,
        borderRadius: 10,
        borderColor: '#444',
        borderWidth: 2, 
    },
    text:{
        fontSize: 14,
        marginLeft:7,
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    vertical: {
        alignItems: 'center',
    }
})

export default RadioButton