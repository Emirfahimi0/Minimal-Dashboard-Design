import { Fragment, FunctionComponent } from "react";

interface TodoListProps {
  title: string;
  dueDate: string;
  description: string;
  priority: priorityType;
  completed: boolean;
  onCompletedChange: (completed: boolean) => void;
}

export const TodoList: FunctionComponent<TodoListProps> = ({ ...props }: TodoListProps) => {
  const { title, dueDate, description, priority, completed, onCompletedChange } = props;

  return (
    <Fragment>
      <div className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-orange-400">
        <div className=" flex-grow-0 block rounded-lg w-full bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-row gap-4">
            <input
              type="checkbox"
              className="scale-125 rounded-md"
              onChange={(e) => onCompletedChange(e.target.checked)}
              checked={completed}
            />
            <div>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{description}</p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{dueDate}</p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{priority}</p>
            </div>
          </div>

          {/* <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{completed}</p> */}
        </div>
      </div>
    </Fragment>
  );
};
