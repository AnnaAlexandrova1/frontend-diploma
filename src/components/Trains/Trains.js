import TrainsHead from "./TrainsHead"
import TrainsList from "./TrainsList"
import Pagination from "./Pagination"

export default function Trains() {
    return (
        <section className="trains">
            <TrainsHead />
            <TrainsList />
            <Pagination />
        </section>
    )
}