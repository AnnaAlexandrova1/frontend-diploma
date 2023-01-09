import { useSelector } from "react-redux";
import TrainItem from "./TrainItem";
import { sortByPrice } from "../../service/dataTransform";

export default function TrainsList() {

  const printTrainsList = useSelector(state => state.trainsParamsSlice.printTrainsList)
  const trainsList = useSelector(state => state.trainsParamsSlice.trainsList)
//  console.log(printTrainsList)
//   sortByPrice(printTrainsList)
  console.log(printTrainsList)

  return (
    <section className="trains-list-container">
      <ul className="trains-list">
        {printTrainsList.map((item, index) => {
          return <TrainItem item={item} key={index} />
        })}
        </ul>
    </section>
  );
}
