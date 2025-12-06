import { COMPANY_CODE } from "@/entities/config/constants";
import type { ViewerFormProps } from "../model/type";

export function mapFormValues(values: ViewerFormProps) {
  return {
    ...values,
    corp_code: getCompanyNameByCode(values.corp_code) ?? "",
  };
}

export function getCompanyNameByCode(companyName: string): string {
  for (const [name, companyCode] of Object.entries(COMPANY_CODE)) {
    if (name === companyName) return companyCode;
  }

  return "";
}
