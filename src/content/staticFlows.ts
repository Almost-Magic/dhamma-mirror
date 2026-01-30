import { StaticFlow } from '@/types';

export const decisionFlow: StaticFlow = {
  id: 'decision',
  name: 'Decision Clarifier',
  description: 'Diagnostic questions for pending decisions',
  entryPoint: 'intro',
  steps: {
    intro: {
      id: 'intro',
      type: 'message',
      content: "Before we explore the decision, let me ask about your state. How are you feeling in your body right now?",
      next: 'body-check'
    },
    'body-check': {
      id: 'body-check',
      type: 'options',
      content: 'Where do you feel this decision in your body?',
      options: [
        { id: 'tight', label: 'Tight, tense, activated', next: 'activated' },
        { id: 'heavy', label: 'Heavy, tired, drained', next: 'low-energy' },
        { id: 'churning', label: 'Churning, unsettled, anxious', next: 'activated' },
        { id: 'calm', label: 'Calm, clear, grounded', next: 'grounded' },
        { id: 'mixed', label: "I'm not sure / mixed", next: 'explore-mixed' }
      ]
    },
    activated: {
      id: 'activated',
      type: 'message',
      content: "It sounds like you're in an activated state.\n\nWhen we're activated — tight, churning, racing — our judgment is often shaped by the emotion itself. The Buddha taught that decisions made in this state often lead to regret.\n\nWould you like to:",
      next: 'activated-choice'
    },
    'activated-choice': {
      id: 'activated-choice',
      type: 'options',
      content: '',
      options: [
        { id: 'process', label: 'Process the feeling first', description: '(then return to the decision)', next: 'process-feeling' },
        { id: 'continue', label: 'Continue with awareness', description: '(knowing my state may be influencing my perception)', next: 'decision-explore' },
        { id: 'wait', label: 'Wait until I\'m calmer', description: '(the mud needs to settle)', next: 'wait-wisdom' }
      ]
    },
    grounded: {
      id: 'grounded',
      type: 'message',
      content: "That's good. A calm body makes clearer decisions.\n\nLet's explore the decision itself.",
      next: 'decision-explore'
    },
    'low-energy': {
      id: 'low-energy',
      type: 'message',
      content: "Heaviness and tiredness can also cloud judgment — though differently than agitation.\n\nSometimes we want to decide just to end the discomfort of carrying the question.",
      next: 'decision-explore'
    },
    'explore-mixed': {
      id: 'explore-mixed',
      type: 'message',
      content: "That's honest. Most difficult moments feel mixed.\n\nLet's proceed gently and notice what arises.",
      next: 'decision-explore'
    },
    'process-feeling': {
      id: 'process-feeling',
      type: 'message',
      content: "Let's pause on the decision and attend to what's happening in your body.\n\nThat tightness, that churning — it's information. Your body is telling you something matters here.\n\nClose your eyes if comfortable. Breathe. Just observe the sensation without trying to change it.\n\nWhat do you notice?",
      next: 'feeling-input'
    },
    'feeling-input': {
      id: 'feeling-input',
      type: 'input',
      content: 'Describe what you notice in your body...',
      next: 'feeling-response'
    },
    'feeling-response': {
      id: 'feeling-response',
      type: 'message',
      content: "Thank you for observing.\n\nSensations are always changing — even intense ones. This is anicca. It will pass.\n\nWhen you feel ready, we can return to the decision. Or simply sit with what is.",
      next: 'end'
    },
    'decision-explore': {
      id: 'decision-explore',
      type: 'message',
      content: "What's the decision you're facing?",
      next: 'decision-input'
    },
    'decision-input': {
      id: 'decision-input',
      type: 'input',
      content: 'Describe the decision...',
      next: 'urgency-check'
    },
    'urgency-check': {
      id: 'urgency-check',
      type: 'options',
      content: 'How soon do you feel you need to decide?',
      options: [
        { id: 'now', label: 'Right now / Today', next: 'urgency-question' },
        { id: 'days', label: 'In the next few days', next: 'time-question' },
        { id: 'weeks', label: 'Weeks or longer', next: 'time-question' },
        { id: 'unsure', label: "I'm not sure", next: 'urgency-question' }
      ]
    },
    'urgency-question': {
      id: 'urgency-question',
      type: 'message',
      content: "I notice the sense of urgency.\n\nLet me ask: What happens if you don't decide today?\n\nIs the urgency coming from the situation? Or from your state?",
      next: 'perspective-questions'
    },
    'time-question': {
      id: 'time-question',
      type: 'message',
      content: "Good. Having time helps.\n\nThe mud needs time to settle before you can see clearly.",
      next: 'perspective-questions'
    },
    'perspective-questions': {
      id: 'perspective-questions',
      type: 'message',
      content: "Let me ask some perspective questions:\n\n• If someone who loved you but had no stake in this decision watched you, what might they notice?\n\n• What's the version of this you're not telling yourself?\n\n• Six months from now, looking back at this moment — what do you hope you'll have done?",
      next: 'reflection-input'
    },
    'reflection-input': {
      id: 'reflection-input',
      type: 'input',
      content: 'Take your time. What comes up?',
      next: 'closing'
    },
    'wait-wisdom': {
      id: 'wait-wisdom',
      type: 'message',
      content: "That's wise.\n\nThe suttas teach: When the mind is agitated, it's like muddy water. You can't see the bottom clearly. If you wait, without stirring, the mud settles. Then you can see.\n\nYou don't have to decide right now. Come back when you're ready.",
      next: 'end'
    },
    closing: {
      id: 'closing',
      type: 'message',
      content: "You've looked at something difficult today. That takes courage.\n\nIf you're still not sure what to do, that's okay. Let the mud settle.\n\nCome back when you're ready.",
      next: 'end'
    },
    end: {
      id: 'end',
      type: 'reflection',
      content: 'May you see clearly. May you decide from wisdom, not reaction.'
    }
  }
};

