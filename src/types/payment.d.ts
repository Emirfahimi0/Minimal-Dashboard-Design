type priorityType = "High" | "Low" | "Medium";

declare interface ITodoList {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  priority: priorityType;
  completed: boolean;
}

type statusPoint = "Completed" | "Elevate" | "Risking";

declare interface IPayment {
  label: string;
  payment: string;
}
