// Database-backed curriculum data functions
// This replaces the static curriculum-data.ts functions with database queries

import { getAllGrades, getGradeByNumber, getSubjectByIds, getTopicByIds } from './db-operations';
import { Grade, Subject, Topic } from './curriculum-data';

export function getCurriculumData(): Grade[] {
  return getAllGrades();
}

export function getGradeData(grade: number): Grade | undefined {
  const gradeData = getGradeByNumber(grade);
  return gradeData || undefined;
}

export function getSubjectData(grade: number, subjectId: string): Subject | undefined {
  const subject = getSubjectByIds(grade, subjectId);
  return subject || undefined;
}

export function getTopicData(grade: number, subjectId: string, topicId: string): Topic | undefined {
  const topic = getTopicByIds(grade, subjectId, topicId);
  return topic || undefined;
}
