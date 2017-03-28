import { CollectionObject } from './collection-object.model';

export interface Tutor extends CollectionObject{
  userId: string;
  name: string;
  hourly_rating: number;
  language: string;
  classesIds?: string[];
  available_times?: Schedule[];
  lastUpdateDate?: Date;
  times?: number[];
  images?: string[];
}

interface Schedule {
   startDate: Date;
   times: string[];
 } 