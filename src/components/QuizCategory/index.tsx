import Image from "next/image";
import { QuizCategoryProps } from "./QuizCategory";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { setCategory } from "@/redux/quizData/reducer";

const QuizCategory = ({ title, goToQuestion }: QuizCategoryProps) => {
  const dispatch = useDispatch();

  const handleClickButton = () => {
    goToQuestion();
    dispatch(
      setCategory({
        title: title,
      })
    );
  };

  return (
    <button
      className={`${style.shadow} text-color quiz-category-color HeadingS w-full max-w-[564px] h-24 rounded-3xl flex items-center gap-8 p-5`}
      onClick={handleClickButton}
    >
      {title === "Git" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#F6E7FF] flex items-center justify-center">
            <Image
              src={"/assets/icon-accessibility.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p>Git</p>
        </>
      ) : null}
      {title === "Github" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#E0FDEF] flex items-center justify-center">
            <Image src={"/assets/icon-css.svg"} width={40} height={40} alt="" />
          </div>
          <p>Github</p>
        </>
      ) : null}

      {title === "Logica" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#FFF1E9] flex items-center justify-center">
            <Image
              src={"/assets/icon-html.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p>Lógica de Programação</p>
        </>
      ) : null}

      {title === "Nodejs" ? (
        <>
          <div className="w-14 h-14 rounded-lg bg-[#FFF1E9] flex items-center justify-center">
            <Image
              src={"/assets/nodejs.svg"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <p>Nodejs</p>
        </>
      ) : null}
    </button>
  );
};

export default QuizCategory;
