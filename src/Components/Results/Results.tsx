import { For, Show } from 'solid-js';
import classes from './Results.module.css';
import drivers from '../../assets/drivers.json';
import Driver from '../Driver/Driver';

interface IResults {
    visible: boolean;
}

function Results(props: IResults) {
    return (
        <Show when={props.visible}>
            <div class={classes.resultsContainer}>
                <div class={classes.transparentBackground}>
                    <div class={classes.mainContent}>
                        <div class={classes.header}>
                            <div class={classes.raceName}>
                                FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022
                            </div>
                            <div class={classes.label}>
                                <div class={classes.position}>#</div>
                                <div class={classes.multi}># in Class</div>
                                <div class={classes.name}>Name</div>
                                <div class={classes.car}>Car</div>
                                <div class={classes.bestLap}>Fastest Lap</div>
                                <div class={classes.fps}>FPS</div>
                                <div class={classes.ping}>Ping</div>
                            </div>
                        </div>
                        <div class={classes.drivers}>
                            <For each={drivers.drivers}>
                                {(driver, i) => (
                                    <Driver
                                        brand={driver.brand}
                                        gap={driver.gap.toFixed(3)}
                                        name={driver.name}
                                        player={'player' in driver}
                                        position={driver.position}
                                    />
                                )}
                            </For>
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    );
}

export default Results;
