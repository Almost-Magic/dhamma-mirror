import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { decisionFlow, angerFlow, anxietyFlow } from '@/content/staticFlows';
import { FlowStep, StaticFlow } from '@/types';

interface Message {
  id: string;
  role: 'mirror' | 'user';
  content: string;
}

const emotionalStates = [
  { id: 'anger', label: 'Anger / Resentment / Frustration', flow: angerFlow },
  { id: 'sadness', label: 'Sadness / Grief / Loss', flow: null },
  { id: 'anxiety', label: 'Anxiety / Fear / Worry', flow: anxietyFlow },
  { id: 'hurt', label: 'Hurt / Betrayed / Let down', flow: null },
  { id: 'overwhelm', label: 'Overwhelmed / Can\'t cope', flow: null },
  { id: 'guilt', label: 'Guilt / Shame / Regret', flow: null },
  { id: 'other', label: 'Something else', flow: null },
];

export default function Mirror() {
  const [searchParams] = useSearchParams();
  const entryType = searchParams.get('entry') || 'general';
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentFlow, setCurrentFlow] = useState<StaticFlow | null>(null);
  const [currentStepId, setCurrentStepId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState('');
  const [showEmotionalSelect, setShowEmotionalSelect] = useState(false);

  // Initialize based on entry type
  useEffect(() => {
    if (entryType === 'decision') {
      startFlow(decisionFlow);
    } else if (entryType === 'emotional') {
      setShowEmotionalSelect(true);
      addMirrorMessage("What's the feeling?");
    } else {
      // General entry
      addMirrorMessage("What brings you here today?\n\nTake your time. There's no rush.");
    }
  }, [entryType]);

  const addMirrorMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'mirror',
      content
    }]);
  };

  const addUserMessage = (content: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      content
    }]);
  };

  const startFlow = (flow: StaticFlow) => {
    setCurrentFlow(flow);
    setCurrentStepId(flow.entryPoint);
    const firstStep = flow.steps[flow.entryPoint];
    if (firstStep) {
      addMirrorMessage(firstStep.content);
    }
  };

  const handleOptionSelect = (optionId: string, nextStepId: string) => {
    // Add user's choice as a message
    const option = currentFlow?.steps[currentStepId!]?.options?.find(o => o.id === optionId);
    if (option) {
      addUserMessage(option.label);
    }

    // Move to next step
    if (nextStepId === 'end') {
      setCurrentStepId(null);
      setCurrentFlow(null);
      return;
    }

    const nextStep = currentFlow?.steps[nextStepId];
    if (nextStep) {
      setCurrentStepId(nextStepId);
      setTimeout(() => {
        addMirrorMessage(nextStep.content);
      }, 500);
    }
  };

  const handleEmotionalSelect = (emotion: typeof emotionalStates[0]) => {
    addUserMessage(emotion.label);
    setShowEmotionalSelect(false);
    
    if (emotion.flow) {
      setTimeout(() => {
        startFlow(emotion.flow!);
      }, 500);
    } else {
      setTimeout(() => {
        addMirrorMessage(`I hear that you're feeling ${emotion.label.toLowerCase().split(' / ')[0]}.\n\nLet's explore this together. Where do you feel this in your body right now?`);
      }, 500);
    }
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    addUserMessage(userInput);
    const input = userInput;
    setUserInput('');

    // Handle input type steps
    const currentStep = currentFlow?.steps[currentStepId!];
    if (currentStep?.type === 'input' && currentStep.next) {
      const nextStep = currentFlow?.steps[currentStep.next as string];
      if (nextStep) {
        setCurrentStepId(currentStep.next as string);
        setTimeout(() => {
          addMirrorMessage(nextStep.content);
        }, 800);
      }
    } else {
      // Free-form response
      setTimeout(() => {
        addMirrorMessage("Thank you for sharing that.\n\nLet me reflect on what you've said...\n\nWhere do you feel this in your body right now?");
      }, 800);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentFlow(null);
    setCurrentStepId(null);
    setShowEmotionalSelect(false);
    addMirrorMessage("What brings you here today?\n\nTake your time. There's no rush.");
  };

  const currentStep = currentFlow?.steps[currentStepId!];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur sticky top-14 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪞</span>
            <span className="font-serif text-lg">The Mirror</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground">
            <RotateCcw className="h-4 w-4 mr-1" />
            Start over
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 container mx-auto max-w-2xl px-4 py-8">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "animate-fade-in",
                message.role === 'user' ? "flex justify-end" : ""
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-5 py-4 whitespace-pre-wrap",
                  message.role === 'mirror'
                    ? "mirror-bubble"
                    : "user-bubble ml-auto"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}

          {/* Emotional state selection */}
          {showEmotionalSelect && (
            <div className="space-y-2 animate-fade-in">
              {emotionalStates.map((emotion) => (
                <Card
                  key={emotion.id}
                  className="p-4 cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-all"
                  onClick={() => handleEmotionalSelect(emotion)}
                >
                  {emotion.label}
                </Card>
              ))}
            </div>
          )}

          {/* Options from current step */}
          {currentStep?.type === 'options' && currentStep.options && (
            <div className="space-y-2 animate-fade-in">
              {currentStep.options.map((option) => (
                <Card
                  key={option.id}
                  className="p-4 cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-all"
                  onClick={() => handleOptionSelect(option.id, option.next)}
                >
                  <p className="font-medium">{option.label}</p>
                  {option.description && (
                    <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                  )}
                </Card>
              ))}
            </div>
          )}

          {/* Reflection ending */}
          {currentStep?.type === 'reflection' && (
            <div className="text-center py-8 animate-fade-in">
              <p className="text-lg text-muted-foreground italic font-serif">
                {currentStep.content}
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="outline" onClick={handleReset}>
                  Start a new session
                </Button>
                <Link to="/vault">
                  <Button variant="outline">
                    Open the Vault
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      {(!currentStep || currentStep.type === 'input' || currentStep.type === 'message') && !showEmotionalSelect && currentStep?.type !== 'reflection' && (
        <div className="border-t border-border bg-background sticky bottom-0">
          <div className="container mx-auto max-w-2xl px-4 py-4">
            <div className="flex gap-3">
              <Textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={currentStep?.type === 'input' ? currentStep.content : "Type your response..."}
                className="min-h-[60px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!userInput.trim()}
                className="px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Your reflections stay on your device. We never see them.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
