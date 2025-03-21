export interface ActivityLog {
  id: string;
  timestamp: Date;
  action: string;
  details: string;
}

export interface Client {
  id: string;
  name: string;
  platforms: string[];
  createdAt: Date;
  activity: string;
  activityLog: ActivityLog[];
} 