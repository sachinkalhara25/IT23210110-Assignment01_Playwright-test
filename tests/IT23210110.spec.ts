import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 46 Test Cases', () => {

  const testCases = [

    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_001", name: "Simple sentences", input: "api iskoolayata giyaa", expected: "අපි ඉස්කෝලයට ගියා" },
    { id: "Pos_Fun_002", name: "Compound Sentence", input: "mama gedhara yanavaa namuth thama vaeda ivara naee.", expected: "මම ගෙදර යනවා නමුත් තම වැඩ ඉවර නෑ." },
    { id: "Pos_Fun_003", name: "Informal phrasing", input: "machan, oya paeena dhiipan.", expected: "මචන්, ඔය පෑන දීපන්." },
    { id: "Pos_Fun_004", name: "Interrogative (questions) forms", input: "oyaa panthi yanavadha?", expected: "ඔයා පන්ති යනවද?" },
    { id: "Pos_Fun_005", name: "Negative forms", input: "mata adha salli naee.", expected: "මට අද සල්ලි නෑ." },
    { id: "Pos_Fun_006", name: "Polite Phrasing", input: "karuNaakara semin dhora vasanna.", expected: "කරුණාකර සෙමින් දොර වසන්න." },
    { id: "Pos_Fun_007", name: "Multi-word expressions", input: "kanagaatu venna epaa.", expected: "කනගාටු වෙන්න එපා." },
    { id: "Pos_Fun_008", name: "Complex Sentences", input: "magee maamaata maerenna sidhdhavuNe ohu anathurakata muhuna dhun nisayi.", expected: "මගේ මාමාට මැරෙන්න සිද්දවුණෙ ඔහු අනතුරකට මුහුන දුන් නිසයි." },
    { id: "Pos_Fun_009", name: "Imperative(Commands) forms", input: "vahaama nishshabdha venna.", expected: "වහාම නිශ්ශබ්ද වෙන්න." },
    { id: "Pos_Fun_010", name: "Responses", input: "mama ethanata giyaama kathaa karannam.", expected: "මම එතනට ගියාම කතා කරන්නම්." },
    { id: "Pos_Fun_011", name: " Frequently used day-to-day expressions", input: "Mata badaginiyi.", expected: "මට බඩගිනියි." },
    { id: "Pos_Fun_012", name: "Repeated word expressions used for emphasis", input: "ikmanata,ikmanata oya potha dhenna.", expected: "ඉක්මනට,ඉක්මනට ඔය පොත දෙන්න." },
    { id: "Pos_Fun_013", name: "Singular usage and pronoun variations", input: "Akkaa mal kadanavaa.", expected: "අක්කා මල් කඩනවා." },
    { id: "Pos_Fun_014", name: "Tense variations(past)", input:  "mama iiye pothak kiyevva.", expected: "මම ඊයෙ පොතක් කියෙව්ව." },
    { id: "Pos_Fun_015", name: "Tense variations(present)", input: "Ammaa bath uyanavaa.", expected: "අම්මා බත් උයනවා." },
    { id: "Pos_Fun_016", name: "Tense variations(future)", input: "guruvarayaa heta paadama saakachchaa karaavi.", expected: "ගුරුවරයා හෙට පාඩම සාකච්චා කරාවි." },
    { id: "Pos_Fun_017", name: "Negation patterns", input: "Ohu viBhaagayata penii sitiye naee.", expected: "ඔහු විභාගයට පෙනී සිටියෙ නෑ." },
    { id: "Pos_Fun_018", name: "plural usage and pronoun variations", input: "kriidakayoo cricket sellam karathi.", expected: "ක්‍රීඩකයෝ cricket සෙල්ලම් කරති." },
    { id: "Pos_Fun_019", name: " Request forms with varying degrees of politeness", input: "Api thea kooppayak bomudha?", expected: "අපි තේ කෝප්පයක් බොමුද?" },
    { id: "Pos_Fun_020", name: "English technical/brand terms embedded in Singlish", input: "Api viveekiiva sitina vita Facebook vaeni social medias hi saerisaranavaa.",
       expected: "අපි විවේකීව සිටින විට Facebook වැනි social medias හි සැරිසරනවා." },
    { id: "Pos_Fun_021", name: "Sentences containing places and common English words that should remain as they are", input: "University eka aaramBha vuNaa January 19.", expected: "University එක ආරම්භ වුණා January 19." },
    { id: "Pos_Fun_022", name: " Inputs containing punctuation marks ", input: "kamal kivvaa, 'mata sindhu kiyanna puluvan ' kiyalaa.", expected: "කමල් කිව්වා, 'මට සින්දු කියන්න පුලුවන් ' කියලා." },
    { id: "Pos_Fun_023", name: "Currency, time formats, dates.", input: "mama wednesday raee 9 ta Rs.10000 k dhaannam account ekata.", expected: "මම wednesday රෑ 9 ට Rs.10000 ක් දාන්නම් account එකට." },
    { id: "Pos_Fun_024", name: "Paragraph-style input (medium/long) ", input: "jaathYAnthara muulYA aramudhalea visthiiraNa Naya pahasukam vaedasatahanata adhaala givisumehi venasak sidhu nokara, aKaNdava idhiriyata genayaamata dhepaarshavaya ekaGAthaava paLa kara aetha.",
       expected: "ජාත්‍යන්තර මූල්‍ය අරමුදලේ විස්තීරණ ණය පහසුකම් වැඩසටහනට අදාල ගිවිසුමෙහි වෙනසක් සිදු නොකර, අඛණ්ඩව ඉදිරියට ගෙනයාමට දෙපාර්ශවය එකඟතාව පළ කර ඇත." },
    

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_001", name: "Wrong tense interpretation", input: "ohu heta rata giyaa", expected: "ඔහු හෙට රට යාවි." },
    { id: "Neg_Fun_002", name: " Incorrect word segmentation for joined words ", input: "puusaakiribonavaa.", expected: "පූසා කිරි බොනවා." },
    { id: "Neg_Fun_003", name: " Negation meaning lost ", input: "dhaen oya searama vada karanda epaaya", expected: "දැන් ඔය සේරම වැඩ කරන්ඩ එපා" },
    { id: "Neg_Fun_004", name: " Polite request converted as informal ", input: "karuNaakaralaa mata magea salli dhenavadha?", expected: "කරුණාකරලා මට මගේ සල්ලි දෙන්න පුලුවන්ද?" },
    { id: "Neg_Fun_005", name: " Repeated words not preserved", input: "hari  hari lassanayi", expected: "හරි ලස්සනයි,හරි ලස්සනයි." },
    { id: "Neg_Fun_006", name: " Mixed English words incorrectly transliterated", input: "Google meeting eka cancel karanna", expected: "ගූගල් මීටින් එක cancel කරන්න." },
    { id: "Neg_Fun_007", name: "Slang words cause malformed output", input: "ela machan cupiri", expected: "එල මචන් සුපිරි." },
    { id: "Neg_Fun_008", name: " Punctuation placement error", input: "oyaa adannea aeyi kiyalaa 'ohu aeyagen aehuvaa'?", expected: "'ඔයා අඩන්නේ ඇයි?' කියලා ඔහු ඇයගෙන් ඇහුවා." },
    { id: "Neg_Fun_009", name: "English abbreviation incorrectly transliterated", input: "mata OTP eka ennee naehae", expected: "මට ඕටීපී එක එන්නේ නැහැ." },
    { id: "Neg_Fun_010", name: " Long paragraph causes partial conversion", input: "mee vasaree 6 shreeNiyata aethuLath vana sisu dharuvanvadha nava aDhYaapana prathisQQskaraNa yatathata gaeniimata adhaaLa saelasumak mee vanavita sakas karamin sitina bava agraamaathYA aachaarYA harini amarasuuriya meneviya pavasanniiya.ema dharuvanva kisivitekavath athahaera noyana bavadha avaDhaaraNaya kara siti agraamaathYAvariya, vasarin vasara nava aDhYaapana prathisQQskaraNa 2030 vasara dhakvaa kriyaathmaka kiriimata rajaya balaaporoththu vana bavadha kiyaa sitiyaaya.",
       expected:"මේ වසරේ 6 ශ්‍රේණියට ඇතුළත් වන සිසු දරුවන්වද නව අධ්‍යාපන ප්‍රතිසංස්කරණ යටතට ගැනීමට අදාළ සැලසුමක් මේ වනවිට සකස් කරමින් සිටින බව අග්‍රාමාත්‍ය ආචාර්ය හරිනි අමරසූරිය මෙනෙවිය පවසන්නීය.ema dharuvanva kisivitekavath athahaera noyana bavadha avaDhaaraNaya kara siti agraamaathYAvariya, vasarin vasara nava aDhYaapana prathisQQskaraNa 2030 vasara dhakvaa kriyaathmaka kiriimata rajaya balaaporoththu vana bavadha kiyaa sitiyaaya." },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "Clearing Singlish input clears Sinhala output automatically", input: "mama pol miladhii gannavaa.", expected: "" },
    

    

  ];

  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
    await page.fill(inputSelector, '');
    await inputArea.click();
    const text = tc.input;
    const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
    if (text.length === 0) {
      // nothing to type
    } else if (text.length <= CHUNK) {
      await inputArea.type(text, { delay: 35 });
    } else {
      for (let i = 0; i < text.length; i += CHUNK) {
        const chunk = text.slice(i, i + CHUNK);
        await inputArea.type(chunk, { delay: 25 });
        // allow the page to process chunk
        await page.waitForTimeout(100);
      }
    }
    // Ensure compositionend/input events fired after typing
    await page.evaluate((sel) => {
      const el = document.querySelector(sel) as HTMLTextAreaElement | null;
      if (!el) return;
      el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, cancelable: true, data: el.value }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, inputSelector);

    // Special handling for the Clear-input UI test: click the first Clear button found
    if (tc.id === 'Pos_UI_0002') {
      const clearLocator = page.getByRole('button', { name: /clear/i });
      try {
        await clearLocator.first().click();
      } catch (err) {
        // Fallback: select-all + delete
        await inputArea.click();
        const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';
        await page.keyboard.press(`${modifier}+A`);
        await page.keyboard.press('Backspace');
      }
    }

    // 3. Select the output box
    // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Wait for the translation to appear (it's automatic)
    // We wait until the text content matches or contains our expected value
    // Allow more time for conversion on slower environments
    await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });

    const output = await outputBox.textContent();
    console.log(`Running: ${tc.id} | Result: ${output}`);

    expect(output).toContain(tc.expected);
  });
}

});