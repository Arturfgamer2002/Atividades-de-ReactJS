import { formatCurrentMonth } from "../../helpers/dataFilter";
import "./index.css";
import ResumeItem from "../ResumeIntem"; 


// Insira as props que faltam.
const InfoArea = ({ currentMonth, onMonthChange, income, expense }) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-"); 
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1); 
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <div className="info-container">
      <div className="monthArea">
        <div className="monthArrow" onClick={handlePrevMonth}>
          ⬅️
        </div>
        <div className="monthTitle">{formatCurrentMonth(currentMonth)}</div>
        <div className="monthArrow" onClick={handleNextMonth}>
          ➡️
        </div>
      </div>
      <div className="resumeArea">
        {/* ResumeItem para Receitas */}
        <ResumeItem label="Receitas" value={income} color="green" />

        {/* ResumeItem para Despesas */}
        <ResumeItem label="Despesas" value={expense} color="red" />

        {/* ResumeItem para Balanço */}
        <ResumeItem
          label="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </div>
    </div>
  );
};
export default InfoArea