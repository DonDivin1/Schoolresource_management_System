import React from 'react';
import { BookOpen, Users, Clock, AlertCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, description }: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center">
      <div className="inline-flex items-center justify-center rounded-lg bg-blue-50 p-3">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    {
      icon: BookOpen,
      title: 'Total Resources',
      value: '245',
      description: 'Available for use',
    },
    {
      icon: Users,
      title: 'Active Users',
      value: '1,234',
      description: 'Currently registered',
    },
    {
      icon: Clock,
      title: 'Pending Requests',
      value: '12',
      description: 'Awaiting approval',
    },
    {
      icon: AlertCircle,
      title: 'Overdue Returns',
      value: '5',
      description: 'Need attention',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your school resource management system
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* We'll add more dashboard content in subsequent updates */}
    </div>
  );
};

export default Dashboard;