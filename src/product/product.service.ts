import { Injectable } from '@nestjs/common';
import { cd, matris, monitor, phone } from './mock/mockData';

@Injectable()
export class ProductService {
  async findOne(id: string): Promise<any> {
    try {
      switch (id) {
        case '11084451963':
          return {
            status: 200,
            data: matris,
          };
        case '7758205598':
          return {
            status: 200,
            data: phone,
          };
        case '13060247469':
          return {
            status: 200,
            data: cd,
          };
        case '10735101964':
          return {
            status: 200,
            data: monitor,
          };
        default:
          return {
            status: 404,
            data: 'product not found',
          };
      }
    } catch (err) {
      return {
        status: 400,
        message: err.message,
      };
    }
  }
}
