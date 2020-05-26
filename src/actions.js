export const inc = () => {
  return  { type: 'INC' };
 };
 // или так
 export const dec = () => ({ type: 'DEC' });
 export const rnd = (payload) => ({ type: 'RND', payload });