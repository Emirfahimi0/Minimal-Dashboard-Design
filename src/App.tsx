import { Fragment, FunctionComponent, useState } from "react";
import { dummyData } from "./data/dummyData";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { Root } from "./layout/Root";

export const App: FunctionComponent = () => {
  const [todoList, setTodoList] = useState<ITodoList[]>(dummyData);

  const handleNewList = (value: ITodoList) => {
    console.log(value);
    setTodoList([...todoList, value]);
  };
  const render = true;
  return (
    <Fragment>
      {render === true ? (
        <Root />
      ) : (
        <main className="max-h-screen">
          <div className="py-8">
            <h1 className="font-bold text-3xl text-center">To Do App</h1>
          </div>
          <div className="container mx-auto py-2">
            <div className="pt-4 justify-center mx-auto p-8 max-w-lg">
              <TodoForm handleNewList={handleNewList} />
            </div>
            <div className="flex flex-col items-center max-w-lg mx-auto bg-slate-500 rounded-md p-5">
              <div className="space-y-2">
                {todoList.map((eachList, index) => {
                  const handleComplete = (completed: boolean) => {
                    const list = todoList.map((each) => {
                      return each.id === eachList.id ? { ...each, completed } : each;
                    });
                    setTodoList(list);
                  };
                  return (
                    <Fragment key={index}>
                      <TodoList {...eachList} onCompletedChange={handleComplete} />
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center	 ...">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
};
