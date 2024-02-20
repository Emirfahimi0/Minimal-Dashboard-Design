import { Fragment, FunctionComponent } from "react";
import { Icon, IconProps } from "../icomoon/IcoMoon";

export const StepperBarComponent: FunctionComponent = () => {
  interface IMenuList {
    name: string;
    icon: IconProps;
  }

  const menuList: IMenuList[] = [
    { name: "Dashboard", icon: { icon: "md-alert", size: 20, color: "red" } },
    { name: "Wallet", icon: { icon: "wallet", size: 20, color: "green" } },
    { name: "Exchange", icon: { icon: "cloud-circle", size: 20, color: "blue" } },
    { name: "News", icon: { icon: "newspaper", size: 20, color: "pink" } },
  ];

  const schedulePayment = ["Monthly Rent", "Food Payment", "Utility Rent"];

  return (
    <div className="h-screen  border-r border-gray-300 rounded-tr-3xl rounded-br-3xl w-64 px-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.7)] dark:bg-neutral-900">
      <div className="flex flex-row items-center pt-8 gap-2">
        <Icon icon="basketball" size={20} width={20} color="red" />
        <span className="font-bold text-xl">Athris Alliance</span>
      </div>
      <div>
        <ul>
          <div className="py-8">
            <span className="font-semibold text-md  text-indigo-600">Menu</span>
          </div>
          {menuList.map((menu, index) => {
            return (
              <Fragment>
                <div className="flex flex-row gap-2 mb-2">
                  <Icon {...menu.icon} />
                  <li className="mb-8 items-center" key={index}>
                    {menu.name}
                  </li>
                </div>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="py-8">
          <span className="font-semibold text-md  text-indigo-600">Scheduled Payment</span>
        </div>
        <div className="space-y-8">
          {schedulePayment.map((schedule, index) => {
            return (
              <Fragment>
                <div className="flex flex-row">
                  <div className="mr-4 h-4 w-4 border border-gray-500 rounded-full" key={index}></div>
                  <span className="text-sm"> {schedule}</span>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
