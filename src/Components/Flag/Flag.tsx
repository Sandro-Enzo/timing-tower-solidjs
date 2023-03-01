import { mergeProps, Show } from 'solid-js';
import classes from './Flag.module.css';

interface IFlag {
    visible: boolean;
}

function Flag(props: IFlag) {
    return (
        <Show when={props.visible}>
            <div class={classes.flagContainer}>
                <div class={classes.flagBlurryBackground}>
                    <div class={classes.flag}>
                        <div class={classes.messageContainer}>
                            <div class={classes.logo}></div>
                            <div class={classes.message}>BLUE FLAG</div>
                        </div>
                        <div class={classes.explanation}>
                            Faster car(s) approaching behind
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    );
}

export default Flag;
