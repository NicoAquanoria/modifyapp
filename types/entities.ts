// Core entity definitions for the Modify app

export interface User {
  id: string;
  username: string;
  email: string;
  profile_picture: string; // GCP URL
  mobile_number: string;
  date_of_birth: Date;
  oauth_provider?: 'google';
}

export interface Garment {
  id: string;
  garment_name: string;
  color: string;
  size: string;
  season: string;
  fit: string;
  occasion: string;
  brand: string;
  material: string;
  style: string;
  category: 'top' | 'bottom' | 'shoes' | 'accessory' | string;
  is_favorite: boolean;
}

export interface Wardrobe {
  id: string;
  wardrobe_name: string;
  user_id: string;
  garments: string[]; // Garment IDs
  looks: string[]; // Look IDs
}

export interface Look {
  id: string;
  look_name: string;
  garments: Record<string, string>; // category to garment ID mapping
}

export interface UserSelfie {
  id: string;
  user_id: string;
  image_url: string; // GCP URL
} 