

export function getFlagClass(countryCode: string): string {
    const countryCodeMap: { [key: string]: string } = {
      SCO: 'gb',
      GER: 'de',
      AUS: 'au',
      USA: 'us',
      CAN: 'ca',
      FRA: 'fr',
      ITA: 'it',
      ESP: 'es',
      GBR: 'gb',
      JPN: 'jp',
      CHN: 'cn',
      IND: 'in',
      RUS: 'ru',
      BRA: 'br',
      MEX: 'mx',
      ZAF: 'za',
      ARG: 'ar',
      NZL: 'nz',
      CHE: 'ch',
      NLD: 'nl',
      NED: 'nl',
      SWE: 'se',
      WAL: 'gb',
      ENG: 'gb',
      RSA: 'ru',
      DEN: 'dk',
      FIN: 'fi'
      // Add more mappings for other three-letter country codes as needed
    };
  
    const twoLetterCode = countryCodeMap[countryCode.toUpperCase()];
    return twoLetterCode ? twoLetterCode : ''; // Return the mapped class or empty string if not found
  }
  