export const getAllQuestions = async () => {
  return await fetch('http://localhost:3000/questions', { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } }).then((raw) => raw.json());
};

export const getOneQuestion = async (id) => {
  return await fetch(`http://localhost:3000/question/${id}`, { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } }).then((raw) => raw.json());
};
