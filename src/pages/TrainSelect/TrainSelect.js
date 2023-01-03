import HeaderSelectOptions from "../../components/Header/HeaderSelectOptions"
import FilterTrainSelect from "../../components/Filters/FilterTrainSelect"
import OverLooked from "../../components/OverLooked/OverLooked"
import Trains from "../../components/Trains/Trains"
import Footer from "../../components/Footer/Footer"
import '../selectOptions.css'

export default function TrainSelect() {
    return (<>
        <HeaderSelectOptions />
        <main className="main-container">
            <section className="sidebar-content">
                <FilterTrainSelect />
                <OverLooked />
            </section>
            <Trains />
        </main>
        <Footer />
    </>)
}