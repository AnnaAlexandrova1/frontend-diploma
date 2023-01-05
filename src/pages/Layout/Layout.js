import HeaderSelectOptions from "../../components/Header/HeaderSelectOptions";
import FilterTrainSelect from "../../components/Filters/FilterTrainSelect";
import OverLooked from "../../components/OverLooked/OverLooked";
import Footer from "../../components/Footer/Footer";

export default function Layout({children}) {
  
  return (
    <>
      <HeaderSelectOptions />
      <main className="main-container">
        <section className="sidebar-content">
          <FilterTrainSelect />
          <OverLooked />
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
