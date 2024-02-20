import { v4 as uuidv4 } from "uuid";

export const dummyData: ITodoList[] = [
  {
    id: uuidv4(),
    title: "Create a dashboard component",
    dueDate: new Date("2023-03-01").toString(),
    description: "The dashboard should display key metrics and insights.",
    priority: "High",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Create a search component",
    dueDate: new Date("2023-03-15").toString(),
    description: "The search component should allow users to search for products by name or SKU.",
    priority: "Medium",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Create a new mutation from backend",
    dueDate: new Date("2023-03-30").toString(),
    description: "The new mutation should allow admins to create new products.",
    priority: "Low",
    completed: false,
  },
];
