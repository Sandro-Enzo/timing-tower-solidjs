import { Show } from 'solid-js';
import classes from './Results.module.css';

interface IResults {
    visible: boolean;
}

function Results(props: IResults) {
    return (
        <Show when={props.visible}>
            <div class={classes.resultsContainer}>
                <div class={classes.transparentBackground}>
                    <div class={classes.mainContent}>
                        <div class={classes.header}></div>
                        <div class={classes.drivers}></div>
                    </div>
                </div>
            </div>
        </Show>
    );
}

export default Results;
