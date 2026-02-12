
import { Case, CaseStatus, Priority, Stat } from './types';

export const MOCK_CASES: Case[] = [
  {
    id: 'CS-1001',
    studentName: 'Alex Rivera',
    studentId: 'ST8829',
    category: 'Mental Health',
    priority: Priority.HIGH,
    status: CaseStatus.IN_PROGRESS,
    dateCreated: '2024-05-10',
    lastUpdated: '2024-05-12',
    description: 'Reporting symptoms of severe anxiety and insomnia due to upcoming finals.'
  },
  {
    id: 'CS-1002',
    studentName: 'Jordan Smith',
    studentId: 'ST1124',
    category: 'Physical Injury',
    priority: Priority.MEDIUM,
    status: CaseStatus.OPEN,
    dateCreated: '2024-05-11',
    lastUpdated: '2024-05-11',
    description: 'Minor ankle sprain sustained during recreational soccer match.'
  },
  {
    id: 'CS-1003',
    studentName: 'Taylor Lee',
    studentId: 'ST4490',
    category: 'Wellness Check',
    priority: Priority.LOW,
    status: CaseStatus.RESOLVED,
    dateCreated: '2024-05-08',
    lastUpdated: '2024-05-09',
    description: 'Routine follow-up after flu recovery.'
  },
  {
    id: 'CS-1004',
    studentName: 'Morgan Chen',
    studentId: 'ST9932',
    category: 'Academic Distress',
    priority: Priority.HIGH,
    status: CaseStatus.PENDING,
    dateCreated: '2024-05-13',
    lastUpdated: '2024-05-13',
    description: 'Financial aid concerns impacting academic performance and stress levels.'
  }
];

export const DASHBOARD_STATS: Stat[] = [
  { label: 'Active Cases', value: 24, change: '+12%', trend: 'up', icon: 'fa-clipboard-list' },
  { label: 'Avg Resolution', value: '1.4 Days', change: '-5%', trend: 'down', icon: 'fa-clock' },
  { label: 'Student Wellness Score', value: '7.8/10', change: '+0.2', trend: 'up', icon: 'fa-heart' },
  { label: 'Appointments Today', value: 12, change: 'Stable', trend: 'neutral', icon: 'fa-calendar-check' }
];

export const CHART_DATA = [
  { name: 'Mon', count: 12 },
  { name: 'Tue', count: 18 },
  { name: 'Wed', count: 15 },
  { name: 'Thu', count: 22 },
  { name: 'Fri', count: 10 },
  { name: 'Sat', count: 4 },
  { name: 'Sun', count: 3 },
];
