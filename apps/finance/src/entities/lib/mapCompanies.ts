import type { CompaniesDTO } from "../api/dto/companies-DTO";
import type { Companies } from "../model/companies";

export function mapCompanies(dto: CompaniesDTO): Companies {
  return {
    companies: dto.companies,
  };
}
