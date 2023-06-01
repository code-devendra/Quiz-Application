import { useEffect, useState } from "react";

export default function Quiz(props) {
  const [error, setError] = useState(false);
  let answer = true;
  const handleNext = () => {
    setError(false);
    let isSelect = false;
    const radioBtn = document.querySelectorAll("#quiz");
    for (let radioSelect of radioBtn) {
      if (radioSelect.checked) {
        isSelect = true;
        answer = radioSelect.value === "true" ? true : false;
        radioSelect.checked = false;
        break;
      }
    }
    if (!isSelect) {
      setError(true);
      return;
    }
    props.nextQuestion(answer);
  };
  useEffect(() => {
    document.querySelector("h1").innerHTML = `Q. ${props.id} ${props.question}`;
  });
  return (
    <div className=" w-11/12 sm:max-w-lg min-h-[350px] bg-slate-50 pb-5 text-center rounded-md shadow-md">
      <h1 className="text-xl w-full bg-slate-300 text-slate-700 p-3 text-left font-semibold mb-4"></h1>
      <div className="mb-4 text-left mx-4">
        <div class="radio-button">
          <input
            className="w-full h-12 absolute opacity-0 cursor-pointer"
            type="radio"
            name="quiz"
            value="false"
            id="quiz"
          />
          <label for="quiz">True</label>
        </div>
        <br />
        <div class="radio-button">
          <input
            className="w-full h-12 absolute opacity-0 cursor-pointer"
            type="radio"
            name="quiz"
            value="false"
            id="quiz"
          />
          <label for="quiz">False</label>
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-600 italic font-semibold mb-3">
          Before going next.. please choose your answer!!
        </p>
      )}
      <button
        onClick={handleNext}
        className=" w-[150px] py-3 text-lg bg-indigo-400 hover:bg-indigo-600 text-slate-50 font-bold rounded-lg"
      >
        Next
      </button>
    </div>
  );
}
