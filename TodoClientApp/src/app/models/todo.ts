export interface Todo {
    id : number;
    content : string;
    lastEditDate: Date;
    title: string;
    priority: Priority
}

export enum Priority {
    HIGH,
    MEDIUM,
    LOW,
  }