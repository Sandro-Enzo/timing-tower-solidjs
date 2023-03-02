import { createEffect, For, Show } from 'solid-js';
import classes from './Tower.module.css';
import data from '../../assets/drivers.json';
import TowerDriver from '../TowerDriver/TowerDriver';

interface ITower {
    visible: boolean;
}

function Tower(props: ITower) {
    let gap = 0;

    createEffect(() => {
        document.documentElement.style.setProperty(
            '--drivers',
            `${data.drivers.length}`
        );
    });

    return (
        <Show when={props.visible}>
            <div class={classes.towerContainer}>
                <div class={classes.blurryBackground}>
                    <div class={classes.mainBackground}>
                        <div class={classes.header}>
                            <div class={classes.title}></div>
                            <div class={classes.raceInfo}>
                                <div class={classes.laps}>
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
                                <div class={classes.checkpoints}>
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
                        <div class={classes.drivers}>
                            <For each={data.drivers}>
                                {(driver, i) => (
                                    i() !== 0 ? (gap += Math.random() * 3) : 0,
                                    (
                                        <TowerDriver
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
        </Show>
    );
}

export default Tower;
