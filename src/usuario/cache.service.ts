import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { AppVersionDto } from 'src/dto/app-version.dto';

@Injectable()
export class CacheService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  onModuleInit() {
    this.cacheManager.set('maintenanceFlag', {
      status: false,
      message: '',
    });
  }
  async setAppVersion(appVersion: AppVersionDto) {
    this.cacheManager.set('appVersion', appVersion);
  }
  async getAppVersion() {
    const getApp: AppVersionDto = await this.cacheManager.get('appVersion');
    return getApp;
  }

  async setMaintenance({ status: boolean, message: string }) {
    this.cacheManager.set('maintenanceFlag', {
      status: boolean,
      message: string,
    });
  }

  async getMaintenance() {
    const getStatus: { status: boolean; message: string } =
      await this.cacheManager.get('maintenanceFlag');

    return getStatus;
  }
}
