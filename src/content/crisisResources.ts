export interface CrisisResource {
  name: string;
  phone: string;
  description?: string;
  country: string;
  website?: string;
}

export const crisisResources: CrisisResource[] = [
  // Australia (Default)
  {
    name: 'Lifeline',
    phone: '13 11 14',
    description: '24/7 crisis support and suicide prevention',
    country: 'AU',
    website: 'https://www.lifeline.org.au'
  },
  {
    name: 'Beyond Blue',
    phone: '1300 22 4636',
    description: 'Depression and anxiety support',
    country: 'AU',
    website: 'https://www.beyondblue.org.au'
  },
  {
    name: 'Suicide Call Back Service',
    phone: '1300 659 467',
    description: '24/7 professional phone and video counseling',
    country: 'AU',
    website: 'https://www.suicidecallbackservice.org.au'
  },
  // USA
  {
    name: 'National Suicide Prevention Lifeline',
    phone: '988',
    description: '24/7 free and confidential support',
    country: 'US',
    website: 'https://988lifeline.org'
  },
  {
    name: 'Crisis Text Line',
    phone: 'Text HOME to 741741',
    description: 'Free 24/7 support via text',
    country: 'US',
    website: 'https://www.crisistextline.org'
  },
  // UK
  {
    name: 'Samaritans',
    phone: '116 123',
    description: '24/7 emotional support',
    country: 'UK',
    website: 'https://www.samaritans.org'
  },
  // International
  {
    name: 'International Association for Suicide Prevention',
    phone: 'See website for local numbers',
    description: 'Directory of crisis centers worldwide',
    country: 'International',
    website: 'https://www.iasp.info/resources/Crisis_Centres/'
  }
];

export const getResourcesByCountry = (country: string): CrisisResource[] => {
  return crisisResources.filter(r => r.country === country || r.country === 'International');
};

export const defaultResources = crisisResources.filter(r => r.country === 'AU');

export const crisisDisclaimer = `
Dhamma Mirror is not a crisis service. If you are having thoughts of self-harm or suicide, please reach out to professional support immediately.

You deserve human support. Please reach out.
`;
