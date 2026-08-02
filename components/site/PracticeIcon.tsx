import {
  Building2,
  Scale,
  Shield,
  HeartHandshake,
  Home,
  Lightbulb,
  Calculator,
  Handshake,
  Award,
  Users,
  Clock,
  ShieldCheck,
  Target,
  Layers,
  Globe,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Scale,
  Shield,
  HeartHandshake,
  Home,
  Lightbulb,
  Calculator,
  Handshake,
  Award,
  Users,
  Clock,
  ShieldCheck,
  Target,
  Layers,
  Globe,
  MessageSquare,
};

export function PracticeIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Scale;
  return <Icon className={className} />;
}
