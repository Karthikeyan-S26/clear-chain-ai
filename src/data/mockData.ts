export type RiskLevel = 'healthy' | 'warning' | 'critical' | 'phantom';
export type SupplierTier = 1 | 2 | 3;

export interface Supplier {
  id: string;
  name: string;
  tier: SupplierTier;
  location: string;
  reportedStock: number;
  predictedStock: number;
  accuracy: number;
  riskLevel: RiskLevel;
  lastUpdate: string;
  phantomDetected: boolean;
  phantomAmount?: number;
}

export interface Alert {
  id: string;
  type: 'phantom' | 'shortage' | 'delay' | 'disruption';
  severity: RiskLevel;
  supplier: string;
  tier: SupplierTier;
  message: string;
  timestamp: string;
  acknowledged: boolean;
}

export interface MetricData {
  label: string;
  value: number;
  change: number;
  unit?: string;
}

export interface InventoryTrend {
  date: string;
  reported: number;
  predicted: number;
  actual: number;
}

export const suppliers: Supplier[] = [
  {
    id: 'SUP001',
    name: 'Apex Electronics',
    tier: 1,
    location: 'Shanghai, China',
    reportedStock: 15000,
    predictedStock: 14800,
    accuracy: 98.7,
    riskLevel: 'healthy',
    lastUpdate: '2 mins ago',
    phantomDetected: false,
  },
  {
    id: 'SUP002',
    name: 'TechCore Components',
    tier: 1,
    location: 'Tokyo, Japan',
    reportedStock: 8500,
    predictedStock: 8200,
    accuracy: 96.5,
    riskLevel: 'healthy',
    lastUpdate: '5 mins ago',
    phantomDetected: false,
  },
  {
    id: 'SUP003',
    name: 'GlobalChip Industries',
    tier: 2,
    location: 'Taipei, Taiwan',
    reportedStock: 12000,
    predictedStock: 9500,
    accuracy: 79.2,
    riskLevel: 'phantom',
    lastUpdate: '8 mins ago',
    phantomDetected: true,
    phantomAmount: 2500,
  },
  {
    id: 'SUP004',
    name: 'Precision Parts Ltd',
    tier: 2,
    location: 'Seoul, South Korea',
    reportedStock: 6800,
    predictedStock: 5200,
    accuracy: 76.5,
    riskLevel: 'warning',
    lastUpdate: '12 mins ago',
    phantomDetected: true,
    phantomAmount: 1600,
  },
  {
    id: 'SUP005',
    name: 'MicroTech Solutions',
    tier: 3,
    location: 'Shenzhen, China',
    reportedStock: 4500,
    predictedStock: 2100,
    accuracy: 46.7,
    riskLevel: 'critical',
    lastUpdate: '15 mins ago',
    phantomDetected: true,
    phantomAmount: 2400,
  },
  {
    id: 'SUP006',
    name: 'Delta Manufacturing',
    tier: 3,
    location: 'Bangkok, Thailand',
    reportedStock: 3200,
    predictedStock: 3100,
    accuracy: 96.9,
    riskLevel: 'healthy',
    lastUpdate: '3 mins ago',
    phantomDetected: false,
  },
  {
    id: 'SUP007',
    name: 'NanoCore Labs',
    tier: 2,
    location: 'Singapore',
    reportedStock: 7800,
    predictedStock: 7600,
    accuracy: 97.4,
    riskLevel: 'healthy',
    lastUpdate: '1 min ago',
    phantomDetected: false,
  },
  {
    id: 'SUP008',
    name: 'Allied Components',
    tier: 3,
    location: 'Ho Chi Minh City, Vietnam',
    reportedStock: 5600,
    predictedStock: 4800,
    accuracy: 85.7,
    riskLevel: 'warning',
    lastUpdate: '20 mins ago',
    phantomDetected: true,
    phantomAmount: 800,
  },
];

export const alerts: Alert[] = [
  {
    id: 'ALT001',
    type: 'phantom',
    severity: 'critical',
    supplier: 'MicroTech Solutions',
    tier: 3,
    message: 'Critical phantom stock detected: 2,400 units discrepancy. Machine breakdown suspected at production line.',
    timestamp: '2 mins ago',
    acknowledged: false,
  },
  {
    id: 'ALT002',
    type: 'phantom',
    severity: 'phantom',
    supplier: 'GlobalChip Industries',
    tier: 2,
    message: 'Phantom stock alert: 2,500 units unaccounted. Transportation delay from sub-supplier confirmed.',
    timestamp: '8 mins ago',
    acknowledged: false,
  },
  {
    id: 'ALT003',
    type: 'shortage',
    severity: 'warning',
    supplier: 'Precision Parts Ltd',
    tier: 2,
    message: 'Predicted shortage in 72 hours. Current burn rate exceeds replenishment capacity.',
    timestamp: '15 mins ago',
    acknowledged: true,
  },
  {
    id: 'ALT004',
    type: 'delay',
    severity: 'warning',
    supplier: 'Allied Components',
    tier: 3,
    message: 'Shipment delay detected. ETA extended by 48 hours due to port congestion.',
    timestamp: '25 mins ago',
    acknowledged: true,
  },
  {
    id: 'ALT005',
    type: 'disruption',
    severity: 'critical',
    supplier: 'MicroTech Solutions',
    tier: 3,
    message: 'Labor shortage reported. Production capacity reduced by 40% for next 2 weeks.',
    timestamp: '30 mins ago',
    acknowledged: false,
  },
];

export const keyMetrics: MetricData[] = [
  { label: 'Inventory Accuracy', value: 87.3, change: -2.4, unit: '%' },
  { label: 'Phantom Stock Value', value: 7300, change: 12.5, unit: 'units' },
  { label: 'At-Risk Suppliers', value: 4, change: 1, unit: '' },
  { label: 'Active Alerts', value: 5, change: 2, unit: '' },
];

export const inventoryTrends: InventoryTrend[] = [
  { date: 'Mon', reported: 52000, predicted: 50500, actual: 49800 },
  { date: 'Tue', reported: 53500, predicted: 51200, actual: 50100 },
  { date: 'Wed', reported: 54200, predicted: 51800, actual: 49500 },
  { date: 'Thu', reported: 55800, predicted: 52100, actual: 48200 },
  { date: 'Fri', reported: 56400, predicted: 52500, actual: 47800 },
  { date: 'Sat', reported: 55200, predicted: 52800, actual: 48500 },
  { date: 'Sun', reported: 54800, predicted: 53100, actual: 49200 },
];

export const tierDistribution = [
  { tier: 'Tier 1', healthy: 2, warning: 0, critical: 0, phantom: 0 },
  { tier: 'Tier 2', healthy: 1, warning: 1, critical: 0, phantom: 1 },
  { tier: 'Tier 3', healthy: 1, warning: 1, critical: 1, phantom: 0 },
];
