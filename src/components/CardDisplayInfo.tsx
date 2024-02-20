import React, { Fragment, FunctionComponent } from "react";

interface CardDisplayInfoProps {
  status?: statusPoint;
}

export const CardDisplayInfo: FunctionComponent<CardDisplayInfoProps> = ({ status }: CardDisplayInfoProps) => {
  return (
    <Fragment>
      <div className="hover:bg-neutral-100 relative grid-cols-2 text-gray-700 shadow-md rounded-md w-64 h-32">
        <div className="grid grid-row-3">
          <span className="p-4 text-wrap text-xs font-bold text-gray-400">Current Points</span>
          <span className="p-4 text-wrap text-xs font-bold text-green-300">Plat - 40 </span>
        </div>
      </div>
    </Fragment>
  );
};
