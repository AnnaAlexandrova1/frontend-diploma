import TrainsHead from "./TrainsHead";
import TrainsList from "./TrainsList";
import Pagination from "./Pagination";
import Error from '../Error/Error'
import IsLoading from '../IsLoading/IsLoading'
import { useSelector, useDispatch } from "react-redux"
import { useGetRoutesQuery } from "../../api/api"


export default function Trains() {
    const list = useSelector(state => state.routesParamsSlice)
  
    const makeArgs = (list) => {
        let args = ''
        for (let key in list) {
        if (list[key] !== '') {
           args = args + `${key}=${list[key]}&` 
        }
    }
      return args.slice(0, -1)
    }
    const args = makeArgs(list)
    const { currentData: result, isError, isFetching } = useGetRoutesQuery(args)
    
    if (isError) {
        return ( <Error />)
    }
    if (isFetching) {
        return (<IsLoading />)
    }
    if (result) {
         return (
        <section className="trains">
                 <TrainsHead count={result.total_count } />
                 <TrainsList items={ result.items} />
            <Pagination />
        </section>
    )
    }

}