export default function Pagination() {
  return (
    <section className="pagination-container">
      <button className="angle-back"></button>
      <ul className="pagination-list">
        <li className="active-page">1</li>
        <li className="page">2</li>
        <li className="page">3</li>
      </ul>
      <button className="angle-forward"></button>
    </section>
  );
}
