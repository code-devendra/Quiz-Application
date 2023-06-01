export default function Result(props) {
  const ans = (props.correct * 100) / 10;
  return (
    <div className=" w-11/12 sm:max-w-lg min-h-[350px] bg-slate-50 py-5 text-center rounded-md shadow-md tracking-wider">
      <h1 className="text-4xl text-violet-600 font-bold mb-4">Results Time</h1>
      <hr />
      <div className=" text-lg text-slate-500 font-semibold my-4 pl-[10%]  text-left">
        <p>
          Total Questions -
          <span className=" text-xl text-indigo-500 font-bold"> 10</span>
        </p>
        <p>
          Correct -
          <span className=" text-xl text-indigo-500 font-bold">
            {" " + props.correct}
          </span>
        </p>
        <p>
          Incorrect -
          <span className=" text-xl text-indigo-500 font-bold">
            {" "}
            {10 - props.correct}
          </span>
        </p>
        <p>
          Accuracy -
          <span
            className={
              ans < 35
                ? "text-red-600 text-xl font-bold"
                : ans < 60
                ? "text-yellow-600 text-xl font-bold"
                : " text-green-600 text-xl font-bold"
            }
          >
            {" "}
            {ans}%
          </span>
        </p>
      </div>
      <button
        onClick={props.restartQuiz}
        className=" w-[150px] py-3 text-lg bg-violet-400 hover:bg-violet-600 text-slate-50 font-bold rounded-lg mt-5"
      >
        Restart
      </button>
    </div>
  );
}
