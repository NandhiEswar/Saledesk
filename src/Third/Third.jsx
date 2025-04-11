import React from 'react';
import './Third.css';

function Third() {
  return (
    <div className="third-container bg-gray-100 py-10 px-5">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Key Features of Sales Desk</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore our suite's powerful features for streamlined sales management and lead nurturing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="feature-card bg-white shadow-lg p-5 rounded-lg text-center">
          <img src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-lead-management-icon-leadership-leader-picture-image_8207374.png" alt="Lead Management" className="mx-auto mb-4 " />
          <h2 className="text-xl font-semibold text-gray-800">Lead Management</h2>
          <p className="text-gray-600 mt-2">
            Effectively streamline the lead lifecycle, improve conversion rates, and drive revenue growth.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-white shadow-lg p-5 rounded-lg text-center">
          <img src="https://img.freepik.com/free-vector/post-service-tracking-abstract-concept-vector-illustration_335657-5714.jpg?semt=ais_country_boost&w=740" alt="Sales Activity Tracking" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Sales Activity Tracking</h2>
          <p className="text-gray-600 mt-2">
            Track sales activities & tasks, deals, and monitor the progress of each opportunity through stages.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-white shadow-lg p-5 rounded-lg text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/6818/6818198.png" alt="Target Management" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Target Management</h2>
          <p className="text-gray-600 mt-2">
            Elevate sales performance by fostering collaboration and competition. Define goals, compare, monitor, and surpass targets.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card bg-white shadow-lg p-5 rounded-lg text-center">
          <img src="https://media.istockphoto.com/id/1152436659/vector/workflow-icon-in-line-style.jpg?s=612x612&w=0&k=20&c=00BTexbDVY3WoWZUK6kzN6bmEDNI0YM7LYteqYPikNI=" alt="Sales Workflow Automation" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Sales Workflow Automation</h2>
          <p className="text-gray-600 mt-2">
            Reduce repetitive and manual tasks with advanced automated workflows for optimal efficiency and productivity.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="feature-card bg-white shadow-lg p-5 rounded-lg text-center">
          <img src="https://call4site.com/assets/images/mobile-app-development.png" alt="Mobile CRM" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Mobile CRM</h2>
          <p className="text-gray-600 mt-2">
            Optimize field operations with real-time geo-tracking and empower field team to be more productive in an increasingly mobile world.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="feature-card bg-white shadow-lg p-5 rounded-lg text-center">
          <img src="https://png.pngtree.com/png-vector/20230307/ourmid/pngtree-sales-report-vector-icon-design-illustration-png-image_6636993.png" alt="Sales Dashboards & Reports" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Sales Dashboards & Reports</h2>
          <p className="text-gray-600 mt-2">
            Generate reports to analyze sales performance, track key metrics, and gain insights into trends, allowing for data-driven decision-making.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Third;