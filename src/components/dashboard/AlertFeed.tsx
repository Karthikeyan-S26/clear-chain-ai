import { cn } from "@/lib/utils";
import { AlertTriangle, Ghost, Clock, Truck, Zap, Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Alert } from "@/data/mockData";

interface AlertFeedProps {
  alerts: Alert[];
  className?: string;
}

const alertIcons = {
  phantom: Ghost,
  shortage: AlertTriangle,
  delay: Truck,
  disruption: Zap,
};

const severityStyles = {
  healthy: 'border-l-risk-healthy bg-risk-healthy/5',
  warning: 'border-l-risk-warning bg-risk-warning/5',
  critical: 'border-l-risk-critical bg-risk-critical/5',
  phantom: 'border-l-risk-phantom bg-risk-phantom/5',
};

const iconStyles = {
  healthy: 'text-risk-healthy',
  warning: 'text-risk-warning',
  critical: 'text-risk-critical',
  phantom: 'text-risk-phantom',
};

export function AlertFeed({ alerts, className }: AlertFeedProps) {
  return (
    <div className={cn("glass-card p-6 space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Active Alerts</h2>
        </div>
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-risk-critical/20 text-risk-critical">
          {alerts.filter(a => !a.acknowledged).length} unread
        </span>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {alerts.map((alert) => {
          const Icon = alertIcons[alert.type];
          return (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-lg border-l-4 transition-all duration-200",
                severityStyles[alert.severity],
                alert.acknowledged && "opacity-60"
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn("mt-0.5", iconStyles[alert.severity])}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground text-sm">
                      {alert.supplier}
                    </span>
                    <span className="px-1.5 py-0.5 text-xs rounded bg-secondary text-muted-foreground">
                      Tier {alert.tier}
                    </span>
                    {alert.acknowledged && (
                      <Check className="w-4 h-4 text-risk-healthy" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {alert.message}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {alert.timestamp}
                  </div>
                </div>
              </div>
              {!alert.acknowledged && (
                <div className="flex gap-2 mt-3 pl-8">
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    Acknowledge
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    View Details
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
