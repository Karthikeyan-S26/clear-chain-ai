import { cn } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import type { InventoryTrend } from "@/data/mockData";

interface InventoryChartProps {
  data: InventoryTrend[];
  className?: string;
}

export function InventoryChart({ data, className }: InventoryChartProps) {
  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Inventory Trend Analysis</h2>
        <p className="text-sm text-muted-foreground">
          Reported vs Predicted vs Actual inventory levels
        </p>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="reportedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              vertical={false}
            />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => (
                <span style={{ color: 'hsl(var(--muted-foreground))', fontSize: '12px' }}>
                  {value}
                </span>
              )}
            />
            <Area
              type="monotone"
              dataKey="reported"
              name="Reported"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              fill="url(#reportedGradient)"
            />
            <Area
              type="monotone"
              dataKey="predicted"
              name="AI Predicted"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              fill="url(#predictedGradient)"
            />
            <Area
              type="monotone"
              dataKey="actual"
              name="Actual"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              fill="url(#actualGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-3" />
          <span className="text-xs text-muted-foreground">Phantom Gap</span>
        </div>
        <div className="text-sm font-medium text-risk-phantom">
          ~6,500 units unaccounted
        </div>
      </div>
    </div>
  );
}
