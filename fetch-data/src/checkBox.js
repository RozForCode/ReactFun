import { useReducer } from "react";

export function Check() {

    const [checked, setChecked] = useReducer(checked => !checked,
        false
    )


    return (
        <>
            <label htmlFor="checked">
                {checked ? "Checked" : 'Not Checked'}
            </label>
            <input id="checked" type="checkbox" value={checked} onChange={setChecked} />
        </>
    )
}