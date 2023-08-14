export class Todo {
  constructor(public text: string, public done: boolean, public id: number) {}
}

// export interface ITodo {
//   text: string;
//   done: boolean;
// }

// const t = new Todo("Lorem", false); // Använd om du behöver skapa egna objekt
// const it: ITodo = { text: "ipsum", done: false };  // Använd om du får objekt
