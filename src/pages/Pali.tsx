import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Languages, Volume2, BookOpen } from 'lucide-react';
import { paliDictionary, searchPaliTerms, getPaliTermsByCategory } from '@/content/paliDictionary';
import { PaliTerm, PaliCategory } from '@/types';

const categoryLabels: Record<PaliCategory, string> = {
  'core-concepts': 'Core Concepts',
  'meditation': 'Meditation',
  'psychology': 'Psychology',
  'ethics': 'Ethics',
  'path': 'The Path',
  'hindrances': 'Hindrances',
  'awakening-factors': 'Awakening Factors',
  'dependent-origination': 'Dependent Origination',
  'liberation': 'Liberation',
  'general': 'General',
};

const categories: PaliCategory[] = [
  'core-concepts',
  'meditation',
  'psychology',
  'ethics',
  'hindrances',
  'awakening-factors',
  'general',
];

export default function Pali() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PaliCategory | 'all'>('all');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = searchQuery
    ? searchPaliTerms(searchQuery)
    : selectedCategory === 'all'
    ? paliDictionary
    : getPaliTermsByCategory(selectedCategory);

  const handleSpeak = (term: PaliTerm) => {
    // Simple pronunciation helper - could be enhanced with audio files
    const utterance = new SpeechSynthesisUtterance(term.pronunciation);
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Languages className="h-12 w-12 text-wisdom mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-foreground mb-2">Pāli Dictionary</h1>
          <p className="text-muted-foreground">
            200+ terms with pronunciation, etymology, and practice relevance.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedCategory('all');
            }}
            placeholder="Search Pāli terms..."
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        {!searchQuery && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="space-y-3">
          {filteredTerms.map((term) => (
            <Card 
              key={term.term} 
              className={`p-4 cursor-pointer transition-all hover:border-primary/50 ${expandedTerm === term.term ? 'border-primary' : ''}`}
              onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground text-lg">{term.term}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(term);
                      }}
                      className="p-1 hover:bg-muted rounded"
                      title="Hear pronunciation"
                    >
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <span className="text-sm text-muted-foreground">({term.pronunciation})</span>
                  </div>
                  <p className="text-foreground">{term.meaning}</p>
                  
                  {expandedTerm === term.term && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in space-y-4">
                      {term.etymology && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Etymology</p>
                          <p className="text-sm">{term.etymology}</p>
                        </div>
                      )}
                      
                      {term.goenkaNote && (
                        <div className="bg-accent/50 rounded-lg p-3">
                          <p className="text-sm font-medium text-accent-foreground mb-1">In the Goenka Tradition</p>
                          <p className="text-sm text-accent-foreground">{term.goenkaNote}</p>
                        </div>
                      )}
                      
                      {term.practiceRelevance && (
                        <div className="bg-primary/5 rounded-lg p-3">
                          <p className="text-sm font-medium text-primary mb-1">Practice Relevance</p>
                          <p className="text-sm text-foreground">{term.practiceRelevance}</p>
                        </div>
                      )}
                      
                      {term.suttaRef && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={`https://suttacentral.net/${term.suttaRef.toLowerCase().replace(' ', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            See in {term.suttaRef}
                          </a>
                        </div>
                      )}
                      
                      {term.related && term.related.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm text-muted-foreground">Related:</span>
                          {term.related.map((related) => (
                            <Badge 
                              key={related} 
                              variant="outline" 
                              className="text-xs cursor-pointer hover:bg-muted"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSearchQuery(related);
                              }}
                            >
                              {related}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Badge variant="secondary" className="text-xs flex-shrink-0">
                  {categoryLabels[term.category]}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && searchQuery && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No terms found for "{searchQuery}"</p>
            <p className="text-sm mt-2">Try a different spelling or browse by category.</p>
          </div>
        )}

        {/* Attribution */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Based on Nyanatiloka's Buddhist Dictionary (public domain) and{' '}
            <a 
              href="https://suttacentral.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SuttaCentral
            </a>
            .
          </p>
          <p className="mt-1">
            Goenka tradition notes are the author's own understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
