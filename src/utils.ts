/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { NewDiaryEntry, Weather, Visibility } from './types';

/* typeGuards : https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards  */
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String; //to make absolutely sure It's a string
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any): param is Weather => {
    return Object.values(Weather).includes(param);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
    return Object.values(Visibility).includes(param);
};

const parseComment = (comment: unknown): string => {
    if (!comment || !isString(comment)) {
        throw new Error('Incorrect or missing comment');
    }

    return comment;
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseWeather = (weather: unknown): Weather => {
    if (!weather || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather)
    }
    return weather;
};

const parseVisibility = (visibility: unknown): Visibility => {
    if (!visibility || !isVisibility(visibility)) {
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }
    return visibility;
};

type Fields = { comment: unknown, date: unknown, weather: unknown, visibility: unknown };

const toNewDiaryEntry = ({ comment, date, weather, visibility }: Fields): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(comment),
        date: parseDate(date),
        weather: parseWeather(weather),
        visibility: parseVisibility(visibility)
    };

    return newEntry;
};

export default toNewDiaryEntry;