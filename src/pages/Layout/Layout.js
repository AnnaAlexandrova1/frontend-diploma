import HeaderSelectOptions from "../../components/Header/HeaderSelectOptions";
import Footer from "../../components/Footer/Footer";

export default function Layout({main, sidebar, sidebarBottom}) {
  
  return (
    <>
      <HeaderSelectOptions />
      <main className="main-container">
        <section className="sidebar-content">
          {sidebar}
          {sidebarBottom}
        </section>
        {main}
      </main>
      <Footer />
    </>
  );
}
