import { cn } from "@/lib/utils";
import { Factory, Cpu, Layers, ArrowRight, Ghost } from "lucide-react";
import { suppliers } from "@/data/mockData";

interface TierVisualizationProps {
  className?: string;
}

export function TierVisualization({ className }: TierVisualizationProps) {
  const tier1 = suppliers.filter(s => s.tier === 1);
  const tier2 = suppliers.filter(s => s.tier === 2);
  const tier3 = suppliers.filter(s => s.tier === 3);

  const getTierStats = (tierSuppliers: typeof suppliers) => {
    const total = tierSuppliers.length;
    const phantom = tierSuppliers.filter(s => s.phantomDetected).length;
    const avgAccuracy = tierSuppliers.reduce((acc, s) => acc + s.accuracy, 0) / total;
    return { total, phantom, avgAccuracy };
  };

  const tier1Stats = getTierStats(tier1);
  const tier2Stats = getTierStats(tier2);
  const tier3Stats = getTierStats(tier3);

  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Supply Chain Tier Overview</h2>
        <p className="text-sm text-muted-foreground">
          Real-time visibility across all supplier tiers
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Tier 1 */}
        <div className="flex-1 p-5 rounded-xl bg-gradient-to-br from-tier-1/10 to-transparent border border-tier-1/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-tier-1/20">
              <Factory className="w-5 h-5 text-tier-1" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Tier 1</h3>
              <p className="text-xs text-muted-foreground">Direct Suppliers</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-2xl font-bold text-tier-1">{tier1Stats.total}</p>
              <p className="text-xs text-muted-foreground">Suppliers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{tier1Stats.avgAccuracy.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground">Accuracy</p>
            </div>
          </div>
          {tier1Stats.phantom > 0 && (
            <div className="flex items-center gap-1 mt-3 text-xs text-risk-phantom">
              <Ghost className="w-3 h-3" />
              {tier1Stats.phantom} phantom detected
            </div>
          )}
        </div>

        <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />

        {/* Tier 2 */}
        <div className="flex-1 p-5 rounded-xl bg-gradient-to-br from-tier-2/10 to-transparent border border-tier-2/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-tier-2/20">
              <Cpu className="w-5 h-5 text-tier-2" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Tier 2</h3>
              <p className="text-xs text-muted-foreground">Component Makers</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-2xl font-bold text-tier-2">{tier2Stats.total}</p>
              <p className="text-xs text-muted-foreground">Suppliers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{tier2Stats.avgAccuracy.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground">Accuracy</p>
            </div>
          </div>
          {tier2Stats.phantom > 0 && (
            <div className="flex items-center gap-1 mt-3 text-xs text-risk-phantom">
              <Ghost className="w-3 h-3" />
              {tier2Stats.phantom} phantom detected
            </div>
          )}
        </div>

        <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />

        {/* Tier 3 */}
        <div className="flex-1 p-5 rounded-xl bg-gradient-to-br from-tier-3/10 to-transparent border border-tier-3/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-tier-3/20">
              <Layers className="w-5 h-5 text-tier-3" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Tier 3</h3>
              <p className="text-xs text-muted-foreground">Raw Materials</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-2xl font-bold text-tier-3">{tier3Stats.total}</p>
              <p className="text-xs text-muted-foreground">Suppliers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{tier3Stats.avgAccuracy.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground">Accuracy</p>
            </div>
          </div>
          {tier3Stats.phantom > 0 && (
            <div className="flex items-center gap-1 mt-3 text-xs text-risk-phantom">
              <Ghost className="w-3 h-3" />
              {tier3Stats.phantom} phantom detected
            </div>
          )}
        </div>
      </div>

      {/* Risk propagation indicator */}
      <div className="mt-6 p-4 rounded-lg bg-risk-critical/10 border border-risk-critical/20">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-risk-critical animate-pulse" />
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-risk-critical">Risk Propagation Alert:</span>{' '}
            Tier 3 disruption at MicroTech Solutions may impact 2 Tier-2 suppliers within 48 hours
          </p>
        </div>
      </div>
    </div>
  );
}
