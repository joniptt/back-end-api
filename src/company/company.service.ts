import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor() // @InjectRepository(Company) private company: Repository<Company>,
  {}

  // async getAll() {
  //   return await this.company.find();
  // }

  // async createComp(company: CompanyDto) {
  //   return await this.company.save(company);
  // }
}
