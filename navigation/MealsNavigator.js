import React from 'react';
import { Platform, Text } from 'react-native'
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
        headerTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
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
            tabBarColor: Colors.primaryColor,
            tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>

        }
    }

}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
})
    : createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                activeTintColor: 'Colors.secondaryColor'
            }

        });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'My Filters'
    },
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

const MainNavigation = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator,
}, {
   contentOptions: {
       activeTintColor: Colors.secondaryColor,
       labelStyle: {
           fontFamily: 'open-sans-bold'
       }
   } 
})


export default createAppContainer(MainNavigation);