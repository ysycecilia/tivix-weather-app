export class Tracker {
  max: number;
  min: number;
  icon: string;
  day: string;
  data: number[];

  constructor(max: number, min: number) {
    // this.day = day;
    this.max = max;
    this.min = min;
    // this.icon = icon;

}

  insert(value): void {
    this.data.push(value);
  }

  showMin(): number {
    return this.min;
    // return this.data.length ? Math.min(...this.data) : null ;
  }

  showMax(): number {
    return this.max;
    // return this.data.length ? Math.max(...this.data) : null ;
  }

  showMean(): number {
    return  (this.min + this.max) / 2;
    // this.data.length ? this.data.reduce((sum, value) => sum + value, 0) / this.data.length : null;
  }

  showMode(): string {
    // create a hashtable to store each data and its frequency
    const modeTable: any = {};
    let mode: string;
    this.data.forEach(d => {
      modeTable[d] ? modeTable[d]++ : modeTable[d] = 1;
    });

    // mode is the key with biggest value, for array with multiple modes, it will give the last one
    mode = Object.keys(modeTable).reduce((a, b) => modeTable[a] > modeTable[b] ? a : b);

    return mode;
  }

}
