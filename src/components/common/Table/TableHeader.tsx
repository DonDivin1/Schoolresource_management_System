import React from 'react';

interface TableHeaderProps {
  columns: {
    key: string;
    label: string;
  }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th key={column.key} scope="col" className="px-6 py-3">
            {column.label}
          </th>
        ))}
        <th scope="col" className="px-6 py-3">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;