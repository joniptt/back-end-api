import { Controller } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller()
export class CompanyController {
  constructor(private company: CompanyService) {}
  // @Public()
  // @Get('companies')
  // async getCompanies(@Body() company: CompanyDto) {
  //   return await this.company.getAll();
  // }
  // @Public()
  // @Post('company')
  // async cadCompanies(@Body() company: CompanyDto) {
  //   const comp = await this.company.createComp(company);
  //   if (comp) {
  //     return { message: 'success' };
  //   } else {
  //     return { error: 'error' };
  //   }
  // }
}
