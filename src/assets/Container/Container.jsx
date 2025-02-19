import Item from "../Item";
import "./Container.css";

const Container = () => {
  return (<>
  <div className="container">
    <div className="header">
      <div className="header-node indicator">Показатель</div>
      <div className="header-node today">Текущий день недели</div>
      <div className="header-node yesterday">Вчера</div>
      <div className="header-node week">Этот день недели</div>
    </div>
    <Item key={1} name="Выручка, руб" todayValue={500521} yesterdayValue={480521} weekValue={4805121}/>
    <Item key={2} name="Наличные" todayValue={100000} yesterdayValue={100000} weekValue={100000}/>
    <Item key={3} name="Безналичный расчет" todayValue={100000} yesterdayValue={100000} weekValue={100000}/>
    <Item key={4} name="Кредитные карты" todayValue={100521} yesterdayValue={100521} weekValue={100521}/>
    <Item key={5} name="Средний чек, руб" todayValue={1300} yesterdayValue={900} weekValue={900}/>
    <Item key={6} name="Средний гость, руб" todayValue={1200} yesterdayValue={800} weekValue={800}/>
    <Item key={7} name="удаление из чека (после оплаты), руб" todayValue={1000} yesterdayValue={1100} weekValue={900}/>
    <Item key={8} name="удаление из чека (до оплаты), руб" todayValue={1300} yesterdayValue={1300} weekValue={900}/>
    <Item key={9} name="Количество чеков" todayValue={34} yesterdayValue={36} weekValue={34}/>
    <Item key={10} name="Количество гостей" todayValue={34} yesterdayValue={36} weekValue={32}/>
  </div>
  </>);
}
export default Container