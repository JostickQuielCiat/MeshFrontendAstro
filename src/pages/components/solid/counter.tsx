import { createSignal } from "solid-js";

const Counter = () => {

    const [count, setCount] = createSignal(0)

    return (
        <div onClick={() => setCount(count() + 1)}>
            Count: {count()}
        </div>
    );
}

export default Counter;