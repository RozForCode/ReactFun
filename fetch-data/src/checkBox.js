import { useReducer } from "react";

export function Check() {

    const [checked, setChecked] = useReducer(checked => !checked,
        false
    )


    return (
        <>
            <label>
                {checked ? "Checked" : 'Not Checked'}
            </label>
            <input type="checkbox" value={checked} onChange={setChecked} />
        </>
    )
}