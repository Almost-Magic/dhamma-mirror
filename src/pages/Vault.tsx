import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Lock, Unlock, Trash2, Clock, Plus } from 'lucide-react';
import { VaultEntry } from '@/types';
import { cn } from '@/lib/utils';

export default function Vault() {
  const [entries, setEntries] = useState<VaultEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [context, setContext] = useState('');
  const [showNewEntry, setShowNewEntry] = useState(false);

  // Load entries from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('dhamma-mirror-vault');
    if (stored) {
      const parsed = JSON.parse(stored);
      setEntries(parsed.map((e: VaultEntry) => ({
        ...e,
        createdAt: new Date(e.createdAt),
        unlocksAt: new Date(e.unlocksAt),
        isUnlocked: new Date(e.unlocksAt) < new Date()
      })));
    }
  }, []);

  // Save entries to localStorage
  useEffect(() => {
    localStorage.setItem('dhamma-mirror-vault', JSON.stringify(entries));
  }, [entries]);

  // Check for unlocked entries every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setEntries(prev => prev.map(entry => ({
        ...entry,
        isUnlocked: new Date(entry.unlocksAt) < new Date()
      })));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleCreateEntry = () => {
    if (!newEntry.trim()) return;

    const now = new Date();
    const unlocksAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours

    const entry: VaultEntry = {
      id: Date.now().toString(),
      content: newEntry,
      createdAt: now,
      unlocksAt,
      isUnlocked: false,
      context: context || undefined
    };

    setEntries(prev => [entry, ...prev]);
    setNewEntry('');
    setContext('');
    setShowNewEntry(false);
  };

  const handleDelete = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const formatTimeRemaining = (unlocksAt: Date) => {
    const now = new Date();
    const diff = unlocksAt.getTime() - now.getTime();
    
    if (diff <= 0) return 'Unlocked';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`;
    }
    return `${minutes}m remaining`;
  };

  const lockedEntries = entries.filter(e => !e.isUnlocked);
  const unlockedEntries = entries.filter(e => e.isUnlocked);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-foreground mb-2">The 24-Hour Vault</h1>
          <p className="text-muted-foreground">
            Write what you want to say. We'll lock it for 24 hours.<br />
            Then you can decide with a clearer mind.
          </p>
        </div>

        {/* New Entry */}
        {!showNewEntry ? (
          <Button 
            onClick={() => setShowNewEntry(true)} 
            className="w-full mb-8"
            variant="outline"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Vault
          </Button>
        ) : (
          <Card className="p-6 mb-8 animate-fade-in">
            <h3 className="font-medium mb-4">What do you want to say?</h3>
            <Textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder="Write what you would say if you acted right now..."
              className="min-h-[150px] mb-4"
            />
            <Textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="(Optional) What's the context? Who is this for?"
              className="min-h-[60px] mb-4"
            />
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setShowNewEntry(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateEntry} disabled={!newEntry.trim()}>
                <Lock className="h-4 w-4 mr-2" />
                Lock for 24 hours
              </Button>
            </div>
          </Card>
        )}

        {/* Locked Entries */}
        {lockedEntries.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              Locked
            </h2>
            <div className="space-y-4">
              {lockedEntries.map((entry) => (
                <Card key={entry.id} className="p-4 bg-muted/30">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="bg-muted rounded p-3 text-muted-foreground italic">
                        Content hidden until unlocked
                      </div>
                      {entry.context && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Context: {entry.context}
                        </p>
                      )}
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center gap-1 text-primary">
                        <Clock className="h-3 w-3" />
                        {formatTimeRemaining(entry.unlocksAt)}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Unlocked Entries */}
        {unlockedEntries.length > 0 && (
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Unlock className="h-4 w-4 text-muted-foreground" />
              Unlocked — Time to Review
            </h2>
            <div className="space-y-4">
              {unlockedEntries.map((entry) => (
                <Card key={entry.id} className="p-4 border-primary/30">
                  <div className="mb-4">
                    <p className="whitespace-pre-wrap">{entry.content}</p>
                    {entry.context && (
                      <p className="text-sm text-muted-foreground mt-2 border-t border-border pt-2">
                        Context: {entry.context}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">
                      Written {entry.createdAt.toLocaleDateString()} at {entry.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(entry.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      24 hours have passed. Do you still want to send this?<br />
                      Read it with fresh eyes. Notice how you feel now.
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {entries.length === 0 && !showNewEntry && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="mb-2">Your vault is empty.</p>
            <p className="text-sm">
              When you're tempted to send something reactive,<br />
              put it here instead. Let the mud settle.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
