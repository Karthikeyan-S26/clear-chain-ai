import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Database, Bell, Settings2, Brain, Users, Sliders } from "lucide-react";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: string;
}

export function SettingsDialog({ open, onOpenChange, defaultTab = "general" }: SettingsDialogProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Configure your PhantomSync AI preferences and integrations
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general">
              <Settings2 className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="data">
              <Database className="w-4 h-4 mr-2" />
              Data
            </TabsTrigger>
            <TabsTrigger value="ai">
              <Brain className="w-4 h-4 mr-2" />
              AI
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <Sliders className="w-4 h-4 mr-2" />
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">General Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your application preferences
                </p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark theme
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto Refresh</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically refresh data every 5 minutes
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Dashboard Layout</Label>
                  <select className="w-full px-3 py-2 rounded-md border bg-background">
                    <option>Compact</option>
                    <option>Standard</option>
                    <option>Expanded</option>
                  </select>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Notification Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Configure alerts and notifications
                </p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Critical Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts for critical supply chain issues
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Risk Warnings</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about potential risks
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Phantom Detection</Label>
                    <p className="text-sm text-muted-foreground">
                      Alerts when phantom suppliers are detected
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send alerts to your email
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Data Sources</h3>
                <p className="text-sm text-muted-foreground">
                  Manage connected data sources and integrations
                </p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-risk-healthy" />
                      <Label>ERP System Integration</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connected to SAP ERP - Last sync: 2 minutes ago
                  </p>
                </div>

                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-risk-healthy" />
                      <Label>Supply Chain Database</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    PostgreSQL - Active connections: 3
                  </p>
                </div>

                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <Label>IoT Sensors</Label>
                    </div>
                    <Switch />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Configure IoT sensor data streams
                  </p>
                </div>

                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-500" />
                      <Label>External APIs</Label>
                    </div>
                    <Switch />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Third-party API integrations
                  </p>
                </div>

                <Button className="w-full">Add New Data Source</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">AI Configuration</h3>
                <p className="text-sm text-muted-foreground">
                  Configure AI models and prediction settings
                </p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>AI Model</Label>
                  <select className="w-full px-3 py-2 rounded-md border bg-background">
                    <option>PhantomSync AI v2.0 (Recommended)</option>
                    <option>PhantomSync AI v1.5</option>
                    <option>Legacy Model</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Prediction Confidence Threshold: 75%</Label>
                  <input type="range" min="50" max="95" defaultValue="75" className="w-full" />
                  <p className="text-sm text-muted-foreground">
                    Minimum confidence level for AI predictions
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Real-time Analysis</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable continuous AI monitoring
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Phantom Detection</Label>
                    <p className="text-sm text-muted-foreground">
                      AI-powered phantom supplier detection
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Predictive Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Forecast supply chain trends
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">User Management</h3>
                <p className="text-sm text-muted-foreground">
                  Manage team access and permissions
                </p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Admin Users</p>
                      <p className="text-sm text-muted-foreground">Full system access</p>
                    </div>
                    <span className="text-2xl font-bold">3</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Analyst Users</p>
                      <p className="text-sm text-muted-foreground">Read and analyze data</p>
                    </div>
                    <span className="text-2xl font-bold">12</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Viewer Users</p>
                      <p className="text-sm text-muted-foreground">View-only access</p>
                    </div>
                    <span className="text-2xl font-bold">25</span>
                  </div>
                </div>

                <Button className="w-full">Invite New User</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Advanced Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Configure advanced system options
                </p>
              </div>
              <Separator />
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>API Rate Limit</Label>
                  <Input type="number" defaultValue="1000" />
                  <p className="text-sm text-muted-foreground">
                    Maximum API requests per minute
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Data Retention Period</Label>
                  <select className="w-full px-3 py-2 rounded-md border bg-background">
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>180 days</option>
                    <option>1 year</option>
                    <option>Indefinite</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Debug Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable detailed logging
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Performance Monitoring</Label>
                    <p className="text-sm text-muted-foreground">
                      Track system performance metrics
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button variant="destructive" className="w-full">
                    Clear All Cache
                  </Button>
                  <Button variant="outline" className="w-full">
                    Export Configuration
                  </Button>
                  <Button variant="outline" className="w-full">
                    Reset to Defaults
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
