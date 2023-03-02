import classes from './ExpandedDriver.module.css';
import data from '../../assets/drivers.json';

interface IExpandedDriver {
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

function ExpandedDriver({
    position,
    positionInClass,
    name,
    car,
    fastestLap,
    fps,
    ping,
    brand,
    player,
}: IExpandedDriver) {
    const date = new Date(fastestLap * 1000);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millis = date.getMilliseconds();

    return (
        <div
            class={`${classes.resultsDriverContainer} ${
                player ? classes.player : ''
            }`}
        >
            <div class={classes.position}>{position}</div>
            {data.multiclass && (
                <div class={classes.positionInClass}>{positionInClass}</div>
            )}
            <div class={classes.name}>{name}</div>
            <div
                class={`${classes.brand}`}
                style={{
                    'background-image': `url('/logos/${brand}.webp')`,
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

export default ExpandedDriver;
