import { Card } from '@/components/ui/card';
import { 
  Info, 
  Heart, 
  BookOpen, 
  Users, 
  ExternalLink, 
  Github,
  Shield,
  Scale
} from 'lucide-react';
import { crisisResources } from '@/content/crisisResources';

export default function About() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Info className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-foreground mb-2">About Dhamma Mirror</h1>
          <p className="text-muted-foreground">
            A wise friend for difficult moments
          </p>
        </div>

        {/* What is this */}
        <section className="mb-12">
          <h2 className="text-xl font-serif text-foreground mb-4">What is this?</h2>
          <div className="prose-calm">
            <p className="text-muted-foreground">
              Dhamma Mirror is a free, open-source tool that helps you see clearly when you're 
              angry, sad, overwhelmed, or confused.
            </p>
            <p className="text-muted-foreground mt-4">
              It doesn't give advice. It asks questions. Through questions — not answers — 
              you see what you couldn't see alone.
            </p>
          </div>
        </section>

        {/* What it is NOT */}
        <section className="mb-12">
          <h2 className="text-xl font-serif text-foreground mb-4">What this is NOT</h2>
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Not therapy</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're struggling with mental health, please see a professional. 
                    We provide resources, but we are not treatment.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Not a guru</h3>
                  <p className="text-sm text-muted-foreground">
                    We don't give answers. We ask questions. The wisdom is in you. 
                    We just help you see it.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Not a meditation teacher</h3>
                  <p className="text-sm text-muted-foreground">
                    For technique instruction, attend a course. We recommend{' '}
                    <a 
                      href="https://www.dhamma.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Dhamma.org
                    </a>
                    {' '}for the Goenka tradition.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Crisis Resources */}
        <section className="mb-12" id="crisis">
          <h2 className="text-xl font-serif text-foreground mb-4">Crisis Resources</h2>
          <Card className="p-6 border-destructive/30 bg-destructive/5">
            <p className="text-sm text-muted-foreground mb-4">
              If you're having thoughts of self-harm, please reach out immediately:
            </p>
            <div className="space-y-3">
              {crisisResources.slice(0, 4).map((resource) => (
                <div key={resource.name} className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="font-medium">{resource.name}</p>
                    <p className="text-sm text-muted-foreground">{resource.phone}</p>
                  </div>
                  {resource.website && (
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* The Foundation */}
        <section className="mb-12">
          <h2 className="text-xl font-serif text-foreground mb-4">The Foundation</h2>
          <div className="prose-calm">
            <p className="text-muted-foreground">
              Dhamma Mirror is grounded in the Buddha's teaching — specifically the Vipassana 
              tradition as taught by S.N. Goenka in the lineage of Sayagyi U Ba Khin.
            </p>
            <p className="text-muted-foreground mt-4">
              But you don't need to be Buddhist to use it. You just need to be human.
            </p>
          </div>
        </section>

        {/* Attribution */}
        <section className="mb-12" id="attribution">
          <h2 className="text-xl font-serif text-foreground mb-4">Attribution</h2>
          <div className="space-y-4 text-sm">
            <Card className="p-4">
              <h3 className="font-medium mb-2">Sutta Content</h3>
              <p className="text-muted-foreground">
                From{' '}
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
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Pāli Dictionary</h3>
              <p className="text-muted-foreground">
                Based on Nyanatiloka's Buddhist Dictionary (public domain) and the 
                PTS Dictionary (public domain).
              </p>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-2">Goenka Tradition Notes</h3>
              <p className="text-muted-foreground">
                Notes labeled "In the Goenka Tradition" are the author's own words, 
                based on personal experience. Not official VRI content.
              </p>
            </Card>
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-12">
          <h2 className="text-xl font-serif text-foreground mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy
          </h2>
          <Card className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Local-first:</strong> Your data stays on your device</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>No accounts:</strong> No sign-up required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>No tracking:</strong> No analytics, no telemetry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>No ads:</strong> Ever</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Open source:</strong> Verify everything yourself</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* License */}
        <section className="mb-12">
          <h2 className="text-xl font-serif text-foreground mb-4 flex items-center gap-2">
            <Scale className="h-5 w-5" />
            License
          </h2>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Code:</strong> MIT License
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Dictionary Content:</strong> CC BY-NC (Non-commercial use)
            </p>
          </Card>
        </section>

        {/* Contribute */}
        <section className="mb-12">
          <h2 className="text-xl font-serif text-foreground mb-4">Contribute</h2>
          <Card className="p-6">
            <p className="text-muted-foreground mb-4">
              Dhamma Mirror is open source. We welcome contributions.
            </p>
            <a
              href="https://github.com/Almost-Magic/dhamma-mirror"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </Card>
        </section>

        {/* Closing */}
        <div className="text-center text-muted-foreground italic font-serif py-8 border-t border-border">
          <p>Sabbē sattā sukhī hontu</p>
          <p className="text-sm mt-1">May all beings be happy</p>
        </div>
      </div>
    </div>
  );
}
