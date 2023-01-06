

export default function SeatsTicketQty({ data}) {
    
    return (
        <section>
                    <h2 className="ticket-count-title">Количество билетов</h2>
                    <div className="ticket-count-container">
                        <div className="ticket-count active-count adult">
                            <div className="count-screen">
                                {/* <!-- тут разместить шаблон {`Взрослых-${props.name.num}`}--> */}
                                <p>Взрослых - 2</p>
                            </div>
                            <p className="seat-description">Можно добавить еще 3 пассажиров</p>
                        </div>

                        <div className="ticket-count kids">
                            <div className="count-screen">
                                <p>Детских - 1</p>
                            </div>
                            <p className="seat-description">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                        </div>

                        <div className="ticket-count kidsWithoutSeats">
                            <div className="count-screen">
                                <p>Детских «без места» — 0</p>
                            </div>
                            <p className="seat-description"></p>
                        </div>

                    </div>
                </section>
    )
}