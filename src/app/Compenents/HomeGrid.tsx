import React from "react";
import apps from "../constants";
import AppIcon from "./AppIcon";

export default function HomeGrid() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {apps.map((app, index) => (
          <AppIcon
            key={index}
            icon={app.icon}
            iconName={app.iconName}
            fillColor={app.fillColor}
            bgColor={app.backgroundColor}
            link={app.link}
          />
        ))}
      </div>
    </div>
  );
}
