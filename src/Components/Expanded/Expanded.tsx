import { For, Show } from 'solid-js';
import classes from './Results.module.css';
import data from '../../assets/drivers.json';
import TowerDriver from '../TowerDriver/TowerDriver';
import ExpandedDriver from '../ExpandedDriver/ExpandedDriver';

interface IExpanded {
    visible: boolean;
}

function Expanded(props: IExpanded) {
    return (
        <Show when={props.visible}>
            <div class={classes.resultsContainer}>
                <div class={classes.transparentBackground}>
                    <div class={classes.mainContent}>
                        <div class={classes.header}>
                            <div class={classes.raceName}>
                                Blaine County 24h
                            </div>
                            <div class={classes.label}>
                                <div class={classes.position}>#</div>
                                {data.multiclass && (
                                    <div class={classes.multi}># in Class</div>
                                )}
                                <div class={classes.name}>Name</div>
                                <div class={classes.brand}>Brand</div>
                                <div class={classes.car}>Car</div>
                                <div class={classes.bestLap}>Fastest Lap</div>
                                <div class={classes.fps}>FPS</div>
                                <div class={classes.ping}>Ping</div>
                            </div>
                        </div>
                        <div class={classes.drivers}>
                            <For each={data.drivers}>
                                {(driver, i) => (
                                    <ExpandedDriver
                                        brand={driver.brand}
                                        name={driver.name}
                                        player={'player' in driver}
                                        position={driver.position}
                                        car={driver.car}
                                        fastestLap={driver.fastestLap}
                                        fps={driver.fps}
                                        ping={driver.ping}
                                        positionInClass={driver.positionInClass}
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

export default Expanded;