export const angerFlow: StaticFlow = {
  id: 'anger',
  name: 'Working with Anger',
  description: 'Processing anger, resentment, and frustration',
  entryPoint: 'intro',
  steps: {
    intro: {
      id: 'intro',
      type: 'message',
      content: "Anger is telling you something matters. Let's explore what.\n\nFirst: Where do you feel the anger in your body?",
      next: 'body-location'
    },
    'body-location': {
      id: 'body-location',
      type: 'options',
      content: '',
      options: [
        { id: 'chest', label: 'Chest — tight, hot', next: 'acknowledge' },
        { id: 'jaw', label: 'Jaw — clenched, tight', next: 'acknowledge' },
        { id: 'stomach', label: 'Stomach — churning, knotted', next: 'acknowledge' },
        { id: 'hands', label: 'Hands — tense, fists', next: 'acknowledge' },
        { id: 'other', label: 'Somewhere else', next: 'acknowledge' }
      ]
    },
    acknowledge: {
      id: 'acknowledge',
      type: 'message',
      content: "That sensation is information. Your body is responding to something.\n\nAnger often masks another feeling underneath — fear, hurt, or helplessness.\n\nLet's look.",
      next: 'what-happened'
    },
    'what-happened': {
      id: 'what-happened',
      type: 'input',
      content: 'What happened? Who or what triggered this?',
      next: 'apology-question'
    },
    'apology-question': {
      id: 'apology-question',
      type: 'message',
      content: "Imagine the person apologized — really apologized, meaning it.\n\nWhat happens in your body when you imagine that?",
      next: 'apology-options'
    },
    'apology-options': {
      id: 'apology-options',
      type: 'options',
      content: '',
      options: [
        { id: 'relief', label: 'Relief — I would feel better', next: 'hurt-underneath' },
        { id: 'not-enough', label: "Not enough — I'd still be angry", next: 'deeper-question' },
        { id: 'skeptical', label: "I wouldn't believe them", next: 'trust-broken' },
        { id: 'confused', label: "I'm not sure", next: 'explore-more' }
      ]
    },
    'hurt-underneath': {
      id: 'hurt-underneath',
      type: 'message',
      content: "If an apology would help, the anger may be covering hurt.\n\nYou wanted something from them — acknowledgment, respect, care — and you didn't get it.\n\nThe anger is the protector. The hurt is what needs attention.",
      next: 'what-wanted'
    },
    'deeper-question': {
      id: 'deeper-question',
      type: 'message',
      content: "If an apology isn't enough, ask yourself:\n\nWhat would be enough?\n\nSometimes we want them to suffer. Sometimes we want justice. Sometimes we want to unsee what we saw.\n\nWhat do you really want here?",
      next: 'what-wanted'
    },
    'trust-broken': {
      id: 'trust-broken',
      type: 'message',
      content: "When trust is broken, apologies feel hollow.\n\nThe anger is protecting you from being hurt again.\n\nBut carrying anger is exhausting. It's like drinking poison and waiting for them to die.",
      next: 'what-wanted'
    },
    'explore-more': {
      id: 'explore-more',
      type: 'message',
      content: "That's honest. Anger is complex.\n\nSit with the sensation for a moment. Don't try to figure it out — just observe.\n\nWhat do you notice?",
      next: 'what-wanted'
    },
    'what-wanted': {
      id: 'what-wanted',
      type: 'input',
      content: 'What did you want from them that you didn\'t get?',
      next: 'action-check'
    },
    'action-check': {
      id: 'action-check',
      type: 'message',
      content: "Now the question: Are you about to do something?\n\nSend an email? Say something? Make a decision?",
      next: 'action-options'
    },
    'action-options': {
      id: 'action-options',
      type: 'options',
      content: '',
      options: [
        { id: 'yes', label: "Yes, I'm about to act", next: 'wait-wisdom' },
        { id: 'no', label: 'No, just processing', next: 'closing' },
        { id: 'unsure', label: "I'm not sure", next: 'wait-wisdom' }
      ]
    },
    'wait-wisdom': {
      id: 'wait-wisdom',
      type: 'message',
      content: "Before you act, consider:\n\n• If you act now, while angry, will you regret it tomorrow?\n\n• What happens if you wait 24 hours?\n\n• Is the urgency to act coming from wisdom, or from the anger wanting expression?\n\nThe mud needs time to settle.",
      next: 'vault-offer'
    },
    'vault-offer': {
      id: 'vault-offer',
      type: 'message',
      content: "If you want to write what you'd say — get it out of your system — you can put it in the Vault.\n\nIt will be locked for 24 hours. Then you can decide if you still want to send it.",
      next: 'closing'
    },
    closing: {
      id: 'closing',
      type: 'message',
      content: "Anger is energy. It can burn you, or you can use it wisely.\n\nThe first step is seeing it clearly. You've done that today.\n\nMay the anger transform into clarity.",
      next: 'end'
    },
    end: {
      id: 'end',
      type: 'reflection',
      content: 'Observe the sensation. Let it be. It will pass. This is anicca.'
    }
  }
};

