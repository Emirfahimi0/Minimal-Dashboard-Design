import { FunctionComponent } from "react";
import { Icon } from "./icomoon/IcoMoon";

interface PaymentListProps {
  label: string;
  payment: string;
}

export const PaymentList: FunctionComponent<PaymentListProps> = ({ label, payment }: PaymentListProps) => {
  return (
    <div className=" flex flex-row justify-between align-middle">
      <div className=" flex flex-row max-w-2xl gap-4 ">
        <div className=" rounded-lg gap-4 bg-indigo-400 w-8 h-8 flex justify-center items-center">
          <Icon icon="checkmark-circle" size={18} className="text-white" />
        </div>
        <p className="text-md leading-8 text-wrap truncate">{label}</p>
      </div>
      <span className="truncate text-pretty font-semibold">{payment}</span>
    </div>
  );
};
