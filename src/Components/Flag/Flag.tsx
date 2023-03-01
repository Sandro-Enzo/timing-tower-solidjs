import { mergeProps, Show } from 'solid-js';
import './Flag.css';

interface IFlag {
    visible: boolean;
}

function Flag(props: IFlag) {
    return (
        <Show when={props.visible}>
            <div class='flag-container'>
                <div class='flag-blurry-background'>
                    <div class='flag'>
                        <div class='message-container'>
                            <div class='logo'></div>
                            <div class='message'>BLUE FLAG</div>
                        </div>
                        <div class='explanation'>
                            Faster car(s) approaching behind
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    );
}

export default Flag;
