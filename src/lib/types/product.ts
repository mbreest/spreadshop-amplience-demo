export interface Product {
  id: string;
  name: string;
  description: string;
  defaultViewId: string;
  defaultAppearanceId: string;
  sizes: string[];
  views: string[];
  colors: Color[];
}

export interface Color {
  id: string;
  name: string;
  hex: string;
  texture: boolean;
}
