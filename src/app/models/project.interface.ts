export interface Project {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  propertyType: string;
  description?: string;
  availablePlots?: number;
  availablePlotsArray?: number[];
} 