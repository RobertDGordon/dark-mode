import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage ('key', intialValue)

    return [someValue];
};