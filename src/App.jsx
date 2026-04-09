import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={good + neutral + bad} />
      <StatisticsLine text="average" value={(good + neutral + bad) / 3} />
      <StatisticsLine
        text="positive"
        value={
          (good + neutral + bad ? (good / (good + neutral + bad)) * 100 : 0) +
          "%"
        }
      />
    </div>
  );
};

const StatisticsLine = (props) => {
  const { text, value } = props;

  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
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
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
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
