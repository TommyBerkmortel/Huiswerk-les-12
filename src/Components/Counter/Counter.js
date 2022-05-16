import React from 'react';
import './Counter.css'

function Counter({fruitNameCounter, setFruitNameCounter, fruitName, emoticon}) {
    return (
        <article className="card">
            <div className="emoticon">{emoticon} <h2>{fruitName}</h2></div>

            <div>
                <button
                    type="button"
                    onClick={() => setFruitNameCounter(fruitNameCounter - 1)}
                    disabled={fruitNameCounter === 0}
                >
                    -
                </button>
                {fruitNameCounter}
                <button
                    type="button"
                    onClick={() => setFruitNameCounter(fruitNameCounter + 1)}
                >
                    +
                </button>
            </div>
        </article>
    );
}

export default Counter;
