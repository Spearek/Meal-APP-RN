import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoriesMeals = props => {

    const catId = props.navigation.getParam('categoryId');

    const avaliableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = avaliableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.alterContent}>
                <Text>No meals found, maybe check your filters</Text>
            </View>
        )
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
};

CategoriesMeals.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({

    alterContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesMeals;