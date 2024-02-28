
export class CommonHelper {
  static generateOTP(): string {
    return Math.floor(Math.random() * 9000 + 1000) + '';
  }

  static random(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
