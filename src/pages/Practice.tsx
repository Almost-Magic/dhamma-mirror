import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Check, X, Clock, TrendingUp } from 'lucide-react';
import { Hindrance, AwakeningFactor } from '@/types';

const hindrances: { id: Hindrance; label: string; pali: string }[] = [
  { id: 'sensual-desire', label: 'Sensual Desire', pali: 'kāmacchanda' },
  { id: 'ill-will', label: 'Ill-will', pali: 'byāpāda' },
  { id: 'sloth-torpor', label: 'Sloth & Torpor', pali: 'thīna-middha' },
  { id: 'restlessness-worry', label: 'Restlessness & Worry', pali: 'uddhacca-kukkucca' },
  { id: 'doubt', label: 'Doubt', pali: 'vicikicchā' },
];

const awakeningFactors: { id: AwakeningFactor; label: string; pali: string }[] = [
  { id: 'mindfulness', label: 'Mindfulness', pali: 'sati' },
  { id: 'investigation', label: 'Investigation', pali: 'dhamma-vicaya' },
  { id: 'energy', label: 'Energy', pali: 'viriya' },
  { id: 'joy', label: 'Joy', pali: 'pīti' },
  { id: 'tranquility', label: 'Tranquility', pali: 'passaddhi' },
  { id: 'concentration', label: 'Concentration', pali: 'samādhi' },
  { id: 'equanimity', label: 'Equanimity', pali: 'upekkhā' },
];

export default function Practice() {
  const [didSit, setDidSit] = useState<boolean | null>(null);
  const [duration, setDuration] = useState<number>(30);
  const [quality, setQuality] = useState<number>(5);
  const [selectedHindrances, setSelectedHindrances] = useState<Hindrance[]>([]);
  const [selectedFactors, setSelectedFactors] = useState<AwakeningFactor[]>([]);
  const [notes, setNotes] = useState('');
  const [logged, setLogged] = useState(false);

  const toggleHindrance = (h: Hindrance) => {
    setSelectedHindrances(prev =>
      prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h]
    );
  };

  const toggleFactor = (f: AwakeningFactor) => {
    setSelectedFactors(prev =>
      prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
    );
  };

  const handleLog = () => {
    // Save to localStorage
    const logs = JSON.parse(localStorage.getItem('dhamma-mirror-practice') || '[]');
    logs.push({
      date: new Date().toISOString(),
      didSit,
      duration,
      quality,
      hindrances: selectedHindrances,
      awakeningFactors: selectedFactors,
      notes
    });
    localStorage.setItem('dhamma-mirror-practice', JSON.stringify(logs));
    setLogged(true);
  };

  const resetForm = () => {
    setDidSit(null);
    setDuration(30);
    setQuality(5);
    setSelectedHindrances([]);
    setSelectedFactors([]);
    setNotes('');
    setLogged(false);
  };

  if (logged) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="py-16 animate-fade-in">
            <Check className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Practice logged
            </h2>
            <p className="text-muted-foreground mb-8">
              {didSit 
                ? "Well done. Every sitting matters."
                : "Thank you for your honesty. Tomorrow is another day."
              }
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={resetForm}>
                Log another
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-foreground mb-2">Practice Log</h1>
          <p className="text-muted-foreground">
            Did you sit today?
          </p>
        </div>

        {/* Did you sit? */}
        <Card className="p-6 mb-6">
          <h3 className="font-medium mb-4 text-center">Did you sit today?</h3>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              variant={didSit === true ? 'default' : 'outline'}
              onClick={() => setDidSit(true)}
              className="flex-1 max-w-[150px]"
            >
              <Check className="h-5 w-5 mr-2" />
              Yes
            </Button>
            <Button
              size="lg"
              variant={didSit === false ? 'default' : 'outline'}
              onClick={() => setDidSit(false)}
              className="flex-1 max-w-[150px]"
            >
              <X className="h-5 w-5 mr-2" />
              No
            </Button>
          </div>
        </Card>

        {didSit === true && (
          <div className="space-y-6 animate-fade-in">
            {/* Duration */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Duration
                </h3>
                <span className="text-lg font-medium">{duration} min</span>
              </div>
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5 min</span>
                <span>120 min</span>
              </div>
            </Card>

            {/* Quality */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Awareness Quality
                </h3>
                <span className="text-lg font-medium">{quality}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Dull, distracted</span>
                <span>Clear, equanimous</span>
              </div>
            </Card>

            {/* Hindrances */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Which hindrances arose?</h3>
              <div className="flex flex-wrap gap-2">
                {hindrances.map((h) => (
                  <Button
                    key={h.id}
                    variant={selectedHindrances.includes(h.id) ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleHindrance(h.id)}
                    className="text-sm"
                  >
                    {h.label}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Awakening Factors */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Which awakening factors were present?</h3>
              <div className="flex flex-wrap gap-2">
                {awakeningFactors.map((f) => (
                  <Button
                    key={f.id}
                    variant={selectedFactors.includes(f.id) ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleFactor(f.id)}
                    className="text-sm"
                  >
                    {f.label}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Notes */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Notes (optional)</h3>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What arose? What did you notice?"
                className="min-h-[100px]"
              />
            </Card>
          </div>
        )}

        {didSit === false && (
          <Card className="p-6 animate-fade-in">
            <p className="text-center text-muted-foreground mb-4">
              That's okay. Be honest with yourself.<br />
              What got in the way?
            </p>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="(Optional) What prevented you from sitting?"
              className="min-h-[80px]"
            />
          </Card>
        )}

        {/* Submit */}
        {didSit !== null && (
          <div className="mt-8 flex justify-center animate-fade-in">
            <Button size="lg" onClick={handleLog}>
              Log Practice
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
