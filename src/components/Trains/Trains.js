import TrainsHead from "./TrainsHead"
import TrainsList from "./TrainsList"
import Pagination from "./Pagination"
import { useSelector, useDispatch } from "react-redux"
import { useGetRoutesQuery } from "../../api/api"


export default function Trains() {
    const list = useSelector(state => state.routesParamsSlice)
    const dispatch = useDispatch()
    const { currentData: result, isError, isFetching } = useGetRoutesQuery(args)
    

    return (
        <section className="trains">
            <TrainsHead />
            <TrainsList />
            <Pagination />
        </section>
    )
}