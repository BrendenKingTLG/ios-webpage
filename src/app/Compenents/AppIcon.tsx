import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

type AppIconProps = {
  icon: IconType;
  iconName: string;
  fillColor: string;
  bgColor: string;
  link: string;
};

const AppIcon: React.FC<AppIconProps> = ({
  icon: Icon,
  iconName,
  fillColor,
  bgColor,
  link,
}) => {
  return (
    <Link className="flex items-center justify-center flex-col" href={link}>
      <div
        className={
          "flex items-center justify-center h-14 w-14 rounded-md" + bgColor
        }
      >
        <Icon size={50} fill={fillColor} />
      </div>
      <p className="text-sm text-black">{iconName}</p>
    </Link>
  );
};

export default AppIcon;
