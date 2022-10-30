import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStorage = async (key:string,value:unknown) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key,jsonValue);
    } catch (error) {
        console.log(error)
    }
};

export const loadStorage = async (key:string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log(error)
    }
};