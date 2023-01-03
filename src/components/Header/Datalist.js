// import { getCities } from '../../api/link'
// import { useUser } from '../../api/getRequest'

export default function Datalist({ cities }) {
     if (!cities) {
        return
    } 
    //console.log(cities)
    return (
         <>
            {cities.map((item) => {
                return(<option key={item._id}>{item.name}</option>)
            })}
         </>
     )
}