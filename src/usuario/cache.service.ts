import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  onModuleInit() {
    this.cacheManager.set('maintenanceFlag', false);
  }

  async setMaintenance(inMaintenance: boolean) {
    this.cacheManager.set('maintenanceFlag', inMaintenance);
    const getStatus: { status: boolean } = await this.cacheManager.get(
      'maintenanceFlag',
    );
    if (getStatus.status == true) {
      const response = {
        inMaintenance: getStatus.status,
        message: 'Está em manutenção',
      };
      return response;
    } else if (getStatus.status == false) {
      const response = {
        inMaintenance: getStatus.status,
        message: 'Não está em manutenção',
      };
      return response;
    }
  }

  async getMaintenance() {
    return await this.cacheManager.get('maintenanceFlag');
  }
}
