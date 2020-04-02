import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MealDetailScreen = props => {

    return(
        <View style = {styles.screen}>
            <Text>The Meal Details Screen</Text>
            <Button title='Go Back to previous Screen' onPress={()=>{
                props.navigation.goBack();
            }}/>
            <Button title='Go Back to first Screen' onPress={()=>{
                props.navigation.popToTop();
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

export default MealDetailScreen;