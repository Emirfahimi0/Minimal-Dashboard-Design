import { Fragment, FunctionComponent } from "react";
import { CardDisplayInfo } from "../components/CardDisplayInfo";
import { Icon } from "../components/icomoon/IcoMoon";
import { PaymentList } from "../components/PaymentList";

export const Layout: FunctionComponent = () => {
  const payment: IPayment[] = [
    { label: "Payment to Nick", payment: "MYR500.20" },
    { label: "Received Salary", payment: "MYR 10.0" },
    { label: "Bills & Units", payment: "MYR 70291818.30" },
  ];
  return (
    <Fragment>
      <section className="flex-1">
        <div className="grid grid-flow-col justify-items-center py-10">
          <CardDisplayInfo />
          <CardDisplayInfo />
          <CardDisplayInfo />
        </div>
        <h3 className="p-8 font-semiBold text-gray-500 text-md">Total Sales</h3>
        <h5 className="px-8 uppercase font-bold text-2xl">myr 1200.20</h5>

        <div className=" bg-neutral-50 rounded-lg mx-8 my-8 p-8">
          <div className="flex flex-row justify-between align-middle">
            <p className="text-sm text-indigo-500 font-bold">Latest Transaction</p>
            <div className="justify-end flex flex-row gap-4">
              <Icon icon="search-circle" width={24} className="text-gray-300" />
              <Icon icon="menu" width={24} className="text-gray-300" />
            </div>
          </div>
          {payment.map((props) => {
            return (
              <Fragment>
                <div className="py-4"></div>
                <PaymentList {...props} />
              </Fragment>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};
