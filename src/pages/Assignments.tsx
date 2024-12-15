import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import { Assignment } from '../types';

const AssignmentStatusBadge: React.FC<{ status: Assignment['status'] }> = ({ status }) => {
  const statusStyles = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    overdue: 'bg-red-100 text-red-800',
  };

  const statusIcons = {
    active: Clock,
    completed: Calendar,
    overdue: AlertCircle,
  };

  const Icon = statusIcons[status];

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${statusStyles[status]}`}>
      <Icon className="w-4 h-4" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const Assignments = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API calls
  const [assignments] = useState<Assignment[]>([
    {
      id: '1',
      resourceId: 'MacBook Pro',
      userId: 'John Doe',
      startDate: '2024-03-01',
      endDate: '2024-03-15',
      status: 'active',
    },
    {
      id: '2',
      resourceId: 'Physics Textbook',
      userId: 'Jane Smith',
      startDate: '2024-02-15',
      endDate: '2024-03-01',
      status: 'completed',
    },
    {
      id: '3',
      resourceId: 'Classroom 101',
      userId: 'Mike Johnson',
      startDate: '2024-02-01',
      endDate: '2024-02-15',
      status: 'overdue',
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Resource Assignments</h2>
        <p className="mt-1 text-sm text-gray-500">
          Track resources assigned to users
        </p>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search assignments..."
          />
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resource
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {assignment.resourceId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.userId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(assignment.startDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(assignment.endDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <AssignmentStatusBadge status={assignment.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;