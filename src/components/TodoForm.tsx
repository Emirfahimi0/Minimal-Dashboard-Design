import { FormEvent, FunctionComponent, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
  handleNewList: (value: ITodoList) => void;
}

export const TodoForm: FunctionComponent<TodoFormProps> = ({ handleNewList }: TodoFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const completedRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLSelectElement>(null);

  const priorityLabel: priorityType[] = ["High", "Medium", "Low"];

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value.length === 0 || titleRef.current?.value === "") return alert("Please enter title");
    if (descriptionRef.current?.value.length === 0 || descriptionRef.current?.value === "") return alert("Please enter description");
    if (dateRef.current?.value.length === 0 || dateRef.current?.value === "") return alert("Please enter a date");

    const newList: ITodoList = {
      id: uuidv4(),
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
      dueDate: dateRef.current!.value,
      completed: completedRef.current!.checked,
      priority: priorityRef.current?.value as priorityType,
    };

    handleNewList(newList);
  };

  return (
    <form className="flex flex-col w-full bg-white rounded-lg shadow-md p-6" onSubmit={handleForm}>
      <h2 className=" text-md font-semibold mb-2 text-center">Create a new task</h2>
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Title</label>
        <input ref={titleRef} type="text" className="w-full border rounded-md p-2" placeholder="Enter the title" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Description</label>
        <textarea
          className="w-full border rounded-md p-2"
          ref={descriptionRef}
          cols={4}
          rows={4}
          placeholder="Please describe the task"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Due Date</label>
        <input className="w-full border rounded-md p-2" ref={dateRef} type="date" placeholder="Please describe the task" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 text-sm font-bold mb-2">Priority</label>
        <select className="block w-md border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-500 mb-2" ref={priorityRef}>
          {priorityLabel.map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          className="rounded bg-gray-500 border-transparent focus:border-transparent focus:bg-gray-400 text-gray-700"
          ref={completedRef}
        />
        <span>Is the task completed?</span>
      </label>

      <button className=" bg-gray-200 text-blue-600 px-2 py-2 font-medium rounded-md mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};
