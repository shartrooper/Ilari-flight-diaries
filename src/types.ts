/*Enums allow a developer to define a set of named constants. 
Using enums can make it easier to document intent, or create a set of distinct cases. 
TypeScript provides both numeric and string-based enums.
*/

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
}


export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
/*Omit<Type, Keys> Constructs a type by picking all properties from Type and then removing Keys.*/
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;