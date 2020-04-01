import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen, // w tej postaci możemy też wskazać ekran, i dodatkowo go skonfigurować
    },
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);