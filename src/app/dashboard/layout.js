
import './dashboard-layout.scss';
import Dashnav from "../../components/dashnav"

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
        <Dashnav />
        <div className="dashboard__main">
          {children}
        </div>
      </div>

  );
}