import './Driver.css';

interface IDriver {
    position: number;
    brand: string;
    name: string;
    gap: string;
    player: boolean;
}

function Driver({ position, brand, name, gap, player }: IDriver) {
    const displayGap = parseFloat(gap) > 0 ? `+${gap}` : `-${gap}`;

    return (
        <div class={`driver ${player ? 'player' : ''}`}>
            <div class='position'>{position}</div>
            <div
                class='brand'
                style={{
                    'background-image': `url('./src/assets/images/${brand}.webp')`,
                }}
            ></div>
            <div class={`name`}>{name}</div>
            <div class='gap'>{parseFloat(gap) > 0 ? displayGap : 'Leader'}</div>
            {/* <div class="tire">S</div> */}
        </div>
    );
}

export default Driver;
