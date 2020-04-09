import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import COLORS from '../constants/Colors';
import Colors from '../constants/Colors';

const FIlterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.secondaryColor}
                value={props.myState}
                onValueChange={props.onChange} />
        </View>
    )
}

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan])

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Avaliable Filters</Text>
            <FIlterSwitch label='Gluten-free' myState={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FIlterSwitch label='Lactose-free' myState={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FIlterSwitch label='Vegan' myState={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FIlterSwitch label='Vegetarian' myState={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Save"
                        iconName="ios-save"
                        onPress={() => {
                            navData.navigation.getParam('save')(); 
                        }}
                    />
                </HeaderButtons>
            )
        }
    }

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});

export default FiltersScreen;