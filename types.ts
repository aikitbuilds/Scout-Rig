
export enum StakeholderRole {
  PARTNER = 'Installation Partner',
  INVESTOR = 'Retail Investor',
  CUSTOMER = 'Energy Customer',
  STRATEGIC = 'Institutional Partner',
  ADMIN = 'Executive/Founder'
}

export interface StationData {
  id: string;
  model: 'Scout Station 100' | 'Scout Station 200' | 'Scout Station 300';
  customer: string;
  location: string;
  status: 'Operational' | 'In transit' | 'Maintenance' | 'Planned';
  kwhMonth: number;
  revenue: number;
  uptime: number;
  nextPayment: string;
  compassStatus: 'Active' | 'Optimizing' | 'Standby';
}

export interface CalculatorState {
  numRigs: number;
  revShare: number;
  years: number;
}
