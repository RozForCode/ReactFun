import './App.css';
import { useState, useEffect } from 'react'


const query = `query
{allLifts
{name elevationGain status}}`;

const opts = {
    method: "POST",
    headers: { "Content-Type": "application-json" },
    body: JSON.stringify({ query })
}



function Lift({ name, elevation, status }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{elevation} {status}</p>
        </div>
    )
}

function App() {
    const [data, setData] = useState(null);
    // handling loading states - loading state, success state and error state
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://snowtooth.moonhighway.com/`, opts)
            .then(res => res.json())
            // data1 refers to the data that we get from the promise returned by previous .then()
            // which is then used to update the value of useState data that has been set to null
            .then(data1 => setData(data1))
            .then(() => { setLoading(false); })
            .catch(setError);//shorthand could be .then(setData)

    }, []);
    if (loading) return <h1>Loading</h1>
    if (error) return <pre>(JSON.stringify(error))</pre>
    if (data) return (
        <div>
            {data.data.allLifts.map((lift) => (<Lift name={lift.name} elevation={lift.elevationGain} status={lift.status} />))}
        </div>
    )
    return (
        <h1>NULL</h1>
    );
}

export default App;
