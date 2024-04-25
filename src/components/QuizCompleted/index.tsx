import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { calculate } from "@/redux/quizData/reducer"
import { RootState } from "@/redux/quizData/quizDataTypes"

import { QuizCompletedProps } from "@/components/QuizCompleted/QuizCompleted"
import Button from "@/components/Button"
import CategoryTag from "@/components/CategoryTag"

import style from "@/components/QuizCompleted/style.module.css"

const QuizCompleted = ({ handleShowHomeComponent }: QuizCompletedProps) => {
  const dispatch = useDispatch()
  const { numberCorrectOptions, quizzes, title } = useSelector(
    (rootReducer: RootState) => rootReducer.quizSlice
  )

  useEffect(() => {
    console.log(quizzes)
    dispatch(calculate())
  }, [])

  return (
    <div className={`${style.container} grid grid-cols-2 w-full`}>
      <h1 className={`${style.h1} text-color flex flex-col`}>
        <span className="HeadingLRegular">Quiz concluído</span>
        <span className={`${style.spanBold} HeadingLBold`}>Você pontuou...</span>
      </h1>

      <div
        className={`${style.wrapperScore} w-full max-w-[564px] flex flex-col justify-self-end`}
      >
        <div className="mb-8 w-full multiple-selection-color rounded-3xl flex items-center flex-col gap-10 justify-center p-12">
          <CategoryTag title={title as any} showCategory={true} />
          <p className="flex flex-col">
            <span className={`${style.score} Display text-color`}>
              {numberCorrectOptions}
            </span>
            <span className="BodyM text-color2">de 10</span>
          </p>
        </div>

        <Button
          disabled={false}
          onClick={handleShowHomeComponent}
          text="Jogar outra categoria"
          className={`${style.button}`}
        />
      </div>
    </div>
  )
}

export default QuizCompleted
