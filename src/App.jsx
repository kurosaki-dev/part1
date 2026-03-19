const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      {/* Solution #1: 1.1 */}
      {/* <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> */}

      {/* Solution #2: 1.1 */}
      {/* 1.4 */}
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

// Solution #1
// const Content = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercise}
//     </p>
//   );
// };

// Solution #2
const Content = (props) => {
  return (
    <>
      {/* 1.4 */}
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

// 1.2
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

export default App;
