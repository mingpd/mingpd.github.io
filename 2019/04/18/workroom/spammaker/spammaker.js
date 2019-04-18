if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'spammaker'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'spammaker'.");
}
var spammaker = function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var Math_0 = Math;
  var unboxChar = Kotlin.unboxChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_xqrb1d$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var toString = Kotlin.toString;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var toChar = Kotlin.toChar;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var indexOf = Kotlin.kotlin.collections.indexOf_o2f9me$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var spamServices;
  function convert(input, option) {
    var output = {v: input};
    var tmp$;
    tmp$ = spamServices.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      output.v = element.process_bqi7sc$(output.v, option);
    }
    return output.v;
  }
  function toSpam(input) {
    var output = {v: input};
    var tmp$;
    tmp$ = spamServices.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      output.v = element.process_bqi7sc$(output.v);
    }
    return output.v;
  }
  function toKorean(input) {
    var output = {v: input};
    var tmp$;
    tmp$ = spamServices.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      output.v = element.process_bqi7sc$(output.v, new SpamOption(0, 0, 0, 50, 0, 0, 0, 0, 0, 0, false));
    }
    return output.v;
  }
  function SpamOption(hHorizontal, hDual1, hDual2, hComplex, hSpecial, sLetter, sRandom, sWhitespace, sDigit, sFullWidth, prefix) {
    if (hHorizontal === void 0)
      hHorizontal = 100;
    if (hDual1 === void 0)
      hDual1 = 100;
    if (hDual2 === void 0)
      hDual2 = 100;
    if (hComplex === void 0)
      hComplex = 20;
    if (hSpecial === void 0)
      hSpecial = 50;
    if (sLetter === void 0)
      sLetter = 100;
    if (sRandom === void 0)
      sRandom = 20;
    if (sWhitespace === void 0)
      sWhitespace = 100;
    if (sDigit === void 0)
      sDigit = 40;
    if (sFullWidth === void 0)
      sFullWidth = 100;
    if (prefix === void 0)
      prefix = false;
    this.hHorizontal = hHorizontal;
    this.hDual1 = hDual1;
    this.hDual2 = hDual2;
    this.hComplex = hComplex;
    this.hSpecial = hSpecial;
    this.sLetter = sLetter;
    this.sRandom = sRandom;
    this.sWhitespace = sWhitespace;
    this.sDigit = sDigit;
    this.sFullWidth = sFullWidth;
    this.prefix = prefix;
  }
  SpamOption.prototype.enableLetterSymbolization = function () {
    return random(new IntRange(0, 100), Random.Default) < this.sLetter;
  };
  SpamOption.prototype.enableHHorizontal = function () {
    return random(new IntRange(0, 100), Random.Default) < this.hHorizontal;
  };
  SpamOption.prototype.enableHDual1 = function () {
    return random(new IntRange(0, 100), Random.Default) < this.hDual1;
  };
  SpamOption.prototype.enableHDual2 = function () {
    return random(new IntRange(0, 100), Random.Default) < this.hDual2;
  };
  SpamOption.prototype.enableHSpecial = function () {
    return random(new IntRange(0, 100), Random.Default) < this.hSpecial;
  };
  SpamOption.prototype.enableHComplex = function () {
    return random(new IntRange(0, 100), Random.Default) < this.hComplex;
  };
  SpamOption.prototype.enableSymbolization = function () {
    var tmp$ = random(new IntRange(0, 100), Random.Default);
    var a = this.sRandom;
    return tmp$ < Math_0.min(a, 50);
  };
  SpamOption.prototype.enableUrlSymbolization = function () {
    return this.sRandom > 0;
  };
  SpamOption.prototype.enableWhitespaceSymbolization = function () {
    return random(new IntRange(0, 100), Random.Default) < this.sWhitespace;
  };
  SpamOption.prototype.enableDigitSymbolization = function () {
    return random(new IntRange(0, 100), Random.Default) < this.sDigit;
  };
  SpamOption.prototype.enableFullWidth = function () {
    return random(new IntRange(0, 100), Random.Default) < this.sFullWidth;
  };
  SpamOption.prototype.enableFullWidthUrl = function () {
    return this.sFullWidth === 100;
  };
  SpamOption.prototype.enablePrefix = function () {
    return this.prefix;
  };
  SpamOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpamOption',
    interfaces: []
  };
  SpamOption.prototype.component1 = function () {
    return this.hHorizontal;
  };
  SpamOption.prototype.component2 = function () {
    return this.hDual1;
  };
  SpamOption.prototype.component3 = function () {
    return this.hDual2;
  };
  SpamOption.prototype.component4 = function () {
    return this.hComplex;
  };
  SpamOption.prototype.component5 = function () {
    return this.hSpecial;
  };
  SpamOption.prototype.component6 = function () {
    return this.sLetter;
  };
  SpamOption.prototype.component7 = function () {
    return this.sRandom;
  };
  SpamOption.prototype.component8 = function () {
    return this.sWhitespace;
  };
  SpamOption.prototype.component9 = function () {
    return this.sDigit;
  };
  SpamOption.prototype.component10 = function () {
    return this.sFullWidth;
  };
  SpamOption.prototype.component11 = function () {
    return this.prefix;
  };
  SpamOption.prototype.copy_81wilh$ = function (hHorizontal, hDual1, hDual2, hComplex, hSpecial, sLetter, sRandom, sWhitespace, sDigit, sFullWidth, prefix) {
    return new SpamOption(hHorizontal === void 0 ? this.hHorizontal : hHorizontal, hDual1 === void 0 ? this.hDual1 : hDual1, hDual2 === void 0 ? this.hDual2 : hDual2, hComplex === void 0 ? this.hComplex : hComplex, hSpecial === void 0 ? this.hSpecial : hSpecial, sLetter === void 0 ? this.sLetter : sLetter, sRandom === void 0 ? this.sRandom : sRandom, sWhitespace === void 0 ? this.sWhitespace : sWhitespace, sDigit === void 0 ? this.sDigit : sDigit, sFullWidth === void 0 ? this.sFullWidth : sFullWidth, prefix === void 0 ? this.prefix : prefix);
  };
  SpamOption.prototype.toString = function () {
    return 'SpamOption(hHorizontal=' + Kotlin.toString(this.hHorizontal) + (', hDual1=' + Kotlin.toString(this.hDual1)) + (', hDual2=' + Kotlin.toString(this.hDual2)) + (', hComplex=' + Kotlin.toString(this.hComplex)) + (', hSpecial=' + Kotlin.toString(this.hSpecial)) + (', sLetter=' + Kotlin.toString(this.sLetter)) + (', sRandom=' + Kotlin.toString(this.sRandom)) + (', sWhitespace=' + Kotlin.toString(this.sWhitespace)) + (', sDigit=' + Kotlin.toString(this.sDigit)) + (', sFullWidth=' + Kotlin.toString(this.sFullWidth)) + (', prefix=' + Kotlin.toString(this.prefix)) + ')';
  };
  SpamOption.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hHorizontal) | 0;
    result = result * 31 + Kotlin.hashCode(this.hDual1) | 0;
    result = result * 31 + Kotlin.hashCode(this.hDual2) | 0;
    result = result * 31 + Kotlin.hashCode(this.hComplex) | 0;
    result = result * 31 + Kotlin.hashCode(this.hSpecial) | 0;
    result = result * 31 + Kotlin.hashCode(this.sLetter) | 0;
    result = result * 31 + Kotlin.hashCode(this.sRandom) | 0;
    result = result * 31 + Kotlin.hashCode(this.sWhitespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.sDigit) | 0;
    result = result * 31 + Kotlin.hashCode(this.sFullWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.prefix) | 0;
    return result;
  };
  SpamOption.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hHorizontal, other.hHorizontal) && Kotlin.equals(this.hDual1, other.hDual1) && Kotlin.equals(this.hDual2, other.hDual2) && Kotlin.equals(this.hComplex, other.hComplex) && Kotlin.equals(this.hSpecial, other.hSpecial) && Kotlin.equals(this.sLetter, other.sLetter) && Kotlin.equals(this.sRandom, other.sRandom) && Kotlin.equals(this.sWhitespace, other.sWhitespace) && Kotlin.equals(this.sDigit, other.sDigit) && Kotlin.equals(this.sFullWidth, other.sFullWidth) && Kotlin.equals(this.prefix, other.prefix)))));
  };
  function HangleService() {
    this.specials_0 = mapOf([to('\u314F', 'r'), to('\u3150', 'H'), to('\u3151', 'F'), to('\u3163', '1'), to('\u3131', '7'), to('\u3134', 'L'), to('\u3139', 'z'), to('\u3141', '\u25A1'), to('\u3147', '0'), to('\u3148', '\u30CC')]);
  }
  HangleService.prototype.process_bqi7sc$$default = function (text, option) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = '';
    tmp$ = text.length;
    for (var i = 0; i < tmp$; i++) {
      var disassembled = disassemble(text.charCodeAt(i));
      var disassembledAtomically = disassembleAtomically(text.charCodeAt(i));
      if (disassembled == null || disassembledAtomically == null) {
        result += String.fromCharCode(text.charCodeAt(i));
        continue;
      }
      tmp$_1 = result;
      if (option.enableHComplex())
        tmp$_0 = toBoxedChar(assemble(pickStrongCho(disassembledAtomically[0][0]), unboxChar(disassembled[1]), disassembled.length === 2 ? pickComplexJong() : pickComplexJong_0(unboxChar(disassembled[2]))));
      else if (option.enableHHorizontal() && disassembled.length === 2 && disassembledAtomically[1].length === 1 && contains('\u314F\u3150\u3151\u3152\u3153\u3154\u3155\u3156\u3163', unboxChar(disassembled[1])))
        tmp$_0 = joinToString(disassembledAtomically[0], '') + String.fromCharCode(unboxChar(disassembled[1]));
      else if (option.enableHDual1() && disassembledAtomically[1].length === 2 && disassembled.length === 2)
        tmp$_0 = toString(toBoxedChar(assemble(unboxChar(disassembled[0]), disassembledAtomically[1][0]))) + String.fromCharCode(disassembledAtomically[1][1]);
      else if (option.enableHDual2() && disassembledAtomically[1].length === 2 && disassembled.length === 3)
        tmp$_0 = toString(toBoxedChar(assemble(unboxChar(disassembled[0]), disassembledAtomically[1][0], unboxChar(disassembled[2])))) + String.fromCharCode(disassembledAtomically[1][1]);
      else
        tmp$_0 = String.fromCharCode(text.charCodeAt(i));
      result = tmp$_1 + toString(tmp$_0);
    }
    tmp$_2 = this.specials_0.entries.iterator();
    while (tmp$_2.hasNext()) {
      var tmp$_3 = tmp$_2.next();
      var k = tmp$_3.key;
      var v = tmp$_3.value;
      if (contains_0(result, k) && option.enableHSpecial())
        result = replace(result, k, v);
    }
    return option.enablePrefix() ? '[Web\uBC1C\uC2E0]' + '\n' + result : result;
  };
  HangleService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HangleService',
    interfaces: [SpamService]
  };
  function SpamService() {
  }
  SpamService.prototype.process_bqi7sc$ = function (text, option, callback$default) {
    if (option === void 0)
      option = new SpamOption();
    return callback$default ? callback$default(text, option) : this.process_bqi7sc$$default(text, option);
  };
  SpamService.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SpamService',
    interfaces: []
  };
  function SymbolizationService() {
    this.specials_0 = mapOf([to('http://', ' \u261E\uC989\uC2DC\uC774\uB3D9 http://'), to('https://', ' \u261E\uC989\uC2DC\uC774\uB3D9 http://')]);
    this.tokens_0 = mapOf([to('\uBA85', '\uB775'), to('\uC4F0', '\u4E1B'), to('\uB178', '\u4E0A'), to('\uBCD1', '\u3179'), to('\uC751', '%'), to('\uACF3', '\u592C'), to('\uCB48', '\u5352'), to('\uACE0', '\u536B'), to('\uC2A4', '\u4EBC'), to('\uC18C', '\u4EDD'), to('\uC218', '\u3403'), to('\uC2B4', '\u4E1B\u4E1B'), to('\uC2A5', '\u4ECA'), to('\uC870', '\u4E15'), to('\uB93C', '\u5F15'), to('18', '\u65E7')]);
  }
  SymbolizationService.prototype.process_bqi7sc$$default = function (text, option) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var origin = text;
    tmp$ = this.tokens_0.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_6 = tmp$.next();
      var k = tmp$_6.key;
      var v = tmp$_6.value;
      if (option.enableLetterSymbolization()) {
        origin = replace(origin, k, v);
      }
    }
    var result = '';
    var $receiver = origin;
    var tmp$_7;
    var tmp$_8 = trim(Kotlin.isCharSequence(tmp$_7 = $receiver) ? tmp$_7 : throwCCE()).toString();
    var split = Regex_init('\\h').split_905azu$(tmp$_8, 0);
    tmp$_0 = split.iterator();
    while (tmp$_0.hasNext()) {
      var s = tmp$_0.next();
      var i = 0;
      if (isUrl(s)) {
        if (option.enableUrlSymbolization()) {
          var url = {v: s};
          var tmp$_9;
          tmp$_9 = this.specials_0.entries.iterator();
          while (tmp$_9.hasNext()) {
            var element = tmp$_9.next();
            url.v = replace(url.v, element.key, element.value);
          }
          result += (option.enableFullWidthUrl() ? toFullWidth_0(url.v) : url.v) + randomSymbol();
        }
         else {
          result += s + ' ';
        }
        continue;
      }
      while (i < s.length) {
        tmp$_5 = result;
        if (option.enableSymbolization())
          tmp$_4 = randomSymbol();
        else if (isDigit(s.charCodeAt(i)) && option.enableDigitSymbolization()) {
          tmp$_4 = symbolDigit(s.charCodeAt((tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1)));
        }
         else if (isAlphabet(s.charCodeAt(i)) && option.enableFullWidth()) {
          tmp$_4 = toFullWidth(s.charCodeAt((tmp$_2 = i, i = tmp$_2 + 1 | 0, tmp$_2)));
        }
         else {
          tmp$_4 = toBoxedChar(s.charCodeAt((tmp$_3 = i, i = tmp$_3 + 1 | 0, tmp$_3)));
        }
        result = tmp$_5 + tmp$_4.toString();
      }
      result += option.enableWhitespaceSymbolization() ? randomSymbol() : ' ';
    }
    return result;
  };
  SymbolizationService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SymbolizationService',
    interfaces: [SpamService]
  };
  function isUrl($receiver) {
    return Regex_init('(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]').containsMatchIn_6bul2c$($receiver);
  }
  function isAlphabet($receiver) {
    return (new CharRange(65, 122)).contains_mef7kx$($receiver);
  }
  function isDigit($receiver) {
    return (new CharRange(48, 57)).contains_mef7kx$($receiver);
  }
  function toFullWidth($receiver) {
    return isAlphabet($receiver) || isDigit($receiver) ? String.fromCharCode(toChar($receiver + 65248)) : String.fromCharCode($receiver);
  }
  function toFullWidth_0($receiver) {
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var item = unboxChar(tmp$.next());
      destination.add_11rb$(toFullWidth(unboxChar(toBoxedChar(item))));
    }
    return joinToString_0(destination, '');
  }
  function random_0($receiver) {
    return unboxChar($receiver.length > 0 ? $receiver[random(new IntRange(0, $receiver.length - 1 | 0), Random.Default)] : null);
  }
  var generalCho;
  var generalJung;
  var generalJong;
  var atomicCho;
  var atomicJung;
  var atomicJong;
  var duals;
  var toStrongCho;
  var complexJong;
  var toComplexJong;
  function cho(ch) {
    return (new CharRange(44032, 55203)).contains_mef7kx$(ch) ? generalCho[(ch - 44032) / 588 | 0] : null;
  }
  function disassemble(ch) {
    var tmp$;
    if ((new CharRange(44032, 55203)).contains_mef7kx$(ch)) {
      var i1;
      var i2;
      var i3 = ch - 44032;
      i1 = i3 / 588 | 0;
      i3 = i3 % 588;
      i2 = i3 / 28 | 0;
      i3 = i3 % 28;
      tmp$ = i3 !== 0 ? [toBoxedChar(generalCho[i1]), toBoxedChar(generalJung[i2]), toBoxedChar(generalJong[i3])] : [toBoxedChar(generalCho[i1]), toBoxedChar(generalJung[i2])];
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function disassembleAtomically(ch) {
    var tmp$;
    if ((new CharRange(44032, 55203)).contains_mef7kx$(ch)) {
      var i1;
      var i2;
      var i3 = ch - 44032;
      i1 = i3 / 588 | 0;
      i3 = i3 % 588;
      i2 = i3 / 28 | 0;
      i3 = i3 % 28;
      tmp$ = i3 !== 0 ? [atomicCho[i1], atomicJung[i2], atomicJong[i3]] : [atomicCho[i1], atomicJung[i2]];
    }
     else if ((new CharRange(12593, 12643)).contains_mef7kx$(ch))
      tmp$ = [duals[ch - 12593]];
    else
      tmp$ = null;
    return tmp$;
  }
  function assemble(cho, jung, jong) {
    if (jong === void 0)
      jong = null;
    var tmp$;
    if (indexOf(generalCho, cho) >= 0 && indexOf(generalJung, jung) >= 0) {
      tmp$ = toChar(((indexOf(generalCho, cho) * 21 | 0) * 28 | 0) + (indexOf(generalJung, jung) * 28 | 0) + (jong != null ? indexOf(generalJong, jong) : 0) + 44032 | 0);
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function pickStrongCho(cho) {
    var tmp$, tmp$_0;
    return unboxChar((tmp$_0 = (tmp$ = toStrongCho.get_11rb$(toBoxedChar(cho))) != null ? random_0(tmp$) : null) != null ? tmp$_0 : cho);
  }
  function pickComplexJong() {
    return unboxChar(ensureNotNull(random_0(complexJong)));
  }
  function pickComplexJong_0(jong) {
    var tmp$, tmp$_0;
    return unboxChar((tmp$_0 = (tmp$ = toComplexJong.get_11rb$(toBoxedChar(jong))) != null ? random_0(tmp$) : null) != null ? tmp$_0 : jong);
  }
  var numbers;
  var symbols;
  function randomSymbol() {
    return String.fromCharCode(symbols.charCodeAt(random(new IntRange(0, 376), Random.Default)));
  }
  function symbolDigit(ch) {
    return String.fromCharCode(numbers.charCodeAt(toInt(String.fromCharCode(ch)) % 10 + (random(new IntRange(0, 4), Random.Default) * 10 | 0) | 0));
  }
  Object.defineProperty(_, 'spamServices', {
    get: function () {
      return spamServices;
    }
  });
  _.toSpam = toSpam;
  _.toKorean = toKorean;
  _.SpamOption = SpamOption;
  _.HangleService = HangleService;
  _.SpamService = SpamService;
  _.SymbolizationService = SymbolizationService;
  _.isUrl_pdl1vz$ = isUrl;
  _.isAlphabet_myv2d0$ = isAlphabet;
  _.isDigit_myv2d0$ = isDigit;
  _.toFullWidth_myv2d0$ = toFullWidth;
  _.toFullWidth_pdl1vz$ = toFullWidth_0;
  _.random_355ntz$ = random_0;
  _.cho_s8itvh$ = cho;
  _.disassemble_s8itvh$ = disassemble;
  _.disassembleAtomically_s8itvh$ = disassembleAtomically;
  _.assemble_p65ylq$ = assemble;
  _.pickStrongCho_s8itvh$ = pickStrongCho;
  _.pickComplexJong = pickComplexJong;
  _.pickComplexJong_s8itvh$ = pickComplexJong_0;
  Object.defineProperty(_, 'numbers', {
    get: function () {
      return numbers;
    }
  });
  Object.defineProperty(_, 'symbols', {
    get: function () {
      return symbols;
    }
  });
  _.randomSymbol = randomSymbol;
  _.symbolDigit_s8itvh$ = symbolDigit;
  HangleService.prototype.process_bqi7sc$ = SpamService.prototype.process_bqi7sc$;
  SymbolizationService.prototype.process_bqi7sc$ = SpamService.prototype.process_bqi7sc$;
  spamServices = listOf([new SymbolizationService(), new HangleService()]);
  generalCho = Kotlin.charArrayOf(12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622);
  generalJung = Kotlin.charArrayOf(12623, 12624, 12625, 12626, 12627, 12628, 12629, 12630, 12631, 12632, 12633, 12634, 12635, 12636, 12637, 12638, 12639, 12640, 12641, 12642, 12643);
  generalJong = Kotlin.charArrayOf(toChar(0), 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12612, 12613, 12614, 12615, 12616, 12618, 12619, 12620, 12621, 12622);
  atomicCho = [Kotlin.charArrayOf(12593), Kotlin.charArrayOf(12593, 12593), Kotlin.charArrayOf(12596), Kotlin.charArrayOf(12599), Kotlin.charArrayOf(12599, 12599), Kotlin.charArrayOf(12601), Kotlin.charArrayOf(12609), Kotlin.charArrayOf(12610), Kotlin.charArrayOf(12610, 12610), Kotlin.charArrayOf(12613), Kotlin.charArrayOf(12613, 12613), Kotlin.charArrayOf(12615), Kotlin.charArrayOf(12616), Kotlin.charArrayOf(12616, 12616), Kotlin.charArrayOf(12618), Kotlin.charArrayOf(12619), Kotlin.charArrayOf(12620), Kotlin.charArrayOf(12621), Kotlin.charArrayOf(12622)];
  atomicJung = [Kotlin.charArrayOf(12623), Kotlin.charArrayOf(12624), Kotlin.charArrayOf(12625), Kotlin.charArrayOf(12626), Kotlin.charArrayOf(12627), Kotlin.charArrayOf(12628), Kotlin.charArrayOf(12629), Kotlin.charArrayOf(12630), Kotlin.charArrayOf(12631), Kotlin.charArrayOf(12631, 12623), Kotlin.charArrayOf(12631, 12624), Kotlin.charArrayOf(12631, 12643), Kotlin.charArrayOf(12635), Kotlin.charArrayOf(12636), Kotlin.charArrayOf(12636, 12627), Kotlin.charArrayOf(12636, 12628), Kotlin.charArrayOf(12636, 12643), Kotlin.charArrayOf(12640), Kotlin.charArrayOf(12641), Kotlin.charArrayOf(12641, 12643), Kotlin.charArrayOf(12643)];
  atomicJong = [Kotlin.charArrayOf(), Kotlin.charArrayOf(12593), Kotlin.charArrayOf(12593, 12593), Kotlin.charArrayOf(12593, 12613), Kotlin.charArrayOf(12596), Kotlin.charArrayOf(12596, 12616), Kotlin.charArrayOf(12596, 12622), Kotlin.charArrayOf(12599), Kotlin.charArrayOf(12601), Kotlin.charArrayOf(12601, 12593), Kotlin.charArrayOf(12601, 12609), Kotlin.charArrayOf(12601, 12610), Kotlin.charArrayOf(12601, 12613), Kotlin.charArrayOf(12601, 12620), Kotlin.charArrayOf(12601, 12621), Kotlin.charArrayOf(12601, 12622), Kotlin.charArrayOf(12609), Kotlin.charArrayOf(12610), Kotlin.charArrayOf(12610, 12613), Kotlin.charArrayOf(12613), Kotlin.charArrayOf(12613, 12613), Kotlin.charArrayOf(12615), Kotlin.charArrayOf(12616), Kotlin.charArrayOf(12618), Kotlin.charArrayOf(12619), Kotlin.charArrayOf(12620), Kotlin.charArrayOf(12621), Kotlin.charArrayOf(12622)];
  duals = [Kotlin.charArrayOf(12593), Kotlin.charArrayOf(12593, 12593), Kotlin.charArrayOf(12593, 12613), Kotlin.charArrayOf(12596), Kotlin.charArrayOf(12596, 12616), Kotlin.charArrayOf(12596, 12622), Kotlin.charArrayOf(12599), Kotlin.charArrayOf(12600), Kotlin.charArrayOf(12601), Kotlin.charArrayOf(12601, 12593), Kotlin.charArrayOf(12601, 12609), Kotlin.charArrayOf(12601, 12610), Kotlin.charArrayOf(12601, 12613), Kotlin.charArrayOf(12601, 12599), Kotlin.charArrayOf(12601, 12621), Kotlin.charArrayOf(12601, 12622), Kotlin.charArrayOf(12609), Kotlin.charArrayOf(12610), Kotlin.charArrayOf(12610, 12610), Kotlin.charArrayOf(12610, 12613), Kotlin.charArrayOf(12613), Kotlin.charArrayOf(12613, 12613), Kotlin.charArrayOf(12615), Kotlin.charArrayOf(12616), Kotlin.charArrayOf(12616, 12616), Kotlin.charArrayOf(12618), Kotlin.charArrayOf(12619), Kotlin.charArrayOf(12620), Kotlin.charArrayOf(12621), Kotlin.charArrayOf(12622), Kotlin.charArrayOf(12623), Kotlin.charArrayOf(12624), Kotlin.charArrayOf(12625), Kotlin.charArrayOf(12626), Kotlin.charArrayOf(12627), Kotlin.charArrayOf(12628), Kotlin.charArrayOf(12629), Kotlin.charArrayOf(12630), Kotlin.charArrayOf(12631), Kotlin.charArrayOf(12631, 12623), Kotlin.charArrayOf(12631, 12624), Kotlin.charArrayOf(12631, 12643), Kotlin.charArrayOf(12635), Kotlin.charArrayOf(12636), Kotlin.charArrayOf(12636, 12627), Kotlin.charArrayOf(12636, 12628), Kotlin.charArrayOf(12636, 12643), Kotlin.charArrayOf(12640), Kotlin.charArrayOf(12641), Kotlin.charArrayOf(12641, 12643), Kotlin.charArrayOf(12643)];
  toStrongCho = mapOf([to(toBoxedChar(12593), Kotlin.charArrayOf(12594, 12619)), to(toBoxedChar(12599), Kotlin.charArrayOf(12600, 12620)), to(toBoxedChar(12610), Kotlin.charArrayOf(12611, 12621)), to(toBoxedChar(12613), Kotlin.charArrayOf(12614)), to(toBoxedChar(12616), Kotlin.charArrayOf(12617, 12618))]);
  complexJong = Kotlin.charArrayOf(12595, 12597, 12598, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12612);
  toComplexJong = mapOf([to(toBoxedChar(12593), Kotlin.charArrayOf(12594, 12595)), to(toBoxedChar(12596), Kotlin.charArrayOf(12597, 12598)), to(toBoxedChar(12601), Kotlin.charArrayOf(12603, 12604, 12605, 12606, 12607, 12608)), to(toBoxedChar(12610), Kotlin.charArrayOf(12612)), to(toBoxedChar(12613), Kotlin.charArrayOf(12614))]);
  numbers = '0\u2776\u2777\u2778\u2779\u277A\u277B\u277C\u277D\u277E0\u2780\u2781\u2782\u2783\u2784\u2785\u2786\u2787\u27880\u278A\u278B\u278C\u278D\u278E\u278F\u2790\u2791\u27920\u4E28\u5DF1\u5F50\u4E29\u4E0267\u65E59';
  symbols = '\u272F\u273F\u2740\u273F\u2741\u262A\u272A\u272B\u272C\u272D\u272E\u272F\u2730\u273B\u273C\u273D\u273E\u2743\u2762\u2763\u2765\u2766\u2767\u27B3\u27B4\u27B5\u27B6\u27B7\u27B8\u27B9\u27BA\u27BB\u27BC\u2745\u2746\u10E6\u275E\u2764\u2763\u2767\u2766\u2729\u272A\u272B\u272C\u272D\u272E\u272F\u2730\u2731\u2732\u2733\u2734\u2735\u2737\u2736\u2738\u2739\u273A\u273B\u273C\u273D\u273E\u273F\u2740\u2741\u2742\u2743\u2744\u2745\u2746\u2747\u2748\u2749\u274A\u274B\u274D\u274F\u2750\u2751\u2752\u2756\u2758\u2759\u275A\u275B\u275C\u275D\u275E\u2761\u2762\u2763\u2764\u2765\u2766\u2767\u2794\u2798\u2799\u279A\u279B\u279C\u279D\u279E\u279F\u27A0\u27A1\u27A2\u27A3\u27A4\u27A5\u27A6\u27A7\u27A8' + '\u27A9\u27AA\u27AB\u27AC\u27AD\u27AE\u27AF\u27B1\u27B2\u27B3\u27B4\u27B5\u27B6\u27B7\u27B8\u27B9\u27BA\u27BB\u27BC\u27BD\u27BE\u2605\u2606\u2609\u260E\u260F\u261C\u261E\u262C\u2640\u2642\u2701\u2702\u2703\u2704\u2706\u2707\u2708\u2709\u270C\u270D\u270E\u270F\u2710\u2711\u2712\u2609\u260E\u260F\u261C\u261E\u262C\u2640\u2642\u2654\u2655\u2656\u2657\u2658\u2659\u265A\u265B\u265C\u265D\u265E\u10DA\u265B\u0E51\u2727\u0B86\u0B87\u0B88\u0B8A\u0B8E\u0B8F\u0B90\u0B90\u0B93\u0B94\u25CC\u0B82 \u0B83\u25CC\u0BBE \u25CC\u0BBF\u25CC\u0BD7 \u0B99\u0B9C\u0B9E\u0BA3\u0BA8\u0BA9\u0BAE\u0BAF\u0BB1\u0BB2\u0BB3\u0BB4\u0BB5' + '\u0BB8\u0BB9\u0BE7\u0BE8\u0BE9\u0BEA\u0BEB\u0434\u256C\u2609\u10E6\u2764\u0B90\u25CC\u0BBF\u0394\u2764\u02C7\u067C\u0E51\u06E9\u06DE\u06E9\u273F\u273E\u270C\u270D\u270E\u270F\u2740\u0E34\u270C\u2710\u226B\xBD\xBF\u272A\u2605\u2606\u260E\u260F\u261E\u261C\u2710\u2711\u2712\u2714\u2715\u2716\u2717\u2718\u2719\u271A\u271B\u271C\u271D\u271E\u272F\u272E\u272C\u272B\u272A\u2727\u2726\u2725\u2724\u2723\u2722\u2721\u2720\u2730\u2731\u2730\u2740\u2742\u2744\u2745\u2749\u274A\u274B\u2763\u2764\u2766\u2667\u2664\u047C\u2642\u2640\u266D\u2718\u062A\xDC\u273D\u265A\u265B\u265C\u265D\u265E\u265F\u2654\u2655\u2656\u265D\u029A\u025E\u047C\u10E6\u2730\u2731\u2740\u2741\u2745\u2763\u273F\u273E\u2765' + '\u262C\u2740\u2654\u2656\u2658\u2659\u2640\u2642\u25C8\u047C\u265A\u265B\u265C\u265D\u265E\u265F\u2765\u2762\u2729\u272E\u272F\u2735\u2749\u2742\u2765\u265A\u265B\u03B5\u2658\u2659\u03B5\u0457\u0437\u2680\u2681\u2682\u2683\u2684\u2685\u2727\u2665\u2665';
  Kotlin.defineModule('spammaker', _);
  return _;
}(typeof spammaker === 'undefined' ? {} : spammaker, kotlin);

//# sourceMappingURL=spammaker.js.map
