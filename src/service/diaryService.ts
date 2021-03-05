//import diaryData from '../../data/diaries';
import diaries from '../../data/diaries';
import { NonSensitiveDiaryEntry, DiaryEntry } from '../types';



/*Type assertion 'as', source: https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions  */
//const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};


const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries
};