
export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export enum CaseStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  PENDING = 'Pending'
}

export interface Case {
  id: string;
  studentName: string;
  studentId: string;
  category: string;
  priority: Priority;
  status: CaseStatus;
  dateCreated: string;
  lastUpdated: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export type View = 'dashboard' | 'cases' | 'ai-assistant' | 'wellness' | 'settings';
