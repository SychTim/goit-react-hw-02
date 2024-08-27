export default function Options({setData, totalFeedback, reset}) {
    return (
        <div>
            <button onClick={() => setData("good")}>Good</button>
            <button onClick={() => setData("neutral")}>Neutral</button>
            <button onClick={() => setData("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={reset}>Reset</button>}
        </div>
    )
}