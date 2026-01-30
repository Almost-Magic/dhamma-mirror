import { Phone, ExternalLink } from 'lucide-react';
import { defaultResources } from '@/content/crisisResources';

export function CrisisBar() {
  return (
    <div className="bg-muted/50 border-b border-border py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="hidden sm:inline">In crisis?</span>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {defaultResources.slice(0, 2).map((resource) => (
            <a
              key={resource.name}
              href={`tel:${resource.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span className="font-medium">{resource.name}</span>
              <span>{resource.phone}</span>
            </a>
          ))}
          <a
            href="https://www.iasp.info/resources/Crisis_Centres/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <span>More resources</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
