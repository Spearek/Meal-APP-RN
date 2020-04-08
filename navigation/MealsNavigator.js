import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, // tu tylko wskazujemy ekran
    CategoryMeals: {
        screen: CategoryMealsScreen, // w tej postaci możemy też wskazać ekran, i dodatkowo go skonfigurować
        navigationOptions: {        // opcje navigowania możemu tu ustawić zamiast robić to w samym ekranie
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor
        }
    }

}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true
})
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: 'Colors.secondaryColor'
            }

        });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
});

const MainNavigation = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator,
})


export default createAppContainer(MainNavigation);