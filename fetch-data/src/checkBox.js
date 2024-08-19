import { useReducer } from "react";

export function Check() {

    const [checked, setChecked] = useReducer(checked => !checked,
        false
    )
    // false is the initial value, after it negation of checked is returned

    return (
        <>
            <label htmlFor="checked">
                {checked ? "Checked" : 'Not Checked'}
            </label>
            <input id="checked" type="checkbox" value={checked} onChange={setChecked} />
        </>
    )
}
//htmlFor -  is used in place of the standard HTML for attribute to avoid conflicts with JavaScript's reserved for keyword.