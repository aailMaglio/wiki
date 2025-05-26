import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/GlobalSlice';

const ThemeToggle = () => {
    const theme = useSelector((state) => state.global.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white shadow dark:from-purple-700 dark:via-indigo-800 dark:to-blue-900 dark:text-white dark:shadow-lg">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;
