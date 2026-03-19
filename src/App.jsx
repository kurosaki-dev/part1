const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      {/* Solution #1: 1.1 */}
      {/* <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> */}

      {/* Solution #2: 1.1 */}
      {/* 1.3 */}
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
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
      {/* 1.3 */}
      <Part part={props.part1.name} exercise={props.part1.exercises} />
      <Part part={props.part2.name} exercise={props.part2.exercises} />
      <Part part={props.part3.name} exercise={props.part3.exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
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
