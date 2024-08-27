import AsyncStorage from '@react-native-async-storage/async-storage';
import { PrintLogs } from './Common';

class localStorageProvider {
    async setItemString(key: any, value: any) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            PrintLogs('Error', '');
        }
    }

    async getItemString(key: any) {
        var item = await AsyncStorage.getItem(key);
        return item;
    }

    async setItemObject(key: any, item: any) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(item));
        } catch (error) {
            PrintLogs('Error', error);
        }
    }

    async getItemObject(key: any) {
        var item: any = await AsyncStorage.getItem(key);
        return JSON.parse(item);
    }

    async removeItem(key: any) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error: any) {
            PrintLogs('Error ', error.value);
        }
    }

    async clear() {
        try {
            await AsyncStorage.clear();
        } catch (error: any) {
            PrintLogs('Error ', error.value);
        }
    }
}

export const localStorage = new localStorageProvider();
