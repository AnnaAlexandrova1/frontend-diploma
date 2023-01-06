//import TrainsHead from "../../components/Trains/TrainsHead";
import TrainsHead from '../../components/Trains/TrainsHead'

import TrainsList from "../../components/Trains/TrainsList";
import Pagination from "../../components/Trains/Pagination";
import Error from '../../components/Error/Error'
import IsLoading from '../../components/IsLoading/IsLoading'
import { useSelector } from "react-redux"
import { useGetRoutesQuery } from "../../api/api"
import '../selectOptions.css'


export default function TrainSelect() {
    const list = useSelector(state => state.routesParamsSlice)
    console.log(list)
  
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
        console.log(result)
         return (
        <section className="trains">
                 <TrainsHead count={result.total_count } />
                 <TrainsList items={ result.items} />
            <Pagination />
        </section>
    )
    }

}