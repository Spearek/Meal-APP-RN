import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {

    return (
        <View style={styles.MealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.MealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        </ImageBackground>

                    </View>
                    <View style={{ ...styles.MealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        </View >

    )
}

const styles = StyleSheet.create({
    MealRow: {
        flexDirection: 'row'
    },
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealHeader: {
        height: '90%',

    },
    mealDetail: {
        height: '10%',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6 )',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }

})

export default MealItem;