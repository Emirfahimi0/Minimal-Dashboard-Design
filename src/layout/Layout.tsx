import { Fragment, FunctionComponent } from "react";
import { CardDisplayInfo } from "../components/CardDisplayInfo";
import { Icon } from "../components/icomoon/IcoMoon";
import { PaymentList } from "../components/PaymentList";
import { CardContainer, CardContainerProps } from "../components/container";

export const Layout: FunctionComponent = () => {
  const payment: IPayment[] = [
    { label: "Payment to Nick", payment: "MYR 500.20", statusPayment: "Credit" },
    { label: "Received Salary", payment: "MYR 10.0", statusPayment: "Received" },
    { label: "Bills & Units", payment: "MYR 70291818.30", statusPayment: "Withdrawal" },
    { label: "Bills & Units", payment: "MYR 70291818.30", statusPayment: "Withdrawal" },
    { label: "Bills & Units", payment: "MYR 70291818.30", statusPayment: "Withdrawal" },
  ];

  const paymentCategories: CardContainerProps[] = [
    { label: "Games", iconStyle: { icon: "game-controller", size: 18, color: "white" }, bgColor: "bg-red-300" },
    { label: "Office", iconStyle: { icon: "cloud-offline", size: 18, color: "white" }, bgColor: "bg-green-300" },
    { label: "Utilities", iconStyle: { icon: "university", size: 18, color: "white" }, bgColor: "bg-yellow-300" },
    { label: "Shopping", iconStyle: { icon: "cube", size: 18, color: "white" }, bgColor: "bg-blue-300" },
  ];
  return (
    <Fragment>
      <section className="flex-1">
        <div className="grid grid-flow-col justify-items-center py-10">
          <CardDisplayInfo />
          <CardDisplayInfo />
          <CardDisplayInfo />
        </div>
        <h3 className="px-8 py-2 font-semiBold font-sans text-gray-500 text-md">Total Sales</h3>
        <h5 className="px-8 uppercase font-bold text-2xl font-sans">myr 1200.20</h5>
        <Fragment>
          <div className="flex justify-between flex-shrink-0 m-8 gap-4 flex-wrap">
            {paymentCategories.map((categories, index) => {
              return (
                <Fragment key={index}>
                  <CardContainer {...categories} />
                </Fragment>
              );
            })}
          </div>
        </Fragment>
        <Fragment>
          <div className=" flex flex-col rounded-lg mx-8 my-8 p-8 bg-neutral-100">
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
        </Fragment>
      </section>
    </Fragment>
  );
};
