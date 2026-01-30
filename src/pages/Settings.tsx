import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings as SettingsIcon, Trash2, Download, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleExportData = () => {
    const data = {
      vault: JSON.parse(localStorage.getItem('dhamma-mirror-vault') || '[]'),
      practice: JSON.parse(localStorage.getItem('dhamma-mirror-practice') || '[]'),
      theme: localStorage.getItem('dhamma-mirror-theme'),
      exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dhamma-mirror-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteAllData = () => {
    localStorage.removeItem('dhamma-mirror-vault');
    localStorage.removeItem('dhamma-mirror-practice');
    setShowDeleteConfirm(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <SettingsIcon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-foreground mb-2">Settings</h1>
        </div>

        {/* Theme */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'light' ? (
                <Sun className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <Label className="font-medium">Theme</Label>
                <p className="text-sm text-muted-foreground">
                  {theme === 'light' ? 'Light mode' : 'Dark mode'}
                </p>
              </div>
            </div>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
          </div>
        </Card>

        {/* Export Data */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Download className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label className="font-medium">Export Data</Label>
                <p className="text-sm text-muted-foreground">
                  Download all your data as JSON
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={handleExportData}>
              Export
            </Button>
          </div>
        </Card>

        {/* Delete Data */}
        <Card className="p-6 border-destructive/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trash2 className="h-5 w-5 text-destructive" />
              <div>
                <Label className="font-medium text-destructive">Delete All Data</Label>
                <p className="text-sm text-muted-foreground">
                  Permanently remove all stored data
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="text-destructive border-destructive/50 hover:bg-destructive/10"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete
            </Button>
          </div>

          {showDeleteConfirm && (
            <div className="mt-4 p-4 bg-destructive/10 rounded-lg animate-fade-in">
              <p className="text-sm text-destructive mb-4">
                Are you sure? This will delete all your vault entries and practice logs. 
                This cannot be undone.
              </p>
              <div className="flex gap-3 justify-end">
                <Button variant="ghost" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={handleDeleteAllData}
                >
                  Yes, delete everything
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Your data is stored locally on your device.</p>
          <p className="mt-1">We never see your reflections.</p>
        </div>
      </div>
    </div>
  );
}
