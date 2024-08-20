import { useId } from "react";

export default function MyComponent() {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>Text field label</label>
            <input type="text" id={id} />
        </div>
    );
};