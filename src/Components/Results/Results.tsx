import { Show } from 'solid-js';
import './Results.css';

interface IResults {
    visible: boolean;
}

function Results(props: IResults) {
    return (
        <Show when={props.visible}>
            <div>Results</div>
        </Show>
    );
}

export default Results;
