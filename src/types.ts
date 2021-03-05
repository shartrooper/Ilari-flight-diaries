export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

/*Omit<Type, Keys> Constructs a type by picking all properties from Type and then removing Keys.*/
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;