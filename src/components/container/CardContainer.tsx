import { Fragment, FunctionComponent } from "react";
import { Icon, IconProps } from "../icomoon/IcoMoon";

export interface CardContainerProps {
  label: string;
  iconStyle: IconProps;
  bgColor: string;
}

export const CardContainer: FunctionComponent<CardContainerProps> = ({ label, iconStyle, bgColor }: CardContainerProps) => {
  return (
    <Fragment>
      <div className={`h-32 w-48 ${bgColor} rounded-xl flex flex-col justify-center items-center`}>
        <Icon {...iconStyle} />
        <h2 className="font-bold text-sm text-white">{label}</h2>
      </div>
    </Fragment>
  );
};
