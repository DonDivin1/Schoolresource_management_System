import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import { Request } from '../types';

const RequestStatusBadge: React.FC<{ status: Request['status'] }> = ({ status }) => {
  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const statusIcons = {
    pending: Clock,
    approved: CheckCircle,
    rejected: XCircle,
  };

  const Icon = statusIcons[status];

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${statusStyles[status]}`}>
      <Icon className="w-4 h-4" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const Requests = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API calls
  const [requests] = useState<Request[]>([
    {
      id: '1',
      resourceId: 'MacBook Pro',
      userId: 'John Doe',
      status: 'pending',
      requestDate: '2024-03-15',
    },
    {
      id: '2',
      resourceId: 'Physics Textbook',
      userId: 'Jane Smith',
      status: 'approved',
      requestDate: '2024-03-14',
    },
    {
      id: '3',
      resourceId: 'Classroom 101',
      userId: 'Mike Johnson',
      status: 'rejected',
      requestDate: '2024-03-13',
    },
  ]);

  const handleStatusChange = (requestId: string, newStatus: Request['status']) => {
    // Add API call here
    console.log('Updating request status:', requestId, newStatus);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Resource Requests</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track resource requests from users
        </p>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search requests..."
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
                Requested By
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {request.resourceId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.userId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(request.requestDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <RequestStatusBadge status={request.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {request.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(request.id, 'approved')}
                        className="text-green-600 hover:text-green-900"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'rejected')}
                        className="text-red-600 hover:text-red-900"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;