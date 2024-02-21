import { FunctionComponent } from "react";
import { StepperBarComponent } from "../components/StepperBar";
import { Layout } from "./Layout";
import { Icon } from "../components/icomoon/IcoMoon";

export const Root: FunctionComponent = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-row">
        <StepperBarComponent />
        <Layout />
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