export const anxietyFlow: StaticFlow = {
  id: 'anxiety',
  name: 'Working with Anxiety',
  description: 'Processing fear, worry, and uncertainty',
  entryPoint: 'intro',
  steps: {
    intro: {
      id: 'intro',
      type: 'message',
      content: "Anxiety lives in the future — in what might happen.\n\nBut your body is here, now.\n\nLet's start there. Where do you feel the anxiety in your body?",
      next: 'body-check'
    },
    'body-check': {
      id: 'body-check',
      type: 'options',
      content: '',
      options: [
        { id: 'chest', label: 'Chest — tight, constricted', next: 'acknowledge' },
        { id: 'stomach', label: 'Stomach — churning, unsettled', next: 'acknowledge' },
        { id: 'throat', label: 'Throat — tight, hard to breathe', next: 'acknowledge' },
        { id: 'racing', label: 'Mind — racing, spinning', next: 'acknowledge' },
        { id: 'other', label: 'Somewhere else', next: 'acknowledge' }
      ]
    },
    acknowledge: {
      id: 'acknowledge',
      type: 'message',
      content: "That sensation is real. It's here now.\n\nBut notice: the sensation is happening now. The fear is about the future.\n\nWhat are you afraid might happen?",
      next: 'fear-input'
    },
    'fear-input': {
      id: 'fear-input',
      type: 'input',
      content: 'What are you worried about?',
      next: 'worst-case'
    },
    'worst-case': {
      id: 'worst-case',
      type: 'message',
      content: "Let me ask directly:\n\nWhat's the worst that could happen?\n\nNot the realistic worst — the fear's worst. The one your mind keeps circling around.",
      next: 'worst-input'
    },
    'worst-input': {
      id: 'worst-input',
      type: 'input',
      content: 'The worst that could happen is...',
      next: 'survive-question'
    },
    'survive-question': {
      id: 'survive-question',
      type: 'message',
      content: "If that worst thing happened... would you survive?\n\nNot \"would it be okay\" — would you physically survive it?",
      next: 'survive-options'
    },
    'survive-options': {
      id: 'survive-options',
      type: 'options',
      content: '',
      options: [
        { id: 'yes', label: 'Yes, I would survive', next: 'perspective' },
        { id: 'maybe', label: "It would be very hard", next: 'hard-things' },
        { id: 'serious', label: "This is a serious threat", next: 'serious-response' }
      ]
    },
    perspective: {
      id: 'perspective',
      type: 'message',
      content: "You would survive.\n\nThe anxiety tells you this is life or death. But it's not.\n\nYou've survived difficult things before. You would survive this too.\n\nWhat's the most realistic outcome?",
      next: 'realistic-input'
    },
    'hard-things': {
      id: 'hard-things',
      type: 'message',
      content: "Hard things happen. They do.\n\nBut right now, in this moment, you're okay. The fear is about a possible future — not what's happening now.\n\nBreathing in, you're okay. Breathing out, you're here.",
      next: 'grounding'
    },
    'serious-response': {
      id: 'serious-response',
      type: 'message',
      content: "If you're facing a serious threat, you need more than reflection — you need support.\n\nIs there someone you trust you can talk to? A friend, family member, or professional?\n\nYou don't have to face this alone.",
      next: 'closing'
    },
    'realistic-input': {
      id: 'realistic-input',
      type: 'input',
      content: 'What\'s actually most likely to happen?',
      next: 'grounding'
    },
    grounding: {
      id: 'grounding',
      type: 'message',
      content: "Right now, let's ground.\n\nFeel your feet on the floor.\nFeel your hands — touch them together.\nTake three slow breaths.\n\nThe mind races into the future. The body is always here.",
      next: 'closing'
    },
    closing: {
      id: 'closing',
      type: 'message',
      content: "Anxiety is the mind trying to control what can't be controlled.\n\nThe antidote is presence. Being here, now, with what is.\n\nCome back to this moment. It's the only one that's real.",
      next: 'end'
    },
    end: {
      id: 'end',
      type: 'reflection',
      content: 'Breathing in, I am here. Breathing out, I am okay. This moment is enough.'
    }
  }
};

