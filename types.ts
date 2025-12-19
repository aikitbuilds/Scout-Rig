
export enum StakeholderRole {
  PARTNER = 'Installation Partner',
  INVESTOR = 'Retail Investor',
  CUSTOMER = 'Energy Customer',
  STRATEGIC = 'Institutional Partner',
  ADMIN = 'Executive/Founder'
}

export interface RigData {
  id: string;
  customer: string;
  location: string;
  status: 'Operational' | 'In transit' | 'Maintenance' | 'Planned';
  kwhMonth: number;
  revenue: number;
  uptime: number;
  nextPayment: string;
}

export interface CalculatorState {
  numRigs: number;
  revShare: number;
  years: number;
}
