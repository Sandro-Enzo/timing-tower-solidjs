import { Component, createEffect, createSignal, For } from 'solid-js';
import drivers from './assets/drivers.json';
import Driver from './Components/Driver/Driver';
import './App.css';
import Flag from './Components/Flag/Flag';
import Tower from './Components/Tower/Tower';

const App: Component = () => {
    const [flagVisible, setFlagVisible] = createSignal(false);

    document.onkeydown = (ev) => {
        if (ev.key === 'b') {
            setFlagVisible((prev) => {
                return !prev;
            });
        }
    };

    return (
        <>
            <Tower />
            <Flag visible={flagVisible()} />
        </>
    );
};

export default App;
