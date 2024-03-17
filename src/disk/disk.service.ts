import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawing 3 watts of power from Power Service');
    this.powerService.supplyPower(3);

    return 'here is the data';
  }
}
