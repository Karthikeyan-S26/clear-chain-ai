import { cn } from "@/lib/utils";
import { MapPin, Clock, AlertTriangle, Ghost } from "lucide-react";
import type { Supplier } from "@/data/mockData";

interface SupplierCardProps {
  supplier: Supplier;
  className?: string;
}

const tierStyles = {
  1: 'tier-badge-1',
  2: 'tier-badge-2',
  3: 'tier-badge-3',
};

const riskStyles = {
  healthy: 'status-healthy',
  warning: 'status-warning',
  critical: 'status-critical',
  phantom: 'status-phantom',
};

export function SupplierCard({ supplier, className }: SupplierCardProps) {
  const discrepancy = supplier.reportedStock - supplier.predictedStock;
  const discrepancyPercent = ((discrepancy / supplier.reportedStock) * 100).toFixed(1);

  return (
    <div className={cn("glass-card-hover p-5 space-y-4 hover-glow group", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{supplier.name}</h3>
            {supplier.phantomDetected && (
              <Ghost className="w-4 h-4 text-risk-phantom animate-pulse group-hover:scale-125 transition-transform duration-300" />
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {supplier.location}
          </div>
        </div>
        <div className="flex gap-2">
          <span className={cn("px-2 py-1 text-xs font-medium rounded-md border transition-all duration-300 group-hover:scale-105", tierStyles[supplier.tier])}>
            Tier {supplier.tier}
          </span>
          <span className={cn("px-2 py-1 text-xs font-medium rounded-md border capitalize transition-all duration-300 group-hover:scale-105", riskStyles[supplier.riskLevel])}>
            {supplier.riskLevel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1 group-hover:translate-x-1 transition-transform duration-300">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Reported</p>
          <p className="text-lg font-semibold text-foreground">{supplier.reportedStock.toLocaleString()}</p>
        </div>
        <div className="space-y-1 group-hover:translate-x-1 transition-transform duration-300">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Predicted</p>
          <p className="text-lg font-semibold text-foreground">{supplier.predictedStock.toLocaleString()}</p>
        </div>
      </div>

      {supplier.phantomDetected && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-risk-phantom/10 border border-risk-phantom/20 animate-pulse-glow">
          <AlertTriangle className="w-4 h-4 text-risk-phantom animate-bounce-subtle" />
          <div className="flex-1">
            <p className="text-sm font-medium text-risk-phantom">
              Phantom Stock: {supplier.phantomAmount?.toLocaleString()} units
            </p>
            <p className="text-xs text-muted-foreground">
              {discrepancyPercent}% discrepancy detected
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-border/50">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {supplier.lastUpdate}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 rounded-full bg-secondary overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-700 group-hover:animate-pulse",
                supplier.accuracy >= 90 ? "bg-risk-healthy" :
                supplier.accuracy >= 70 ? "bg-risk-warning" : "bg-risk-critical"
              )}
              style={{ width: `${supplier.accuracy}%` }}
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {supplier.accuracy}%
          </span>
        </div>
      </div>
    </div>
  );
}
