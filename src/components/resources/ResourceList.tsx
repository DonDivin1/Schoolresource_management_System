import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Resource } from '../../types';
import TableHeader from '../common/Table/TableHeader';

interface ResourceListProps {
  resources: Resource[];
  onEdit: (resource: Resource) => void;
  onDelete: (id: string) => void;
}

const ResourceList: React.FC<ResourceListProps> = ({
  resources,
  onEdit,
  onDelete,
}) => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'type', label: 'Type' },
    { key: 'location', label: 'Location' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <TableHeader columns={columns} />
        <tbody>
          {resources.map((resource) => (
            <tr key={resource.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {resource.name}
              </td>
              <td className="px-6 py-4 capitalize">{resource.type}</td>
              <td className="px-6 py-4">{resource.locationId}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    resource.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {resource.available ? 'Available' : 'In Use'}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(resource)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(resource.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceList;