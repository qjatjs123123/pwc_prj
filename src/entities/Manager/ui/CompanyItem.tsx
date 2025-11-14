import { Button } from "@/shared/ui/Button/Button";

export function CompanyItem({ companyName }: { companyName: string }) {
  return <Button>{companyName}</Button>;
}
