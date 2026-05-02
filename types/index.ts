export type Locale = 'en' | 'es';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferred_language: string;
  message?: string;
  inquiry_type?: string;
  contacted: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  quote: string;
  location?: string;
  rating: number;
  active: boolean;
  created_at: string;
}

export interface FeaturedListing {
  id: string;
  address: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  photo_url?: string;
  cinc_url: string;
  active: boolean;
  display_order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  language: string;
  published: boolean;
  published_at?: string;
  created_at: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  highlights: string[];
  highlightsEs: string[];
  cinc_url: string;
  image?: string;
}
