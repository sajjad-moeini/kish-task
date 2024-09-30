export const QueryGenerator = (array:string[])=>{
       const queryString = '?' + array.map(id => `id=${id}`).join('&')
       return queryString
}