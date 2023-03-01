import { Component, createEffect, createSignal, For } from 'solid-js';
import drivers from './assets/drivers.json';
import Driver from './Components/Driver/Driver';
import './App.css';
import Flag from './Components/Flag/Flag';

const App: Component = () => {
    let gap = 0;

    createEffect(() => {
        document.documentElement.style.setProperty(
            '--drivers',
            `${drivers.drivers.length}`
        );
    });

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
            <div class='tower-container'>
                <div class='blurry-background'>
                    <div class='main-background'>
                        <div class='header'>
                            <div class='title'></div>
                            <div class='race-info'>
                                <div class='laps'>
                                    <span>
                                        LAP{' '}
                                        <span
                                            style={{
                                                color: 'white',
                                                'font-size': '1.5em',
                                            }}
                                        >
                                            3
                                        </span>
                                        /57
                                    </span>
                                </div>
                                <div class='checkpoints'>
                                    <span>
                                        CP{' '}
                                        <span
                                            style={{
                                                color: 'white',
                                                'font-size': '1.5em',
                                            }}
                                        >
                                            8
                                        </span>
                                        /46
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class='drivers'>
                            <For each={drivers.drivers}>
                                {(driver, i) => (
                                    i() !== 0 ? (gap += Math.random() * 3) : 0,
                                    (
                                        <Driver
                                            brand={driver.brand}
                                            gap={gap.toFixed(3)}
                                            name={driver.name}
                                            position={driver.position}
                                            player={'player' in driver}
                                        />
                                    )
                                )}
                            </For>
                            {/* {drivers.drivers.map((driver, index) => {
                            const output = (
                                <Driver
                                    brand={driver.brand}
                                    gap={gap.toFixed(3)}
                                    name={driver.name}
                                    position={driver.position}
                                    player={'player' in driver}
                                    ref={index}
                                />
                            );

                            gap += Math.random() * 3;

                            return output;
                        })} */}
                        </div>
                    </div>
                </div>
            </div>
            <Flag visible={flagVisible()} />
        </>
    );
};

export default App;
