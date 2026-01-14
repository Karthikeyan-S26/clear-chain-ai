import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { MetricData } from "@/data/mockData";

interface MetricCardProps {
  metric: MetricData;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MetricCard({ metric, icon, className, delay = 0 }: MetricCardProps) {
  const isPositive = metric.change > 0;
  const isNeutral = metric.change === 0;
  
  // For some metrics, positive change is bad (like phantom stock)
  const isBadMetric = metric.label.includes('Phantom') || metric.label.includes('At-Risk') || metric.label.includes('Alert');
  const changeColor = isNeutral 
    ? 'text-muted-foreground' 
    : isBadMetric 
      ? (isPositive ? 'text-risk-critical' : 'text-risk-healthy')
      : (isPositive ? 'text-risk-healthy' : 'text-risk-critical');

  return (
    <div 
      className={cn(
        "glass-card-hover p-6 opacity-0 animate-fade-in-up hover-glow group",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
          {icon}
        </div>
        <div className={cn("flex items-center gap-1 text-sm font-medium transition-all duration-300", changeColor)}>
          {isNeutral ? (
            <Minus className="w-4 h-4" />
          ) : isPositive ? (
            <TrendingUp className="w-4 h-4 group-hover:animate-bounce-subtle" />
          ) : (
            <TrendingDown className="w-4 h-4 group-hover:animate-bounce-subtle" />
          )}
          <span>{Math.abs(metric.change)}{metric.unit === '%' ? '%' : ''}</span>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-3xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:scale-105">
          {metric.value.toLocaleString()}{metric.unit}
        </h3>
        <p className="text-sm text-muted-foreground">{metric.label}</p>
      </div>
    </div>
  );
}
