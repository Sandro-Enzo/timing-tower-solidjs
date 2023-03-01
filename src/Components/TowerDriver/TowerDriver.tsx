import classes from './TowerDriver.module.css';

interface IDriver {
    position: number;
    brand: string;
    name: string;
    gap: string;
    player: boolean;
}

function TowerDriver({ position, brand, name, gap, player }: IDriver) {
    const displayGap = parseFloat(gap) > 0 ? `+${gap}` : `-${gap}`;

    return (
        <div class={`${classes.driver} ${player ? classes.player : ''}`}>
            <div class={classes.position}>{position}</div>
            <div
                class={classes.brand}
                style={{
                    'background-image': `url('./src/assets/images/${brand}.webp')`,
                }}
            ></div>
            <div class={classes.name}>{name}</div>
            <div class={classes.gap}>
                {parseFloat(gap) > 0 ? displayGap : 'Leader'}
            </div>
            {/* <div class="tire">S</div> */}
        </div>
    );
}

export default TowerDriver;
