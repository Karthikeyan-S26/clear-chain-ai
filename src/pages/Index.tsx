import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SupplierCard } from "@/components/dashboard/SupplierCard";
import { AlertFeed } from "@/components/dashboard/AlertFeed";
import { InventoryChart } from "@/components/dashboard/InventoryChart";
import { TierVisualization } from "@/components/dashboard/TierVisualization";
import { RiskHeatmap } from "@/components/dashboard/RiskHeatmap";
import { 
  keyMetrics, 
  suppliers, 
  alerts, 
  inventoryTrends 
} from "@/data/mockData";
import { 
  Target, 
  Ghost, 
  AlertTriangle, 
  Bell 
} from "lucide-react";

const metricIcons = [
  <Target className="w-5 h-5" />,
  <Ghost className="w-5 h-5" />,
  <AlertTriangle className="w-5 h-5" />,
  <Bell className="w-5 h-5" />,
];

const Index = () => {
  // Filter to show only suppliers with issues prominently
  const phantomSuppliers = suppliers.filter(s => s.phantomDetected);
  const healthySuppliers = suppliers.filter(s => !s.phantomDetected);

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tier-3/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-12">
        <Header />

        {/* Key Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard 
              key={metric.label} 
              metric={metric} 
              icon={metricIcons[index]}
              delay={index * 100}
            />
          ))}
        </section>

        {/* Tier Visualization */}
        <section className="mb-8">
          <TierVisualization />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart - spans 2 columns */}
          <div className="lg:col-span-2">
            <InventoryChart data={inventoryTrends} />
          </div>
          
          {/* Alert Feed */}
          <div className="lg:col-span-1">
            <AlertFeed alerts={alerts} />
          </div>
        </div>

        {/* Risk Heatmap */}
        <section className="mb-8">
          <RiskHeatmap />
        </section>

        {/* Suppliers Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Supplier Monitor</h2>
              <p className="text-sm text-muted-foreground">
                Real-time inventory validation across all tiers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 text-xs font-medium rounded-full status-phantom border">
                {phantomSuppliers.length} Phantom Detected
              </span>
            </div>
          </div>

          {/* Phantom Stock Suppliers - Priority Display */}
          {phantomSuppliers.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-risk-phantom mb-3 flex items-center gap-2">
                <Ghost className="w-4 h-4" />
                Requiring Immediate Attention
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {phantomSuppliers.map((supplier) => (
                  <SupplierCard key={supplier.id} supplier={supplier} />
                ))}
              </div>
            </div>
          )}

          {/* Healthy Suppliers */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Operating Normally
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {healthySuppliers.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
