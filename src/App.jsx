const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      {/* Solution #1: 1.1 */}
      {/* <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> */}

      {/* Solution #2: 1.1 */}
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
      <Total
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
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
      {/* 1.2 */}
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
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
