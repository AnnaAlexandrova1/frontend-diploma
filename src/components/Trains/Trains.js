import TrainsHead from "./TrainsHead"
import TrainsList from "./TrainsList"
import Pagination from "./Pagination"
import { useSelector, useDispatch } from "react-redux"
import routesParamsSlice from "../../reducers/routesParamsSlice"
import { setParams } from "../../reducers/routesParamsSlice"
import store from "../../store/store"

export default function Trains() {
    const list = useSelector(state => state.routesParamsSlice)
    const dispatch = useDispatch()
    console.log(list)
    return (
        <section className="trains">
            <TrainsHead />
            <TrainsList />
            <Pagination />
        </section>
    )
}