import { getFavoritesList } from "@/entities/Manager/api/get-favorites-list";
import { Banner } from "@/shared/ui/Banner/Banner";
import { Button } from "@/shared/ui/Button/Button";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { Text } from "@/shared/ui/Text/Text";

export default async function Home() {
  // 서버 컴포넌트에서 fetch 호출
  const favorites = await getFavoritesList({
    email: "test@example.com", // 상수 처리 가능
    page: "1",
  });

  console.log(favorites);

  return (
    <>
      <Text weight="bold" size="1" type="title">123</Text>
      <Button type="primary" style="fill">관심기업 생성</Button>
      <Button type="primary" style="outline">관심기업 생성</Button>
      <Banner title="관심기업 관리 서비스"/>
    </>
  );
}
