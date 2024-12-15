import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import ResourceList from '../components/resources/ResourceList';
import ResourceForm from '../components/resources/ResourceForm';
import { Resource } from '../types';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  // Mock data - replace with actual API calls
  const [resources] = useState<Resource[]>([
    {
      id: '1',
      name: 'MacBook Pro',
      type: 'computer',
      locationId: 'Computer Lab 1',
      available: true,
    },
    {
      id: '2',
      name: 'Physics Textbook',
      type: 'book',
      locationId: 'Library',
      available: false,
    },
  ]);

  const handleCreateResource = (resource: Omit<Resource, 'id'>) => {
    // Add API call here
    setShowForm(false);
  };

  const handleEditResource = (resource: Resource) => {
    setEditingResource(resource);
    setShowForm(true);
  };

  const handleDeleteResource = (id: string) => {
    // Add API call here
    console.log('Deleting resource:', id);
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your school resources inventory
          </p>
        </div>
        <button
          onClick={() => {
            setEditingResource(null);
            setShowForm(true);
          }}
          className="mt-4 sm:mt-0 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Resource
        </button>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <div className="flex-1 max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search resources..."
          />
        </div>
      </div>

      {showForm ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingResource ? 'Edit Resource' : 'Add New Resource'}
          </h3>
          <ResourceForm
            onSubmit={handleCreateResource}
            initialData={editingResource || undefined}
            onCancel={() => {
              setShowForm(false);
              setEditingResource(null);
            }}
          />
        </div>
      ) : (
        <ResourceList
          resources={resources}
          onEdit={handleEditResource}
          onDelete={handleDeleteResource}
        />
      )}
    </div>
  );
};

export default Resources;