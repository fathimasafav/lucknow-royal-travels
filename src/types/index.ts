export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  location?: string;
  price?: string;
  duration?: string;
  rating?: number;
  reviewsCount?: number;
  image: string;
  gallery?: string[];
  category?: string;
  wide?: boolean;
  description?: string;
  overview?: string;
  highlights?: string[];
  included?: string[];
  excluded?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category?: string;
  date?: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  gallery?: string[];
  snippet?: string;
  content?: string[];
  tags?: string[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: 'visa' | 'recruitment' | 'attestation' | 'ticketing' | 'tour';
  categoryLabel: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  iconName?: string;
  features?: string[];
  requirements?: string[];
  popular?: boolean;
  featured?: boolean;
}

