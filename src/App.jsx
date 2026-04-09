import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  // handler function for votes
  function handleVoteBtn() {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  // function to get the index of the anecdote with most votes
  function getMostVotes() {
    let maxVotes = 0;
    let indexOfMaxVotes = 0;

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        indexOfMaxVotes = i;
      }
    }

    return indexOfMaxVotes;
  }

  // for checking votes array
  console.log(votes);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>
        has {votes[selected]} {votes[selected] === 1 ? "votes" : "vote"}
      </p>
      <div>
        <button onClick={handleVoteBtn}>vote</button>
        <button
          onClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
        >
          next anecdote
        </button>
      </div>

      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[getMostVotes()]}
        <p>
          has {votes[getMostVotes()]}{" "}
          {votes[getMostVotes()] === 1 ? "vote" : "votes"}
        </p>
      </div>
    </div>
  );
};

export default App;
