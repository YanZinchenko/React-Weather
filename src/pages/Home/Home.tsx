import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/types/selectors';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

interface Props {
    
}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(selectCurrentWeatherData);

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'));
    }, []);
    return (
        <div className={s.Home}>
         <div className={s.wrapper}> 
            <ThisDay weather={weather}/>
            <ThisDayInfo />
        </div>
        <Days />
        </div>
    );
};
