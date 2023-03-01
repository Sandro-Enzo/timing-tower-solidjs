import { Component, createEffect, createSignal, For } from 'solid-js';
import drivers from './assets/drivers.json';
import Driver from './Components/Driver/Driver';
import './App.css';
import Flag from './Components/Flag/Flag';
import Tower from './Components/Tower/Tower';
import Results from './Components/Results/Results';

const App: Component = () => {
    const [flagVisible, setFlagVisible] = createSignal(false);
    const [towerVisible, setTowerVisible] = createSignal(false);
    const [resultsVisible, setResultsVisible] = createSignal(true);

    document.onkeydown = (ev) => {
        switch (ev.key) {
            case 'b':
                setFlagVisible((prev) => !prev);
                break;
            case 't':
                setTowerVisible((prev) => !prev);
                break;
            case 'r':
                setResultsVisible((prev) => !prev);
                break;
        }
    };

    return (
        <>
            <Results visible={resultsVisible()} />
            <Tower visible={towerVisible()} />
            <Flag visible={flagVisible()} />
        </>
    );
};

export default App;
