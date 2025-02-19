import { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./Item.css";

const Item = ({
  name,
  todayValue,
  yesterdayValue,
  weekValue
}) => {
  const persentCalc = (a, b) => {
    return Math.round((100/b)*(a - b));
  }

  const [isGraphOpen, setGraphOpen] = useState(false);

  const persent = persentCalc(todayValue, yesterdayValue);

  const options = {
    title: {
      text: '',
    },
    series: [{
      name:'',
      data: [weekValue, yesterdayValue, todayValue]
    }]
  }

  const persentColor = {
    color: persent >=0 ? 'green' : 'red',
  }
  const nodeYesterdayStyle = {
    "background-color": persent > 0 ? "#dbffe2" : (persent < 0 ? "#ffe3de" : "#ebebeb") 
  }
  const nodeWeekStyle = {
    "background-color": persentCalc(todayValue, weekValue) > 0 ? "#dbffe2" : (persentCalc(todayValue, weekValue) < 0 ? "#ffe3de" : "#ebebeb") 
  }

  return (<>
  <div className="line" onClick={() => setGraphOpen(x => !x)}>
    <div className="item-node indicator">{name}</div>
    <div className="item-node today">{todayValue.toLocaleString('ru-RU')}</div>
    <div className="item-node yesterday" style={nodeYesterdayStyle}>
      {yesterdayValue.toLocaleString('ru-RU')}
      <div className="percent" style={persentColor}>{persent}%</div>
    </div>
    <div className="item-node week" style={nodeWeekStyle}>{weekValue.toLocaleString('ru-RU')}</div>
  </div>
  {isGraphOpen && <HighchartsReact highcharts={Highcharts} options={options} />} 
  </>);
}
export default Item