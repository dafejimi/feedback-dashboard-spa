import { Text, Img } from "./..";
import React from "react";

export default function LatestRow({ favoriteImage = "images/img_favorite.svg", latestText = "Latest", ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch flex-1`}>
      <div className="flex w-[84%] items-start rounded-lg px-1.5">
        <Img src={favoriteImage} alt="Latest" className="mb-1 h-[20px]" />
        <Text size="textxs" as="p" className="text-[13px] font-normal">
          {latestText}
        </Text>
      </div>
    </div>
  );
}
