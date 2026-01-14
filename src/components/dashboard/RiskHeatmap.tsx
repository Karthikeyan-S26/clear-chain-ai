import { cn } from "@/lib/utils";
import { suppliers } from "@/data/mockData";

interface RiskHeatmapProps {
  className?: string;
}

export function RiskHeatmap({ className }: RiskHeatmapProps) {
  const getRiskColor = (accuracy: number) => {
    if (accuracy >= 90) return 'bg-risk-healthy';
    if (accuracy >= 70) return 'bg-risk-warning';
    if (accuracy >= 50) return 'bg-risk-critical';
    return 'bg-risk-phantom';
  };

  const getRiskOpacity = (accuracy: number) => {
    return Math.max(0.3, 1 - (accuracy / 100) * 0.5);
  };

  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Risk Heatmap</h2>
        <p className="text-sm text-muted-foreground">
          Supplier inventory accuracy overview
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className={cn(
              "relative p-4 rounded-lg border border-border/50 transition-all duration-300 hover:scale-105 cursor-pointer",
              "bg-gradient-to-br from-card to-secondary/20"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 rounded-lg transition-opacity",
                getRiskColor(supplier.accuracy)
              )}
              style={{ opacity: getRiskOpacity(supplier.accuracy) * 0.3 }}
            />
            <div className="relative z-10">
              <p className="text-xs font-medium text-foreground truncate">
                {supplier.name.split(' ')[0]}
              </p>
              <p className="text-lg font-bold text-foreground mt-1">
                {supplier.accuracy}%
              </p>
              <div className="flex items-center gap-1 mt-1">
                <div className={cn("w-2 h-2 rounded-full", getRiskColor(supplier.accuracy))} />
                <span className="text-xs text-muted-foreground">T{supplier.tier}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-risk-healthy" />
          <span className="text-xs text-muted-foreground">90%+</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-risk-warning" />
          <span className="text-xs text-muted-foreground">70-89%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-risk-critical" />
          <span className="text-xs text-muted-foreground">50-69%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-risk-phantom" />
          <span className="text-xs text-muted-foreground">&lt;50%</span>
        </div>
      </div>
    </div>
  );
}
