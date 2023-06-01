export default function Home(props) {
  return (
    <div className=" w-11/12 sm:max-w-lg min-h-[350px] bg-slate-50 text-center py-5 px-3 rounded-md shadow-md">
      <h1 className="text-2xl sm:text-4xl text-violet-600 font-bold mb-5">
        Welcome to the Towards Quiz
      </h1>
      <p className="text-sm sm:text-lg text-slate-600 italic font-semibold mb-7">
        Let's spend some time to check your skills in Computer Science
      </p>
      <button
        onClick={props.start}
        className=" w-[150px] py-3 text-lg bg-violet-400 hover:bg-violet-600 text-slate-50 font-bold rounded-lg mb-7"
      >
        Start
      </button>
      <p className="text-sm text-red-400 italic mt-5 font-semibold">
        *Note: Do not refresh the page in between the quiz otherwise your
        progress is clear and you need to restart the quiz again..
      </p>
    </div>
  );
}
