// Database configuration placeholder
// In production, this would connect to a real database

export interface Incident {
  id: string;
  company: string;
  email: string;
  incidentType: string;
  description: string;
  urgency: string;
  status: string;
  createdAt: string;
}

export interface ScanResult {
  id: string;
  target: string;
  status: string;
  vulnerabilities: string[];
  timestamp: string;
}

// Mock database functions
export const db = {
  incidents: {
    create: async (data: Omit<Incident, "id" | "createdAt">) => {
      // In production, save to database
      console.log("Creating incident:", data);
      return {
        id: generateId(),
        ...data,
        createdAt: new Date().toISOString(),
      };
    },
    findMany: async () => {
      // In production, fetch from database
      return [];
    },
  },
  scans: {
    create: async (data: Omit<ScanResult, "id" | "timestamp">) => {
      // In production, save to database
      console.log("Creating scan result:", data);
      return {
        id: generateId(),
        ...data,
        timestamp: new Date().toISOString(),
      };
    },
  },
};

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}
