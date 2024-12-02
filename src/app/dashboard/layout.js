import Link from 'next/link';
import './dashboard-layout.scss';

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        {/* Sidebar */}
        <div className="dashboard__sidebar">
          <nav>
            <ul className="dashboard__nav-list">
              <li className="dashboard__nav-item">
                <Link href="/dashboard">
                  Dashboard Home
                </Link>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="dashboard__main">
          {children}
        </div>
      </div>
    </div>
  );
}