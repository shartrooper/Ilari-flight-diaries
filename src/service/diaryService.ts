//import diaryData from '../../data/diaries';
import diaries from '../../data/diaries';
import { NonSensitiveDiaryEntry, NewDiaryEntry, DiaryEntry } from '../types';



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


const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  return entry;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {

  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  findById,
  addDiary
};