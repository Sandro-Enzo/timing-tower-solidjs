import { createEffect, For } from 'solid-js';
import './Tower.css';
import drivers from '../../assets/drivers.json';
import Driver from '../Driver/Driver';

function Tower() {
    let gap = 0;

    createEffect(() => {
        document.documentElement.style.setProperty(
            '--drivers',
            `${drivers.drivers.length}`
        );
    });

    return (
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
    );
}

export default Tower;
