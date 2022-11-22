//--------Comentar el puerto a no usar------------------------
//DB Local
// export const URL = 'http://localhost:3001';
//RAILWAY
export const URL = 'https://portfolio-production-cba9.up.railway.app/';

console.log(URL.toString() === 'http://localhost:3001' ? "DB" : "RAILWAY");
//----------------------------------------------------------------