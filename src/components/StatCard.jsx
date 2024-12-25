import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Dynamic card data

const StatCard = ({ title, number, icon, bgColor }) => (
  <div className="state_card">
    <div className="card_left">
      <h2 className="title">{title}</h2>
      <span className="number">{number}</span>
    </div>
    <div className="card_right">
      <div className="icon" style={{ backgroundColor: bgColor }}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  </div>
);
export default StatCard