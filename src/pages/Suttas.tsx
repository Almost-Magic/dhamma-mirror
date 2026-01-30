import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, ExternalLink } from 'lucide-react';
import { Sutta } from '@/types';

// Sample suttas data
const sampleSuttas: Sutta[] = [
  {
    id: 'mn10',
    title: 'Satipaṭṭhāna Sutta',
    paliTitle: 'Satipaṭṭhānasuttaṃ',
    nikaya: 'MN',
    reference: 'MN 10',
    summary: 'The Foundations of Mindfulness. The Buddha\'s comprehensive guide to the four foundations of mindfulness: body, feelings, mind, and phenomena.',
    themes: ['mindfulness', 'meditation', 'contemplation', 'body', 'feelings'],
    practiceRelevance: 'The foundational text for Vipassana practice. Study section by section.'
  },
  {
    id: 'sn56.11',
    title: 'Dhammacakkappavattana Sutta',
    paliTitle: 'Dhammacakkappavattanasuttaṃ',
    nikaya: 'SN',
    reference: 'SN 56.11',
    summary: 'Setting in Motion the Wheel of the Dhamma. The Buddha\'s first discourse after enlightenment, teaching the Four Noble Truths and the Middle Way.',
    themes: ['four noble truths', 'middle way', 'noble eightfold path', 'first discourse'],
    practiceRelevance: 'The core teaching. Understand dukkha, its origin, its cessation, and the path.'
  },
  {
    id: 'sn22.59',
    title: 'Anattalakkhaṇa Sutta',
    paliTitle: 'Anattalakkhaṇasuttaṃ',
    nikaya: 'SN',
    reference: 'SN 22.59',
    summary: 'The Discourse on the Not-self Characteristic. The Buddha\'s second discourse, explaining that the five aggregates are not self.',
    themes: ['anatta', 'non-self', 'five aggregates', 'liberation'],
    practiceRelevance: 'Contemplate: what is the "self" that suffers? Who observes?'
  },
  {
    id: 'mn118',
    title: 'Ānāpānasati Sutta',
    paliTitle: 'Ānāpānasatisuttaṃ',
    nikaya: 'MN',
    reference: 'MN 118',
    summary: 'Mindfulness of Breathing. A comprehensive guide to breath meditation, showing how it fulfills the four foundations of mindfulness.',
    themes: ['breath', 'mindfulness', 'meditation', 'concentration'],
    practiceRelevance: 'The technique of Anapana. Return to this when concentration wavers.'
  },
  {
    id: 'sn1.8',
    title: 'Mettā Sutta',
    paliTitle: 'Mettāsuttaṃ',
    nikaya: 'KN',
    reference: 'Sn 1.8',
    summary: 'The Discourse on Loving-Kindness. The Buddha\'s teaching on cultivating universal love and goodwill toward all beings.',
    themes: ['metta', 'loving-kindness', 'compassion', 'brahmaviharas'],
    practiceRelevance: 'Share the merits at the end of each sitting. May all beings be happy.'
  },
  {
    id: 'an3.65',
    title: 'Kālāma Sutta',
    paliTitle: 'Kālāmasuttaṃ',
    nikaya: 'AN',
    reference: 'AN 3.65',
    summary: 'The Buddha\'s Charter of Free Inquiry. Don\'t believe based on tradition or authority — investigate and know for yourself.',
    themes: ['inquiry', 'investigation', 'skepticism', 'verification'],
    practiceRelevance: 'Don\'t believe, don\'t disbelieve. Experience directly.'
  },
  {
    id: 'dn22',
    title: 'Mahāsatipaṭṭhāna Sutta',
    paliTitle: 'Mahāsatipaṭṭhānasuttaṃ',
    nikaya: 'DN',
    reference: 'DN 22',
    summary: 'The Great Discourse on the Foundations of Mindfulness. An expanded version of MN 10 with detailed analysis of the Four Noble Truths.',
    themes: ['mindfulness', 'four noble truths', 'meditation', 'comprehensive'],
    practiceRelevance: 'The complete guide. Study over months, not days.'
  },
  {
    id: 'mn20',
    title: 'Vitakkasaṇṭhāna Sutta',
    paliTitle: 'Vitakkasaṇṭhānasuttaṃ',
    nikaya: 'MN',
    reference: 'MN 20',
    summary: 'The Removal of Distracting Thoughts. Five methods for dealing with unwholesome thoughts during meditation.',
    themes: ['thoughts', 'distraction', 'meditation', 'mental training'],
    practiceRelevance: 'When the mind won\'t settle, these five methods help.'
  },
];

export default function Suttas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSutta, setSelectedSutta] = useState<Sutta | null>(null);

  const filteredSuttas = sampleSuttas.filter(sutta => {
    const query = searchQuery.toLowerCase();
    return (
      sutta.title.toLowerCase().includes(query) ||
      sutta.reference.toLowerCase().includes(query) ||
      sutta.summary.toLowerCase().includes(query) ||
      sutta.themes.some(t => t.toLowerCase().includes(query))
    );
  });

  const nikayaLabels: Record<string, string> = {
    DN: 'Dīgha Nikāya',
    MN: 'Majjhima Nikāya',
    SN: 'Saṃyutta Nikāya',
    AN: 'Aṅguttara Nikāya',
    KN: 'Khuddaka Nikāya',
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-foreground mb-2">Sutta Search</h1>
          <p className="text-muted-foreground">
            Search the Buddha's discourses. Over 15,000 suttas from the Pali Canon.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, reference, or topic..."
            className="pl-10"
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredSuttas.map((sutta) => (
            <Card 
              key={sutta.id} 
              className={`p-4 cursor-pointer transition-all hover:border-primary/50 ${selectedSutta?.id === sutta.id ? 'border-primary' : ''}`}
              onClick={() => setSelectedSutta(selectedSutta?.id === sutta.id ? null : sutta)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {sutta.reference}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {nikayaLabels[sutta.nikaya]}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{sutta.title}</h3>
                  {sutta.paliTitle && (
                    <p className="text-sm text-muted-foreground italic mb-2">{sutta.paliTitle}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{sutta.summary}</p>
                  
                  {selectedSutta?.id === sutta.id && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sutta.themes.map((theme) => (
                          <Badge key={theme} variant="outline" className="text-xs">
                            {theme}
                          </Badge>
                        ))}
                      </div>
                      {sutta.practiceRelevance && (
                        <div className="bg-primary/5 rounded-lg p-3 mb-4">
                          <p className="text-sm font-medium text-primary mb-1">Practice Relevance</p>
                          <p className="text-sm text-foreground">{sutta.practiceRelevance}</p>
                        </div>
                      )}
                      <a
                        href={`https://suttacentral.net/${sutta.reference.toLowerCase().replace(' ', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Read on SuttaCentral
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredSuttas.length === 0 && searchQuery && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No suttas found for "{searchQuery}"</p>
            <p className="text-sm mt-2">Try a different search term or browse by theme.</p>
          </div>
        )}

        {/* Attribution */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Sutta content from{' '}
            <a 
              href="https://suttacentral.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SuttaCentral
            </a>
            {' '}under CC BY-NC license.
          </p>
        </div>
      </div>
    </div>
  );
}
