import { ICategory } from "./ICategory";

export interface IProgram {
  id: number;
  name: string;
  description: string;
  email: string;
  programimage: string;
  programcategory: ICategory;
}
