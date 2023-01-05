import TrainItem from "./TrainItem";

export default function TrainsList({ items }) {
  
  return (
    <section className="trains-list-container">
      <ul className="trains-list">
        {items.map((item, index) => {
          return <TrainItem item={item} key={index} />
        })}
        </ul>
    </section>
  );
}
