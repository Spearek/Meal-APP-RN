import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

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

export default createAppContainer(MealsNavigator);