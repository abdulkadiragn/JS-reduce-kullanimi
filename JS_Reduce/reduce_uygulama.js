function parantezlerDengeliMi(metin) {
  const parcalanmisMetin = metin.split("");

  const sonuc = parcalanmisMetin.reduce(function (toplam, karakter) {
    if (toplam < 0) {
      return toplam;
    }
    if (karakter === "(") {
      return ++toplam;
    }
    if (karakter === ")") {
      return --toplam;
    }
    return toplam;
  }, 0);
  if (!sonuc) {
    console.log(`${metin} dengeli parantezler içermektedir.`);
  } else {
    console.log(`${metin} dengeli parantezler içermemektedir!!`);
  }
}

parantezlerDengeliMi("()()");
