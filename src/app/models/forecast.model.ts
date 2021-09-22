export class Forecast {
  day: string;
  max: string;
  min: string;
  icon: string;

  constructor(day: string, max: string, min: string, icon: string) {
    this.day = day;
    this.max = max;
    this.min = min;
    this.icon = icon;
}

}
