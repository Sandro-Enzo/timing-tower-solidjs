import { Show } from 'solid-js';
import classes from './ResultsDriver.module.css';
import data from '../../assets/drivers.json';

interface IResultsDriver {
    position: number;
    positionInClass: number;
    name: string;
    car: string;
    fastestLap: number;
    fps: number;
    ping: number;
    brand: string;
    player: boolean;
}

function ResultsDriver({
    position,
    positionInClass,
    name,
    car,
    fastestLap,
    fps,
    ping,
    brand,
    player,
}: IResultsDriver) {
    const date = new Date(fastestLap * 1000);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millis = date.getMilliseconds();

    return (
        <div class={classes.resultsDriverContainer}>
            <div class={classes.position}>{position}</div>
            {data.multiclass && (
                <div class={classes.positionInClass}>{positionInClass}</div>
            )}
            <div class={classes.name}>{name}</div>
            <div
                class={`${classes.brand}`}
                style={{
                    'background-image': `url('./src/assets/images/${brand}.webp')`,
                }}
            ></div>
            <div class={classes.car}>{car}</div>
            <div class={classes.fastestLap}>{`${minutes}:${String(
                seconds
            ).padStart(2, '0')}.${String(millis).padStart(3, '0')}`}</div>
            <div class={classes.fps}>{fps}</div>
            <div class={classes.ping}>{ping}</div>
        </div>
    );
}

export default ResultsDriver;