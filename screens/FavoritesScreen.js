import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import MealList from '../components/MealList';

const FavoritesScreen = props => {

    const avaliableMeals = useSelector(state => state.meals.favoriteMeals);

    if (avaliableMeals.length === 0) {
        return (
            <View style={styles.alterContent}>
                <Text>No Favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    return (
        <MealList listData={avaliableMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
        }
    }

}

const styles = StyleSheet.create({
    alterContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;