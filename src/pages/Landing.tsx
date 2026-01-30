import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  MessageCircle, 
  Lock, 
  Clock, 
  Brain, 
  Heart, 
  BookOpen, 
  Languages,
  Shield,
  Github,
  ArrowRight
} from 'lucide-react';

const entryPaths = [
  {
    id: 'decision',
    label: "I'm about to make a decision",
    description: 'Pause before acting',
    icon: Brain,
  },
  {
    id: 'emotional',
    label: "I'm in a difficult emotional state",
    description: 'Process what you feel',
    icon: Heart,
  },
  {
    id: 'moral',
    label: 'I have a moral dilemma',
    description: 'See your blind spots',
    icon: Clock,
  },
  {
    id: 'reaction',
    label: 'I want to understand my reaction',
    description: 'Why did I react that way?',
    icon: MessageCircle,
  },
];

const features = [
  {
    title: 'Reactive State Detection',
    description: 'Check your body before you act',
    icon: Heart,
  },
  {
    title: 'Decision Clarifier',
    description: 'Diagnostic questions for difficult decisions',
    icon: Brain,
  },
  {
    title: 'The 24-Hour Vault',
    description: 'Write reactive messages; we lock them for 24 hours',
    icon: Lock,
  },
  {
    title: 'Wait Wisdom',
    description: 'Guidance on when NOT to act',
    icon: Clock,
  },
];

const practitionerFeatures = [
  {
    title: '15,000+ Suttas',
    description: 'Natural language search of the Pali Canon',
    icon: BookOpen,
  },
  {
    title: '200+ Pāli Terms',
    description: 'Dictionary with pronunciation and practice relevance',
    icon: Languages,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-6 animate-fade-in">
            A wise friend for<br />difficult moments
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up">
            Before you send that email. Before you make that decision. 
            Before you say something you can't take back.
          </p>

          <Link to="/mirror">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90">
              Ask the Mirror
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <p className="mt-6 text-sm text-muted-foreground">
            Free. Private. No account needed.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="prose-calm text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Sound familiar?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              It's 11pm. You're furious. You're drafting the email in your head. Every word is justified.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Or: You're grieving. Thinking about quitting, moving, ending things. It feels right.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Or: You're overwhelmed. You can't think straight. But you need to decide. <em>Now.</em>
            </p>
            <p className="text-foreground text-lg font-medium">
              The problem isn't that you're wrong. The problem is that you can't see clearly 
              when you're activated.
            </p>
          </div>
        </div>
      </section>

      {/* What Brings You Here Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-10">
            What brings you here?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entryPaths.map((path) => (
              <Link key={path.id} to={`/mirror?entry=${path.id}`}>
                <Card className="flow-card h-full p-6 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <path.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{path.label}</h3>
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-10">
            How it works
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">1</div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Tell it what's happening</h3>
                <p className="text-muted-foreground">Just say what's true. No judgment.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">2</div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Check your body</h3>
                <p className="text-muted-foreground">Chest tight? Jaw clenched? Stomach churning? Your body knows before your mind admits.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">3</div>
              <div>
                <h3 className="font-medium text-foreground mb-1">See more clearly</h3>
                <p className="text-muted-foreground">Through questions — not advice — you'll see what you couldn't see.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-4">
            For Everyone
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            You don't need to be Buddhist. You just need to be human.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <feature.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-4">
            For Vipassana Practitioners
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Built on 2,500 years of wisdom.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practitionerFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <feature.icon className="h-5 w-5 text-wisdom flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <Shield className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            Your reflections are yours alone
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-medium text-foreground">Local-first</p>
              <p className="text-muted-foreground">Your data stays on your device</p>
            </div>
            <div>
              <p className="font-medium text-foreground">No accounts</p>
              <p className="text-muted-foreground">No sign-up required</p>
            </div>
            <div>
              <p className="font-medium text-foreground">No tracking</p>
              <p className="text-muted-foreground">No analytics, no telemetry</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Open source</p>
              <p className="text-muted-foreground">Verify everything yourself</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            Ready to see more clearly?
          </h2>
          
          <Link to="/mirror">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 mb-8">
              Ask the Mirror
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <a 
              href="https://github.com/Almost-Magic/dhamma-mirror" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <a 
              href="https://www.dhamma.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Learn Vipassana
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              Sabbē sattā sukhī hontu — May all beings be happy
            </p>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/about#attribution" className="hover:text-foreground transition-colors">Attribution</Link>
              <a 
                href="https://github.com/Almost-Magic/dhamma-mirror" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
