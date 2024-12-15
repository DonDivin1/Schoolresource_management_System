// Common types used across the application
export type UserRole = 'admin' | 'teacher' | 'librarian' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Resource {
  id: string;
  name: string;
  type: string;
  available: boolean;
  locationId: string;
}

export interface Request {
  id: string;
  resourceId: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected';
  requestDate: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
}

export interface Assignment {
  id: string;
  resourceId: string;
  userId: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'overdue';
}