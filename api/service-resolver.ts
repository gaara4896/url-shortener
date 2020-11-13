import { ApiService } from './';

export class ServiceResolver {
  private static apiServiceInstance?: InstanceType<typeof ApiService>;

  public static apiResolver(): InstanceType<typeof ApiService> {
    return this.getApiServiceInstance();
  }

  private static getApiServiceInstance(): InstanceType<typeof ApiService> {
    if (this.apiServiceInstance === undefined) {
      this.apiServiceInstance = new ApiService();
    }
    return this.apiServiceInstance;
  }
}