export const entryFlow: StaticFlow = {
  id: 'entry',
  name: 'Entry Point',
  description: 'Initial landing flow',
  entryPoint: 'welcome',
  steps: {
    welcome: {
      id: 'welcome',
      type: 'message',
      content: "What brings you here?",
      next: 'paths'
    },
    paths: {
      id: 'paths',
      type: 'options',
      content: '',
      options: [
        { id: 'decision', label: "I'm about to make a decision", next: 'decision-flow' },
        { id: 'emotional', label: "I'm in a difficult emotional state", next: 'emotional-flow' },
        { id: 'moral', label: 'I have a moral dilemma', next: 'moral-flow' },
        { id: 'reaction', label: 'I want to understand my reaction', next: 'reaction-flow' },
        { id: 'practice', label: 'I need help with my practice', next: 'practice-flow' }
      ]
    },
    'decision-flow': {
      id: 'decision-flow',
      type: 'message',
      content: '[Redirects to Decision Flow]'
    },
    'emotional-flow': {
      id: 'emotional-flow',
      type: 'message',
      content: '[Redirects to Emotional State Selection]'
    },
    'moral-flow': {
      id: 'moral-flow',
      type: 'message',
      content: '[Redirects to Moral Dilemma Flow]'
    },
    'reaction-flow': {
      id: 'reaction-flow',
      type: 'message',
      content: '[Redirects to Reaction Analyzer Flow]'
    },
    'practice-flow': {
      id: 'practice-flow',
      type: 'message',
      content: '[Redirects to Practice Support]'
    }
  }
};

export const allFlows: Record<string, StaticFlow> = {
  entry: entryFlow,
  decision: decisionFlow,
  anger: angerFlow,
  anxiety: anxietyFlow,
};

export const getFlow = (flowId: string): StaticFlow | undefined => {
  return allFlows[flowId];
};
