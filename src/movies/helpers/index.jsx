//check hàm xem có rỗng hay ko
// const isEmptyObject = (obj) => {
//     for(let prop in obj) {
//       if(Object.prototype.hasOwnProperty.call(obj, prop)) {
//         return false;
//       }
//     }
//     return JSON.stringify(obj) === JSON.stringify({});
// }
// export const  helpers = {
//     isEmptyObject
// }
function isEmptyObject(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}
export const helpers = {
  isEmptyObject
}