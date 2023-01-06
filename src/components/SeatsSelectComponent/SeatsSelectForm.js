export default function SeatsSelectForm({ vanChecked, typeVan }) {
    console.log(vanChecked)
    return (
        <div className="seat-select-form">

                        <div className="big-wagon-num">
                            <p className="big-num">{drowNumber(index, typeVan)}</p>
                            <p>вагон</p>
                        </div>
                        <div className="wagon-description">
                            <div className="seats-positions">
                                <h3>Места <span className="available-seats">11</span></h3>
                                <p className="seats-position">Верхние <span className="available-seats">3</span></p>
                                <p className="seats-position">Нижние <span className="available-seats">8</span></p>
                            </div>
                            <div className="seats-prices">
                                <h3>Стоимость</h3>
                                <p className="seats-price">2920<span className="rub-vector-small"></span></p>
                                <p className="seats-price">3530<span className="rub-vector-small"></span></p>
                            </div>
                            <div className="wagon-facilities">
                                <h3>Обслуживание <span className="service-company-name">ФПК</span></h3>
                                <ul className="facilities-list">
                                    <li data-title="Кондиционер" className="facilities-vector conditioner"></li>
                                    <li data-title="Wi-Fi" className="facilities-vector wifi active wifi-active"></li>
                                    <li data-title="Белье" className="facilities-vector linens included linens-included"></li>
                                    <li data-title="Питание" className="facilities-vector food"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    )
}