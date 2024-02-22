import { FunctionComponent } from "react";
import { Icon, IconProps } from "./icomoon/IcoMoon";

interface PaymentListProps {
  label: string;
  statusPayment: StatusPaymentType;
  payment: string;
}

export const PaymentList: FunctionComponent<PaymentListProps> = ({ label, payment, statusPayment }: PaymentListProps) => {
  let status = "";
  let icons: IconProps = {
    icon: "checkmark-circle",
    size: 18,
    color: "white",
  };

  switch (statusPayment) {
    case "Payment":
      status = "bg-lime-400";
      icons = { icon: "chevron-right", size: 18, color: "red" };
      break;
    case "Received":
      status = "bg-red-600";
      icons = { icon: "receipt", size: 18, color: "white" };
      break;
    case "Withdrawal":
      status = "bg-cyan-400";
      icons = { icon: "remove", size: 18, color: "white" };
      break;

    case "Credit":
      status = "bg-slate-800";
      icons = { icon: "chevron-forward-circle", size: 18, color: "white" };
      break;

    default:
      break;
  }
  return (
    <div className=" flex flex-row justify-between align-middle">
      <div className=" flex flex-row max-w-2xl gap-4 ">
        <div className={`rounded-lg gap-4 ${status} w-8 h-8 flex justify-center items-center`}>
          <Icon {...icons} />
        </div>
        <p className="text-md leading-8 text-wrap truncate">{label}</p>
      </div>
      <span className="truncate text-pretty font-semibold">{payment}</span>
    </div>
  );
};
