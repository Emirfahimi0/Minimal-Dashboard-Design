import { FunctionComponent } from "react";
import { StepperBarComponent } from "../components/StepperBar";
import { Layout } from "./Layout";
import { Icon } from "../components/icomoon/IcoMoon";
import { CardDisplayInfo } from "../components/CardDisplayInfo";

export const Root: FunctionComponent = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-row">
        <StepperBarComponent />
        <section className="flex-1">
          <div className="grid grid-flow-col justify-items-center py-10">
            <CardDisplayInfo />
            <CardDisplayInfo />
            <CardDisplayInfo />
          </div>
          <h3 className="p-8 font-semiBold text-gray-500 text-md">Total Sales</h3>
          <h5 className="px-8 uppercase font-bold text-2xl">myr 1200.20</h5>

          <div className=" flex flex-row justify-between align-middle bg-neutral-50 rounded-lg mx-8 my-8 p-8">
            <p className="text-sm text-indigo-500 font-bold">Latest Transaction</p>
            <div className="justify-end flex flex-row gap-4">
              <Icon icon="search-circle" width={24} className="text-gray-300" />
              <Icon icon="menu" width={24} className="text-gray-300" />
            </div>
          </div>
        </section>
        <section className="w-full max-w-80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.7)] dark:bg-neutral-900 w-max-32 justify-end rounded-tl-[70px]">
          <div className="flex flex-col">
            <div className="flex gap-6 justify-end p-8">
              <Icon icon="notifications-circle" width={24} className="text-green-300" />
              <Icon icon="wallet" width={24} className="text-amber-500" />
              <Icon icon="person-circle" width={24} className=" text-orange-600" />
            </div>
            <div className="px-8 py-12">
              <div className="credit-card">
                <span>John Doe</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
