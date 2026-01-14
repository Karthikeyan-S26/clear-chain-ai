import { cn } from "@/lib/utils";
import { Ghost, Activity, RefreshCw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SettingsDialog } from "./SettingsDialog";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { toast } = useToast();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState("general");

  const handleRefresh = () => {
    toast({
      title: "Refreshing data",
      description: "Fetching latest supply chain updates...",
    });
    // Add actual refresh logic here
  };

  const openSettings = (tab: string = "general") => {
    setSettingsTab(tab);
    setSettingsOpen(true);
  };

  return (
    <>
      <header className={cn("flex items-center justify-between py-6", className)}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                <Ghost className="w-7 h-7" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-risk-healthy animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground glow-text">
                PhantomSync AI
              </h1>
              <p className="text-sm text-muted-foreground">
                Multi-Tier Supply Chain Intelligence
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
            <Activity className="w-4 h-4 text-risk-healthy" />
            <span className="text-sm font-medium text-foreground">System Active</span>
            <div className="w-2 h-2 rounded-full bg-risk-healthy animate-pulse" />
          </div>
          
          <Button variant="outline" size="icon" onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="icon" onClick={() => openSettings("general")}>
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <SettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen}
        defaultTab={settingsTab}
      />
    </>
  );
}
