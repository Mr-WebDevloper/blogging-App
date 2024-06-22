import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  data: ({ id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: null; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; fa: string; de: string; fr: string; it: string; cn: string; tr: string; nl?: undefined; hr?: undefined; es?: undefined; ja?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: null; subregion: string; subregion_id: null; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: null; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; fa: string; de: string; fr: string; it: string; cn: string; tr: string; hr?: undefined; es?: undefined; ja?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: null; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; cn: string; tr: string; it?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; cn: string; tr: string; "pt-BR"?: undefined; pt?: undefined; nl?: undefined; hr?: undefined; fa?: undefined; de?: undefined; es?: undefined; fr?: undefined; ja?: undefined; it?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; hr?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; })[];

  constructor() { }

  async validateEmailDomain(email:any) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
        if(email.indexOf("@gmail.com", email.length - "@gmail.com".length) !== -1){
            return true;
        }else{
          return false;
        }
    }else{
      return false;
    }
  }

  async validateEmail(email: any) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async validatePassword(password: any) {
    return String(password)
      .match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/
      );
  };

  async IsMobileNumber(mobNo: any) {
    var mob = /^[1-9]{1}[0-9]{9}$/;
    if (mob.test(mobNo) == false) {
      return false;
    }
    return true;
  }

  }

