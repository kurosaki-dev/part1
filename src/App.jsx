import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good + neutral + bad) / 3}</p>
      <p>
        positive{" "}
        {good + neutral + bad ? (good / (good + neutral + bad)) * 100 : 0}%
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <h1>give feedback</h1>

      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      {good + neutral + bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given.</p>
      )}
    </main>
  );
};

export default App;
