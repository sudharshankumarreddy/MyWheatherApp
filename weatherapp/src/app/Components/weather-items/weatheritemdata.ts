export class WeatherItem {
    constructor(
        public location:string,
        public status: string, 
        public temperature: string, 
        public maxtemp: string, 
        public mintemp: string,
        public zipcode: string) {}
}

export class WeatherForecast{
    constructor(
        public day:string,
        public status:string,
        public maxtemp: string, 
        public mintemp: string 
    ){}
}