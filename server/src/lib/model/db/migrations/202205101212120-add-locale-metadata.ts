const NATIVE_NAMES: INativeNames = {
  ab: 'Аԥсуа',
  ace: 'Bahsa Acèh',
  af: 'af',
  am: 'አማርኛ',
  an: 'Aragonés',
  ar: 'العربية',
  arn: 'Mapuzugun',
  as: 'অসমীয়া',
  ast: 'Asturianu',
  az: 'Azərbaycanca',
  ba: 'Башҡорт',
  bas: 'Basaa',
  be: 'Беларуская',
  bg: 'Български',
  bn: 'বাংলা',
  'bn-BD': 'bn-BD',
  br: 'Brezhoneg',
  bxr: 'Буряад',
  ca: 'català',
  cak: 'Kaqchikel',
  ckb: 'کوردیی ناوەندی',
  cnh: 'Laiholh (Hakha)',
  co: 'Corsu',
  cs: 'Čeština',
  cv: 'Чӑвашла',
  cy: 'Cymraeg',
  da: 'Dansk',
  de: 'Deutsch',
  dsb: 'Dolnoserbšćina',
  dv: 'ދިވެހި',
  el: 'Ελληνικά',
  en: 'English',
  eo: 'Esperanto',
  es: 'Español',
  'es-AR': 'es-AR',
  'es-CL': 'es-CL',
  et: 'eesti',
  eu: 'Euskara',
  fa: 'فارسی',
  ff: 'Pulaar-Fulfulde',
  fi: 'suomi',
  fo: 'Føroyskt',
  fr: 'Français',
  'fy-NL': 'Frysk',
  'ga-IE': 'Gaeilge',
  gl: 'Galego',
  gn: 'Guarani',
  gom: 'gom',
  ha: 'Hausa',
  he: 'עברית',
  hi: 'हिंदी',
  hr: 'Hrvatski',
  hsb: 'Hornjoserbšćina',
  ht: 'ht',
  hu: 'Magyar',
  'hy-AM': 'Հայերեն',
  ia: 'Interlingua',
  id: 'Bahasa Indonesia',
  ie: 'ie',
  ig: 'Ásụ̀sụ́ Ìgbò',
  is: 'Íslenska',
  it: 'Italiano',
  ja: '日本語',
  ka: 'ქართული',
  kab: 'Taqbaylit',
  kbd: 'Адыгэбзэ (Къэбэрдэй)',
  kk: 'Қазақ тілі',
  km: 'km',
  kmr: 'Kurdî (Kurmancî)',
  ko: '한국어',
  kpv: 'Коми кыв',
  kw: 'Kernowek',
  ky: 'Кыргызча',
  lg: 'Luganda',
  lij: 'Lìgure',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  mdf: 'Мокшень кяль',
  mhr: 'Марий',
  mk: 'Македонски',
  ml: 'മലയാളം',
  mn: 'Монгол хэл',
  mni: 'ꯃꯤꯇꯩ ꯂꯣꯟ',
  mr: 'मराठी',
  mrj: 'Кырык мары',
  ms: 'Bahasa Melayu',
  mt: 'Malti',
  my: 'ဗမာ',
  myv: 'Эрзянь кель',
  'nan-tw': '臺語',
  'nb-NO': 'Norsk (bokmål)',
  'ne-NP': 'नेपाली',
  nia: 'nia',
  nl: 'Nederlands',
  'nn-NO': 'Norsk (nynorsk)',
  nyn: 'nyn',
  oc: 'Occitan',
  or: 'ଓଡ଼ିଆ',
  'pa-IN': 'ਪੰਜਾਬੀ',
  'pap-AW': 'pap-AW',
  pl: 'polski',
  ps: 'ps',
  pt: 'Português',
  'rm-sursilv': 'romontsch sursilvan',
  'rm-vallader': 'Rumantsch vallader',
  ro: 'Română',
  ru: 'Русский',
  rw: 'Ikinyarwanda',
  sah: 'Саха тыла',
  sat: 'ᱥᱟᱱᱛᱟᱲᱤ (ᱚᱞ ᱪᱤᱠᱤ)',
  sc: 'Sardu',
  scn: 'Sicilianu',
  si: 'සිංහල',
  sk: 'slovenčina',
  skr: 'سرائیکی',
  sl: 'slovenščina',
  sq: 'Shqip',
  sr: 'Српски',
  'sv-SE': 'Svenska',
  sw: 'Kiswahili',
  syr: 'ܣܘܼܪܝܝܐ',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  tg: 'Тоҷикӣ',
  th: 'ไทย',
  ti: 'ትግርኛ',
  tig: 'ትግረይት',
  tk: 'Türkmençe',
  tl: 'Tagalog',
  tok: 'toki pona',
  tr: 'Türkçe',
  tt: 'Татар',
  ug: 'ئۇيغۇرچە',
  uk: 'Українська',
  ur: 'اردو',
  uz: 'O‘zbek',
  vec: 'Vèneto',
  vi: 'Việt',
  vot: 'vad̕d̕a',
  yue: '粵語',
  'zh-CN': '汉语（中国大陆）',
  'zh-HK': '中文（香港）',
  'zh-TW': '華語（台灣）',
};

interface INativeNames {
  [key: string]: any;
}

const RTL = [
  'ar',
  'ckb',
  'dv',
  'dyu',
  'fa',
  'he',
  'ps',
  'skr',
  'syr',
  'ug',
  'ur',
];

export const up = async function (db: any): Promise<any> {
  const getLanguagesQuery = await db.runSql(`
      SELECT l.id, l.name, l.target_sentence_count as target_sentence_count, count(1) as total_sentence_count
      FROM locales l
      JOIN sentences s ON s.locale_id = l.id
      GROUP BY l.id
    `);

  const getLanguages: INativeNames = getLanguagesQuery.reduce(
    (obj: any, row: any) => {
      obj[row.name] = {
        id: row.id,
        name: row.name,
        isContributable: row.total_sentence_count >= row.target_sentence_count,
      };
      return obj;
    },
    {}
  );

  await Promise.all([
    Object.keys(getLanguages).map(languageCode => {
      if (getLanguages[languageCode].isContributable) {
        return db.runSql(`
        UPDATE locales
        SET isContributable = TRUE,
         text_direction = ${RTL.includes(languageCode) ? "'RTL'" : "'LTR'"},
         native_name = "${
           NATIVE_NAMES[languageCode] ? NATIVE_NAMES[languageCode] : 'NULL'
         }"
        WHERE name = "${languageCode}"
    `);
      } else {
        console.log(languageCode);
      }
    }),
  ]);
};

export const down = function (): Promise<any> {
  return null;
};