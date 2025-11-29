import { Text } from "@monorepo/ui";
import { Banner as bannerImg } from "@monorepo/ui";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <div className="relative w-full h-[25vh] relative ">
      <img src={bannerImg} alt="배너 이미지" className="object-cover w-full h-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 text-center">
        <Text type="title" weight="bold" size="4">
          PwC 삼일 Acceleration Center
        </Text>
        <Text type="title" weight="bold">
          {title}
        </Text>
      </div>
    </div>
  );
}
