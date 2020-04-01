import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesMeals = props => {

    return(
        <View style = {styles.screen}>
            <Text>The Categories Meals Screen</Text>
            <Button title="Go to Meal Details" onPress={()=>{
                props.navigation.navigate('MealDetail');
            }}/>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMeals;