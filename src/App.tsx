import { Component, createSignal } from 'solid-js';
import './App.css';
import Flag from './Components/Flag/Flag';
import Tower from './Components/Tower/Tower';
import Expanded from './Components/Expanded/Expanded';

const App: Component = () => {
    const [flagVisible, setFlagVisible] = createSignal(false);
    const [towerVisible, setTowerVisible] = createSignal(true);
    const [expandedVisible, setExpandedVisible] = createSignal(false);

    document.onkeydown = (ev) => {
        if (!ev.ctrlKey) {
            switch (ev.key) {
                case 'b':
                    setFlagVisible((prev) => !prev);
                    break;
                case 't':
                    setTowerVisible((prev) => !prev);
                    break;
                case 'r':
                    setExpandedVisible((prev) => !prev);
                    break;
            }
        }
    };

    return (
        <>
            <Expanded visible={expandedVisible()} />
            <Tower visible={towerVisible()} />
            <Flag visible={flagVisible()} />
        </>
    );
};

export default App;
