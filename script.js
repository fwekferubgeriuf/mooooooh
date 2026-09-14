/* ==========================================
   موقع حوحايت كلبي
   النسخة الأساسية القديمة
   + قسم 8
   + أقفال الأقسام المطلوبة
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     العناصر
  ========================= */

  const introScreen =
    document.getElementById("introScreen");

  const cinematicTransition =
    document.getElementById("cinematicTransition");

  const site =
    document.getElementById("site");

  const menuSection =
    document.getElementById("menuSection");

  const sectionView =
    document.getElementById("sectionView");

  const cardsGrid =
    document.getElementById("cardsGrid");

  const backButton =
    document.getElementById("backButton");

  const openedIcon =
    document.getElementById("openedIcon");

  const openedTitle =
    document.getElementById("openedTitle");

  const openedDescription =
    document.getElementById("openedDescription");

  const sectionContent =
    document.getElementById("sectionContent");

  const musicPlayer =
    document.getElementById("musicPlayer");

  const songPlayer =
    document.getElementById("songPlayer");

  const musicPlay =
    document.getElementById("musicPlay");

  const musicTitle =
    document.getElementById("musicTitle");

  const musicTime =
    document.getElementById("musicTime");

  const progressArea =
    document.getElementById("progressArea");

  const progressFill =
    document.getElementById("progressFill");


  /* =========================
     النجوم
  ========================= */

  const stars =
    document.getElementById("stars");

  if (stars) {

    for (let i = 0; i < 140; i++) {

      const star =
        document.createElement("span");

      star.className =
        "star";

      star.style.left =
        Math.random() * 100 + "%";

      star.style.top =
        Math.random() * 100 + "%";

      stars.appendChild(star);

    }

  }


  /* =========================
     النجوم الصاعدة
  ========================= */

  if (stars) {

    function createRisingStar() {

      const star =
        document.createElement("span");

      star.className =
        "rising-star";

      star.style.left =
        Math.random() * 100 + "%";

      const size =
        1 + Math.random() * 2.2;

      star.style.width =
        size + "px";

      star.style.height =
        size + "px";

      const duration =
        7 + Math.random() * 7;

      star.style.animationDuration =
        duration + "s";

      stars.appendChild(star);

      setTimeout(
        () => star.remove(),
        (duration + 1) * 1000
      );

    }

    for (let i = 0; i < 28; i++) {

      setTimeout(
        createRisingStar,
        i * 220
      );

    }

    setInterval(
      createRisingStar,
      420
    );

  }


  /* =========================
     القلوب
  ========================= */

  const floatingHearts =
    document.getElementById(
      "floatingHearts"
    );

  if (floatingHearts) {

    function createFloatingHeart() {

      const heart =
        document.createElement("span");

      heart.className =
        "floating-heart";

      heart.textContent =
        Math.random() > .5
          ? "♥"
          : "♡";

      heart.style.left =
        Math.random() * 100 + "%";

      floatingHearts.appendChild(
        heart
      );

      setTimeout(
        () => heart.remove(),
        9000
      );

    }

    for (let i = 0; i < 20; i++) {

      setTimeout(
        createFloatingHeart,
        i * 300
      );

    }

    setInterval(
      createFloatingHeart,
      700
    );

  }


  /* =========================
     فتح الموقع
  ========================= */

  let opening = false;

  window.openSite = function () {

    if (opening) return;

    opening = true;

    const button =
      document.getElementById(
        "enterButton"
      );

    if (button) {

      button.disabled = true;

      button.style.pointerEvents =
        "none";

    }

    introScreen.classList.add(
      "hide"
    );

    setTimeout(
      () => {

        cinematicTransition.classList.remove(
          "fade-out"
        );

        cinematicTransition.classList.add(
          "active"
        );

      },
      650
    );

    setTimeout(
      () => {

        site.classList.add(
          "show"
        );

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      },
      2700
    );

    setTimeout(
      () => {

        cinematicTransition.classList.add(
          "fade-out"
        );

      },
      4200
    );

    setTimeout(
      () => {

        cinematicTransition.style.display =
          "none";

        introScreen.style.display =
          "none";

      },
      6000
    );

  };


  /* =========================
     بيانات الأقسام
  ========================= */

  const sections = [

    {
      id: 1,
      title: "البداية",
      description: "أول كلمة من القلب 💗",
      icon: "🌙",

      message: `هذا كله الج إنتِ وبس،
أروحنلج فدوة يا بعد روحي،
الله يحفظج إلي يا بعد جلاويي. 💗

كل عام وإنتِ بألف ألف ألف خير،
ويا رب أحتفل بيج بالواقع وأكون يمج بهاليوم.

أحبج حيل يا حوحايت كلبي. 💗🌙`
    },


    {
      id: 2,
      title: "اغنيه حلوه الج",
      description: "أغنية حلوة خصيصاً إلج 🎵",
      icon: "🎵",

      song: "music/song2.mp3",

      songTitle:
        "أغنية حلوة لحوحو 💗",

      message: `هاي الأغنية إلج وحدج. 💗
خليها وياج وإنتِ تتصفحين الهدية.`
    },


    {
      id: 3,
      title: "ذكرايات",
      description: "صورنا وذكرياتنا 📸",
      icon: "📸",

      song:
        "music/song3.mp3",

      songTitle:
        "ذكرياتنا 💗",

      photos: true,

      message: `هاي مو مجرد صور...
كل صورة بيها ذكرى وحكاية من حكاياتنا. 💗`
    },


    {
      id: 4,
      title: "كلام بسيط لحوحو",
      description: "كم كلمة من القلب 💗",
      icon: "💌",

      song:
        "music/song4.mp3",

      songTitle:
        "كلام بسيط لحوحو 💗",

      message: `كل عام وإنتِ بخير حوحو. 💗
ما تعرفين شكد أني فرحان، ميت من فرح والله... يعني أني بمكان وبوضع ما جنت أتخيل إني بيوم أوصله، حوصلة حوراء. ❤️
أحبج حيل ونبي أموت عليج، بحيث يعني ما عرفت أعبر عن حبي وفرحتي، بس إنو أسويلج ماب وأسويلج موقع، وهذا شي لا يُذكر كدام اللي قدمتي إلي.
الله يحفظج إلي يا روحي، إنتِ. 💗
أحبج حيل حيل حيل...
مممممممممممممممممممممح`
    },


    {
      id: 5,
      title: "اللغز",
      description: "عندي شي صغير أريدج تحلينه 🔐",
      icon: "🔐",

      riddle:
        "2709120",

      correct:
        "2007912",

      secret:
        "2026526"
    },


    {
      id: 6,
      title: "لعبة ئلوب",
      description: "هسه دور القوس والسهم 🎯💗",
      icon: "🏹",

      game: true
    },


    {
      id: 7,
      title: "الرساله الثانويه",
      description: "رسالة ثانية من كلبي إلج 💌",
      icon: "💌",

      song:
        "music/song7.mp3",

      songTitle:
        "رسالة ثانية لحوحو 💗",

      /* قفل */
      lockCode:
        "2026526",

      message: `حوحو وما أدراك ما حوحو... 💗

بعيد عن إنو اليوم عيد ميلادج، وأني متعرفين بيا شكد فرحان إنو أدري لحيت هههههههههه 😂😂😂

بس والله شي عظيم، ممتعود أعاید أحد، ممتعود أعاید أحد يعني شلون أكلج... أحبج، إنتِ مو أي أحد، إنتِ الأحد وثنن وثلاثاء أربعاء خميس جمعه سبت ها ها ها ها 😂😂😂

أي المهم، بعد هاي نكتة تافهة 😂

أحب أكلج وأحب أوصلج إنتِ شكد عزيزة عليه من خلال هذا العمل البسيط. 💗

إي ونبي الج، هذا شي بسيط، لأن اللي قدمتي إلي أكثر من موقع أو ماب، إنتِ قدمتي إلي حياة ثانية... حياة حرفياً ممتخيلها شلون أو شلون أعيشها.

وجنت يعني ما أدري... مرحلة ضياع كبرى، إنتِ يعني حرفياً طلعتيني من كبر... إي كبر هو أقرب وصف أكدر أوصف بي حالتي قبل من دخلتي لحياتي.

شلون أكلج... مثل ملاك نزل على مكان ميت، والمكان ويا دخول الملاك، اللي هوه إنتِ، صار كلش حلو. 💗

حرفياً شي صار أشبه بالخيال.

دائماً أتمنى يعني أشوفج بالواقع وأحضنج حضن ما بعده حضن، لأن صراحةً اللي جاي اسوي من عدا إنو مو من مقامـج، لأن إنتِ مقامـج حيل عالي وشي رهيب.

أريد أحضنج لأن أريد أوصف حبي، لأن هذن شغلات ثقي هيه عشره بالمية من حبي وامتناني الج. 💗🥹

آسف إذا زعلتج بيوم أو بدقيقة أو بثانية، سواء جنت مظلوم أو لا.

كملنا وعدينا صعب مشاكل وضوجات، وصلنا لمرحلة خلص كلبنا قفل... لا أني أريد غيرج ولا إنتِ تريدين غيري. ❤️

أحب أكلج من هذا الكلام البسيط، إنو أني يا حوراء، أني كابو ذوذ، حيل ممتن الج وحيل أحبج. 💗

وكل عام وإحنا سوه، ويا رب أشوفنج بأعلى مراتب، ونتزوج ونجيب ننانين صوغيرين. 🥹❤️

وأكيد أبقى وأضل طول عمري ابنـج، وإنتِ مامي. 🥹❤️

مع حبي،
أبو ذوذ ❤️🥹`
    },


    {
      id: 8,
      title: "الرساله الاساسيه",
      description: "رسالة أساسية 💗",
      icon: "💗",

      song:
        "music/song8.mp3",

      songTitle:
        "رسالة حوحو 💗",

      message: `حوحو حبيبه گلبي كل عام وانتي بالف خير يا روحي ونبي فرحان حيل ونبي هيج حطير من فرحه الله لا يحرمني منج يروحي الله يحفظج الي ونبي يعني فول فرحه وهذا شي ونبي قليل بحقج ادري وشي بسيط بلنسبه الج ولا انتي شني ولج لو احيبلج دنيا هسه كلها وانطيج ياها هم ما اوفي حقج حوحو يا روحي انتي حيل ساعدتيني حيل وكفتي وياي بهواي مواقف جنتي الداعم الاول والاخير الي جنت احسني ضايع بدونج كل يوم كل دقيقه تمر بلياج اني اضيع احسن روحي بمكان مو مكاني حيل يعني اشتاقلج بوكتها واشتاقلج حتى واني احجي وياج اي والله اشتاقلج بكل وكت واضل متلهف عليج واضلن انتضر رساله منج غير هيج على احر من جمر لان رسالتج حرفيا تكفي تعيشني احلى عيشه بهل دنيا اي ونبي انتي شي لا يتعوض ولا يتكرر وصدك حمار ابن حمار الي يفرط بيج تعرفين شكد اتمنى نتزوج هسه ومجيب اطفال صغار وخصوصا اريد يطلعون عليج ونصير ولدج اييي يابا اني هم ابنج واضل ابنج تعرفين حوحو ونبي مرات اصفن واكول هسه هيج انسانه عظيمه وماكو منها شلون يعني حبتني ونبي اشوفج صدك اعظم انتصاراتي لو دنيا ترجع وتلف ودور انتي اختياري الاول والاخير ولو ادري من زمان حلتقي بيج والله ولا اتكئب ولا يصير بيا شي اي ونبي تعرفين ليش لان انتي موستحيل يجي منج ثنين المهم يابا احبج حب مصاير احبج مثل شلون اكلج شايفه جاي بدون هيل اي احتاجج هيج ونبي غير احبج بحيث واني احجي وياج اضل متلهف عليج حوراء انتي انسانه عظيمه اشوفج واشوف انجازاتج واشوف قوتج وتركيزج وتحاولين تفرفشين الوضع وتضحكيني بكل طرق ونبي حوراء هذا شي لو طول عمري حقدملج مراح اكدر اوفيلج الشي الي جاي تقدمي الي حوراء اني جنت انسان ميت بس جسد انتي اجيتي وخليتي بيا روح طبيعيه مو روح كئيبه وما الها خلك للعيشه وتعرفين شكد اني فرحان اليوم كل لحضه حتجي من تشوفين الموقع وشغلي كل تعب احسه تحول فرح كل تعب وكل لحضه احسها صارت شي ميتعوض وهوه صدك وكت وياج ميتعوض والله احبج واضل احبج طول عمري واني لو الج لو الج متسحيل لغيرج احبج حيل حوحو ومن هنا اريدج تعرفين شغله يمكن اني ما گلتها الج بهالشكل قبل بس كلشي سويته الج وكل تفصيله وكل تعب وكل سهر وكل لحظه قعدت بيها افكر شلون اخلي هالمكان يطلع حلو الج جانت كلها لان اريد اشوفج تفرحين اريد اشوفج وانتي تفتحين الموقع وتگعدين تشوفين كلشي وتضحكين وتگولين شنو هذا المجنون شمسوي واني من هسه اتخيل هاي اللحظه واعتقد هاي اللحظه وحدها تسوى عندي كل التعب الي صار واني ما اريد منج تعرفين شكد تعبت حتى ما احسسج بثقل التعب اريدج بس تشوفين النتيجه وتشوفين الفرحه لان بالنهايه هذا كله الج ومن حقج تشوفين شي يليق بيج ولو اني اعرف ان الشي الي يليق بيج اكبر من هذا بمراحل بس شسوي هذا الي گدرت عليه هسه وبعدين يمكن ما اكدر اعطيج الدنيا كلها بس اكدر كل يوم احاول اصنع لج جزء صغير من الدنيا الي تستاهلينها وانتي تعرفين اني مرات ما اعرف اعبر عن الاشياء الي بداخلي بالطريقه الصح بس وياج احس الكلام يطلع وحده وحده حتى لو ملخبط وحتى لو ما مرتب لان گلبي من يحچي عنج ما يعرف يرتب كلامه حوراء انتي صرتي من تفاصيل يومي بشكل ما اكدر اتخيله قبل لا اعرفج صرتي الشي الي اريد احجيله كلشي والشي الي اذا صار وياي موقف اريد اول شخص يعرفه انتي والشي الي اذا شفت شي يضحك اكول لو حوراء هنا جان ضحكت وياي واذا شفت شي حلو اتمنى تشوفينه واذا صار عندي يوم تعبان احس بس حچي بسيط وياج يگدر يغير كلشي مو لان انتي مطالبه تصلحين يومي لا بس لان وجودج نفسه يفرق وياي وهذي يمكن من اكبر النعم الي صارت بحياتي واني مرات من اسمع صوتج او اشوف رسالتج احس ان الدنيا رجعت لمكانها الطبيعي واني اعرف ان الكلام يمكن يبين بسيط بس والله عندي مو بسيط لان انتي مو انسانه عاديه بالنسبة الي وانتي مو شخص مر بحياتي وخلاص انتي شخص ترك اثر وبقى الاثر يكبر كل يوم اكثر واني كل ما تمر الايام اكتشف شكد انتي قريبه مني اكثر وشكد احب تفاصيلج اكثر وحتى الاشياء الي يمكن غيري ما ينتبه الها اني انتبه الها لان اني مهتم بيج وبكلشي يخصج واني احب ضحكتج واحب سوالفج واحب طريقة حجيج واحب من تتحمسين لشي واحب من تفرحين واحب من تگولين شي وتبقين مستمره بالحچي لان احس الدنيا كلها صايره اخف وانتي تحچين وياي ومرات حتى من تزعلين او تضوجين ما اعرف شسوي غير ابقى يمج لان ما اريدج تواجهين كلشي وحدج وانتي طول الوقت جنتي واقفه وياي فشلون ما اريد اوقف وياج وأُحِبُّكِ حُبًّا لَو تَجَسَّدَ نُورُهُ لَأَضاءَ لَيلَ العاشِقينَ سَنا وَبَدرَا وأَراكِ في عَينِ الزَمانِ قَصيدَةً تَبقى وَإِن بَلِيَت سِنينٌ أَلْفَ دَهرَا وهذا الشعر مهما كان قوي يبقى ما يوصل لكلشي بداخلي الج لان الشعر يگدر يوصف جمال او شوق او حب بس اني وياج احس الموضوع اكبر من مجرد وصف لان انتي صرتي عندي معنى مو بس شخص وصرتي ذكرى حلوه بكل يوم وشي اتعلق بيه من دون ما احس واني مرات افكر شلون اشرح الج شكد وجودج غيرني بس ما الكه كلام يكفي لان قبلج جانت هواي اشياء تمر علي وما اهتم الها وهسه صرت اريد اشاركج كلشي حتى الاشياء الصغيرة وصرت افرح اذا فرحتي وازعل اذا زعلتي واهتم اذا تعبتي وهاي كلها اشياء يمكن انتي ما تحسبينها بس اني احسبها لان انتي تهميني وحوراء اريدج تعرفين انو ما اريد منج تكونين شي غير نفسج لا تغيرين من روحج ولا من طريقة حجيج ولا من ضحكتج ولا من اي تفصيله بيج حتى ترضين احد لان اني احبج مثل ما انتي واني اريدج تبقين حوراء الي عرفتها مو حوراء الي لازم تثبت نفسها لاحد وانتي اصلا ما تحتاجين تثبتين شي لان مكانج عندي معروف من زمان وأَنتِ الَّتي في القَلبِ عَهدٌ لا يَخونُهُ زَمانٌ وَلا تَطوِيهِ أَيّامٌ وَلا سَنَنُ إِذا تَغَيَّرَ كُلُّ شَيءٍ حَولَنا فَأَنتِ في قَلبيَ الثّابِتُ الَّذي لا يَندَثِرُ واني من اتخيل المستقبل مرات اضحك وحدي لان اتخيل شكد راح تتغير اشياء وشكد راح نكبر وشكد راح تصير عندنا سوالف وذكريات اكثر واتخيل يوم نقعد ونفتح اشياء قديمه ونضحك عليها ونشوف الموقع هذا ونكول شلون جانت بداياتنا وشلون جان ذوالفقار يسوي كل هالشغلات لحوراء واني اريد هالذكرى تبقى الج مو لان الموقع مهم بس لان اريدج تتذكرين الشعور الي جان وراه اريدج تتذكرين ان اكو شخص جان فرحان وهوه يسوي لج هذا الشي واكو شخص جان يتمنى بس يشوفج تبتسمين وانتي تشوفينه وأُرِيدُ عُمراً لا أُرَتِّبُهُ سِوى بِقُربِكِ حَيثُ لا يَبقى لِغَيرِكِ مَوضِعُ فَإِن سَأَلوا عَنِ الحُبِّ الَّذي أَسكَنَ الفُؤادَ فَقُولي حُبٌّ بِهِ أَحيَا وَبِهِ أَطمَئِنُ وحوراء اني اتمنى من كل گلبي انو كل سنة تجي عليج تكون احلى من الي قبلها واتمنى كل سنة تحققين بيها شغله جديدة واتمنى كل مرة تحسين الدنيا ضايجه عليج تتذكرين ان عندج شخص يگدر يسمعج حتى لو ما عنده حل واتمنى كل مرة تشكين بنفسج تتذكرين ان اني اشوف بيج اشياء يمكن انتي ما تشوفينها بنفسج واشوف قوتج واشوف شلون تحاولين وشلون ما تستسلمين بسهولة واشوف شكد عندج قدرة تتحملين وتكملين واني فخور بهالشي بشكل ما تتصورينه ويمكن مرات ما اكولها الج بس والله فخور بيج هواي واذا اكو شي اتمنى اكون بيه وياج فهوه اني ابقى اشوفج وانتي تحققين الي تريدينه واني ابقى اول واحد يفرح لج حتى لو ما اكدر اسوي شي غير اني افرح وأَنتِ لِقَلبيَ مِن دُنيايَ مَكرُمَةٌ وَأَنتِ لِرُوحيَ مِن أَحلامِها سَكَنُ لَو أَنَّني أَملِكُ الأَيّامَ أَجمَعَها لَجَعلتُ أَيّامَ عُمرِي كُلَّها لَكِ حَسَنُ يعني حوحو شكد ما احجي وشكد ما اكتب راح ابقى احس اني ما گلت كافي لان كل ما اكتب شغله اتذكر شغله ثانية وكل ما اوصف شعور اتذكر شعور اكبر واني ما اريد اخلي الكلام كله حب وبس اريدج تعرفين ان اني اشوفج انسانه تستاهل الاحترام قبل الحب واشوفج انسانه تستاهل التقدير قبل اي شي واشوف شكد انتي قوية وشكد عندج عقل وتركيز وشكد تحاولين حتى من تكونين تعبانة وهاي الاشياء كلها تخلي حبي الج مو بس بسبب مشاعري لا بسبب شخصج نفسه وبسبب حوراء الي عرفتها وبسبب كل موقف وكل كلمة وكل مرة وقفتي وياي بيها واني مهما گلت شكرا ما راح تكفي لان اكو اشياء الواحد ما يعرف شلون يشكر عليها بس يكدر يحفظها بگلِبه واني حافظ هواي اشياء الج بگلبي حتى يمكن انتي نسيتيها بس اني ما نسيتها لان كل موقف حلو وياج عندي اله قيمة واني اريدج تعرفين ان وجودج علمني اشياء هواي وخلاني اشوف الحياة بطريقة غير وخلاني اعرف ان الانسان مرات يحتاج شخص واحد بس حتى يحس ان الدنيا مو ضده كلها وان هذا الشخص ممكن يكون سبب حتى يكمل واني هذا الشي حسيت بيه وياج وانتي ما طلبتي مني شي مقابل هالشي ولهذا احترمج واحبج اكثر وأَنا الَّذي لَمّا رَأَيتُكِ مَرَّةً أَصبَحتُ أَرى في كُلِّ شَيءٍ مَلامِحَكِ وَصَدى وَصِرتُ أَخشَى أَن تَمُرَّ لَيالِنا فَأَكونُ أَفتَقِدُ القُربَ الَّذي فيكِ غَدَا واني ادري يمكن اكو كلام هواي اني ما اكدر اكوله الج بوقته ويمكن اكو مرات انشغل او اتعب او اسكت بس هذا ما يعني ان مكانج تغير لان اكو ناس حتى من نسكت عنهم يبقون بگلِبنا وانتي من هالناس واني ما اريدج تربطين حبي الج بعدد الرسائل او بعدد الساعات الي نحچي بيها لان الحب عندي مو حساب الحب عندي شعور ثابت وانتي تعرفين اني من اريد انسان بحياتي اريده بصدق واني وياج اريد هالشي واذا الله كتب النا ايام هواي بعد اريد كل يوم بيها نعيش شغلات اكثر ونضحك اكثر ونسوي ذكريات اكثر ونتعرف على بعض اكثر حتى بعد سنين نبقى نعرف بعض مو بس مثل اول يوم لا نعرف بعض اكثر من كل يوم قبل واني اتمنى يوم من الايام نرجع لكل هالكلام ونضحك ونكول شكد جان ذوالفقار يحچي هواي وشكد جان يحب حوحو واني ما اعتقد راح اتغير بهالشي لان حتى هسه من اكتب لج احس اريد ازيد وازيد لان عندي كلام هواي الج وأَيُّ شَيءٍ سِوى عَينَيكِ أَطلُبُهُ وَأَيُّ عُمرٍ سِوى قُربِكِ أَرتَضيهِ إِذا كانَ عُمريَ دَربًا لا نِهايَةَ لَهُ فَأَنتِ لِقَلبيَ أَجملُ مَن أُسَمّيهِ حوراء يا روحي اني اليوم فرحان لان اليوم يومج وفرحان لان قدرت اسويلج شي ولو بسيط وفرحان اكثر لان اكو انسانه مثلج بحياتي واني من كل گلبي اتمنى الله يحفظج الي ويحفظج من كل شر ويبعد عنج الحزن والتعب ويعطيج على گد قلبج واكثر ويخلي ايامج كلها راحة وفرح ويحقق لج كل امنية مخليتها بگلِبج حتى لو ما حچيتي عنها لاحد واتمنى كل باب مغلق بوجهج ينفتح وكل طريق تخافين تمشين بيه يصير اسهل وكل حلم تحسينه بعيد يصير قريب وكل تعب تعبتيه تشوفين وراه نتيجة تفرحج واني راح ابقى فرحان بكلشي يسعدج لان سعادتج عندي شي مهم مو مجرد كلمة وكل عام وانتي بالف خير يا حوحو وكل عام وانتي بخير وكل عام وانتي اقرب الي وكل عام وانتي تضحكين وكل عام وانتي قوية وكل عام وانتي تحققين الي تريدينه وكل عام وانتي نفس حوراء الي احبها واحترمها وافتخر بيها وكل عام وانتي الشي الي ما اريد اخسره وكل عام وانتي منورة الدنيا بوجودج والله لا يحرمني منج ولا من ضحكتج ولا من سوالفج ولا من كلشي حلو بيج واذا اكو شي اختم بيه فاني ما راح اكول كلام مرتب ولا شعر ولا شي كبير راح اكولها مثل ما هيه بگلبي احبج حوحو واحبج هواي واحب وجودج بحياتي واحب كلشي صار بينا واحب كل ذكرى وكل موقف وكل لحظة وكل كلمة وكل ضحكة وكل مرة حسيت بيها اني مو وحدي بسببج وراح ابقى اتمنى الج الخير حتى بايام ما اكون بيها يمج وراح ابقى اتمنى اشوفج فرحانه حتى لو ما كنت اني سبب الفرح لان بالنهايه الي احبه اريده بخير قبل كلشي فكل عام وانتي بالف خير يا روحي وكل عام وانتي حوراء الي احبها وكل عام وانتي بخير وصحه وسلامه وفرح وكل عام وگلبي يفرح من اشوفج فرحانه وكل عام وانتي محققه اشياء اكثر من الي تتمنينها وكل عام واني اكدر اسويلج شي يخليج تبتسمين ولو ابتسامة صغيرة وكل عام وانتي بخير يا حوحو وربي يديمج الي ويحفظج ويخلي هالسنه بداية عمر حلو الج مليان نجاح وفرح وراحة بال واني لو اضل اكتب من هسه لباجر ما راح اوفيج حقج بس يمكن الشي الوحيد الي اكدر اوفيه هوه اني ابقى صادق وياج واحبج من گلبي وافتخر بيج وابقى اختارج انتي بكل مرة وكل يوم وكل سنة وكل عام وانتي بالف خير يا حوحو احبج حيل حيل حيل`
    },


    {
      id: 9,
      title: "لغز",
      description: "نشوف تعرفين كلمة أبو ذوذ لو لا؟ 🧩",
      icon: "🧩",

      wordRiddle: true
    },


    {
      id: 10,
      title: "لعبه بسيطه",
      description: "اللعبة مؤجلة حالياً 🎮",
      icon: "🎮",

      message:
        "هذه اللعبة نرجعلها بعدين 💗"
    },


    {
      id: 11,
      title: "اسائله",
      description: "هسه نشوف شكد تعرفين تجاوبين 😌💗",
      icon: "❓",

      song:
        "music/song11.mp3",

      songTitle:
        "أسئلة لحوحو 💗",

      /* قفل */
      lockCode:
        "44444",

      questions: true
    },


    {
      id: 12,
      title: "اختبار",
      description: "نشوف شكد تعرفين أبو ذوذ 😌💗",
      icon: "📝",

      song:
        "music/song12.mp3",

      songTitle:
        "اختبار حوحو 💗",

      test: true
    },


    {
      id: 13,
      title: "لغز",
      description: "نشوف تتذكرين لو لا 👀💗",
      icon: "🧩",

      memoryRiddle: true,

      memoryRiddleQuestion:
        "اكو كلمة أو شغلة سويتيها إلي، بوقتها ردت أموت من الفرح... شنو هي؟ 💗",

      memoryRiddleAnswer:
        "بوسة",

      memoryRiddleCode:
        "19"
    },


    {
      id: 14,
      title: "تحديات",
      description: "اختاري تحديج وخلي نشوف شكد قدها 🔥💗",
      icon: "🔥",

      /* قفل */
      lockCode:
        "19",

      challenges: true
    },


    {
      id: 15,
      title: "لغز",
      description: "نشوف تتذكرين شغلتنا لو لا 👀🔐",
      icon: "🧩",

      memoryRiddle2: true,

      memoryRiddleQuestion2:
        "أكو شغلة حچينا بيها، وگلتلج أريدج ما تسويها... شنو هي؟ 👀💗",

      memoryRiddleAnswer2:
        "عطر وملابس",

      memoryRiddleCode2:
        "12345"
    },


    {
      id: 16,
      title: "سر",
      description: "شي مخبيه إلج 🤫",
      icon: "🤫",

      song:
        "music/song16.mp3",

      songTitle:
        "سر صغير 🤫💗",

      message:
        `السر حتعرفيه قبل دوام
ترقبي قريبا`
    },


    {
      id: 17,
      title: "مفاجاه",
      description: "بعد يومين مفاجأة 🎁",
      icon: "🎁",

      song:
        "music/song17.mp3",

      songTitle:
        "مفاجأة بعد يومين 🎁💗",

      message:
        "بعد يومين مفاجأة 🎁💗"
    },


    {
      id: 18,
      title: "شكد",
      description: "شكد؟ 😌💗",
      icon: "💯",

      song:
        "music/song18.mp3",

      songTitle:
        "شكد؟ 💗",

      shkad: true
    },


    {
      id: 19,
      title: "اغنيتج",
      description: "أغنية إلج 🎵",
      icon: "🎶",

      song:
        "music/song19.mp3",

      songTitle:
        "أغنيتج 💗",

      /* قفل */
      lockCode:
        "12345",

      message:
        "هاي الأغنية خصيصاً إلج 💗🎵"
    },


    {
      id: 20,
      title: "شتريدين نسوي",
      description:
        "بما إنو كملنا... شتريدين نسوي؟ 😌💗",

      icon:
        "💭",

      choices: true
    },


    {
      id: 21,
      title: "نهايه",
      description: "نهاية الرحلة 🌙",
      icon: "🌙",

      message:
        `حبيبي حوحو،

كل هذا شغل شي بسيط الج،
ويا رب الله يقدرني واسويلج الاحسن منه.

واحب اكلج بالختام:
احبج حيل والله،
ويحفظج الي يا رب.

ممممممح 💗

مع حبي،
ابو ذوذ`
    }

  ];


  /* =========================
     الأقسام المقفولة
  ========================= */

  const unlockedSections =
    new Set();


  function isUnlocked(id) {

    return unlockedSections.has(id);

  }


  function showLock(section) {

    stopMusic();

    openedIcon.textContent =
      "🔒";

    openedTitle.textContent =
      section.title;

    openedDescription.textContent =
      "هذا القسم مقفول 🔐";

    musicPlayer.classList.remove(
      "visible"
    );

    sectionContent.innerHTML = `

      <div class="lock-panel">

        <div class="lock-icon-big">
          🔐
        </div>

        <h3>
          هذا القسم مقفول
        </h3>

        <p>
          لازم تدخلين الرمز السري حتى ينفتح القسم 💗
        </p>

        <input
          id="lockInput"
          class="lock-input"
          type="text"
          inputmode="numeric"
          autocomplete="off"
          placeholder="اكتبي الرمز هنا"
        >

        <button
          id="lockButton"
          class="lock-button"
          type="button"
        >
          فتح القفل 🔓
        </button>

        <div
          id="lockResult"
          class="lock-result"
        ></div>

      </div>

    `;

    menuSection.style.display =
      "none";

    sectionView.classList.add(
      "active"
    );

    const input =
      document.getElementById(
        "lockInput"
      );

    const button =
      document.getElementById(
        "lockButton"
      );

    const result =
      document.getElementById(
        "lockResult"
      );


    function unlock() {

      const entered =
        input.value
          .trim()
          .replace(/\s/g, "");

      if (
        entered ===
        String(section.lockCode)
      ) {

        unlockedSections.add(
          section.id
        );

        result.textContent =
          "انفتح القفل 🔓💗";

        result.classList.add(
          "success"
        );

        input.disabled = true;
        button.disabled = true;


        const card =
          document.querySelector(
            `.section-card[data-section-id="${section.id}"]`
          );

        if (card) {

          card.classList.add(
            "unlocking"
          );

          const lock =
            card.querySelector(
              ".card-lock"
            );

          if (lock) {
            lock.remove();
          }

        }


        setTimeout(
          () => {

            if (card) {

              card.classList.remove(
                "unlocking"
              );

            }

            openSection(
              section.id
            );

          },
          650
        );

      } else {

        result.textContent =
          "الرمز غلط 😭🔒 حاولي مرة ثانية";

        input.focus();

        input.select();

      }

    }


    button.addEventListener(
      "click",
      unlock
    );


    input.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          unlock();

        }

      }
    );


    setTimeout(
      () => input.focus(),
      100
    );

  }


  /* =========================
     إنشاء كروت الأقسام
  ========================= */

  sections.forEach(
    section => {

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "section-card";

      card.dataset.sectionId =
        section.id;


      const locked =
        !!section.lockCode &&
        !isUnlocked(
          section.id
        );


      card.innerHTML = `

        <span class="card-number">
          ${String(section.id).padStart(2,"0")}
        </span>

        <div class="card-icon">
          ${section.icon}
        </div>

        <h3>
          ${escapeHTML(section.title)}
          ${
            locked
              ? '<span class="card-lock">🔒</span>'
              : ''
          }
        </h3>

        <p>
          ${escapeHTML(section.description)}
        </p>

      `;


      if (locked) {

        card.classList.add(
          "is-locked"
        );

      }


      card.addEventListener(
        "click",
        () => {

          openSection(
            section.id
          );

        }
      );


      cardsGrid.appendChild(
        card
      );

    }
  );


  /* =========================
     فتح قسم
  ========================= */

  function openSection(id) {

    const section =
      sections.find(
        item =>
          item.id === id
      );


    if (!section) {
      return;
    }


    if (
      section.lockCode &&
      !isUnlocked(section.id)
    ) {

      showLock(
        section
      );

      return;

    }


    stopMusic();


    openedTitle.textContent =
      section.title;

    openedDescription.textContent =
      section.description;

    openedIcon.textContent =
      section.icon;


    sectionContent.innerHTML =
      "";


    musicPlayer.classList.remove(
      "visible"
    );


    if (section.song) {

      musicPlayer.classList.add(
        "visible"
      );

      songPlayer.src =
        section.song;

      musicTitle.textContent =
        section.songTitle ||
        "أغنية لحوحو 💗";

      musicPlay.textContent =
        "▶";

      progressFill.style.width =
        "0%";

      musicTime.textContent =
        "00:00 / 00:00";

    }


    renderSection(
      section
    );


    menuSection.style.display =
      "none";

    sectionView.classList.add(
      "active"
    );


    window.scrollTo({
      top: 0,
      behavior:
        "smooth"
    });

  }


  /* =========================
     محتوى الأقسام
  ========================= */

  function renderSection(
    section
  ) {

    /* النص العادي */

    if (
      section.message &&
      !section.riddle &&
      !section.wordRiddle &&
      !section.game &&
      !section.questions &&
      !section.photos &&
      !section.test &&
      !section.memoryRiddle &&
      !section.memoryRiddle2 &&
      !section.challenges &&
      !section.shkad &&
      !section.choices
    ) {

      sectionContent.innerHTML = `

        <div class="message-content">
          ${escapeHTML(section.message)}
        </div>

      `;

      return;

    }


    /* الصور */

    if (
      section.photos
    ) {

      let html = `

        <div class="message-content center">
          هاي مو مجرد صور... كل صورة بيها ذكرى وحكاية من حكاياتنا. 💗
        </div>

        <br>

        <div class="photos-grid">

      `;


      for (
        let i = 1;
        i <= 41;
        i++
      ) {

        html += `

          <div class="photo-card">

            <img
              src="photos/${i}.jpg"
              alt="ذكرى ${i}"
              loading="lazy"
              onerror="this.parentElement.style.display='none'"
            >

            <span class="photo-number">
              ${i}
            </span>

          </div>

        `;

      }


      html += `
        </div>
      `;


      sectionContent.innerHTML =
        html;

      return;

    }


    /* اللغز الأول */

    if (
      section.riddle
    ) {

      sectionContent.innerHTML = `

        <div class="riddle-box">

          <div class="message-content center">
            رتبي الأرقام بشكل صحيح 🔐
          </div>

          <div class="riddle-number">
            ${section.riddle}
          </div>

          <input
            id="riddleInput"
            class="riddle-input"
            type="text"
            inputmode="numeric"
            placeholder="اكتبي الترتيب الصحيح"
          >

          <br>

          <button
            class="riddle-button"
            id="riddleButton"
            type="button"
          >
            تحقق 💗
          </button>

          <div
            class="riddle-result"
            id="riddleResult"
          ></div>

          <div
            class="mystery-container"
            id="mysteryContainer"
            style="display:none"
          >

            <div
              class="mystery-box"
              id="mysteryBox"
            >

              <div class="box-lid"></div>

              <div class="box-body"></div>

              <div class="box-ribbon"></div>

            </div>

            <div class="secret-code">

              الكود السري:

              <strong>
                ${section.secret}
              </strong>

            </div>

          </div>

        </div>

      `;


      const input =
        document.getElementById(
          "riddleInput"
        );

      const button =
        document.getElementById(
          "riddleButton"
        );

      const result =
        document.getElementById(
          "riddleResult"
        );


      button.addEventListener(
        "click",
        () => {

          const answer =
            input.value.replace(
              /\s/g,
              ""
            );


          if (
            answer ===
            section.correct
          ) {

            result.textContent =
              "صح! 😍💗";

            document.getElementById(
              "mysteryContainer"
            ).style.display =
              "block";


            setTimeout(
              () => {

                document.getElementById(
                  "mysteryBox"
                ).classList.add(
                  "open"
                );

              },
              300
            );

          } else {

            result.textContent =
              "غلط 😭 حاولي مرة ثانية";

          }

        }
      );


      return;

    }


    /* لعبة القلوب */

    if (
      section.game
    ) {

      renderHeartGame();

      return;

    }


    /* اللغز الثاني */

    if (
      section.wordRiddle
    ) {

      sectionContent.innerHTML = `

        <div class="riddle-box">

          <div class="message-content">

            <strong>
              لغز:
            </strong>

            <br>
            <br>

            شنو الكلمة اللي أبو ذوذ يحبها هواي،
            وحوحو كالتها أكثر من مرة؟ 👀💗

          </div>

          <br>

          <input
            id="wordInput"
            class="riddle-input"
            type="text"
            placeholder="اكتبي الكلمة"
          >

          <br>

          <button
            class="riddle-button"
            id="wordButton"
            type="button"
          >
            جاوبي 💗
          </button>

          <div
            class="riddle-result"
            id="wordResult"
          ></div>

        </div>

      `;


      const input =
        document.getElementById(
          "wordInput"
        );

      const button =
        document.getElementById(
          "wordButton"
        );

      const result =
        document.getElementById(
          "wordResult"
        );


      button.addEventListener(
        "click",
        () => {

          const answer =
            normalizeArabic(
              input.value
            );


          if (
            answer === "ديلا منا" ||
            answer === "ديلامنا"
          ) {

            result.textContent =
              "صحححح 😭💗";


            setTimeout(
              () => {

                result.innerHTML =
                  `الكود السري: <strong>44444</strong> 🔐`;

              },
              700
            );

          } else {

            result.textContent =
              "مو هي 😭 جربي مرة ثانية";

          }

        }
      );


      return;

    }


    /* اختبار القسم 12 */

    if (
      section.test
    ) {

      renderPersonalTest();

      return;

    }


    /* لغز القسم 13 */

    if (
      section.memoryRiddle
    ) {

      sectionContent.innerHTML = `

        <div class="riddle-box">

          <div class="message-content center">

            <strong>
              لغز:
            </strong>

            <br>
            <br>

            ${escapeHTML(
              section.memoryRiddleQuestion
            )}

          </div>

          <br>

          <input
            id="memoryRiddleInput"
            class="riddle-input"
            type="text"
            placeholder="اكتبي الجواب"
            autocomplete="off"
          >

          <br>

          <button
            class="riddle-button"
            id="memoryRiddleButton"
            type="button"
          >
            جاوبي 💗
          </button>

          <div
            class="riddle-result"
            id="memoryRiddleResult"
          ></div>


          <div
            class="mystery-container"
            id="memoryMysteryContainer"
            style="display:none"
          >

            <div
              class="mystery-box"
              id="memoryMysteryBox"
            >

              <div class="box-lid"></div>

              <div class="box-body"></div>

              <div class="box-ribbon"></div>

            </div>

            <div class="secret-code">

              الرمز السري:

              <strong>
                ${escapeHTML(
                  section.memoryRiddleCode
                )}
              </strong>

            </div>

          </div>

        </div>

      `;


      const input =
        document.getElementById(
          "memoryRiddleInput"
        );

      const button =
        document.getElementById(
          "memoryRiddleButton"
        );

      const result =
        document.getElementById(
          "memoryRiddleResult"
        );

      const mysteryContainer =
        document.getElementById(
          "memoryMysteryContainer"
        );

      const mysteryBox =
        document.getElementById(
          "memoryMysteryBox"
        );


      function checkMemoryRiddle() {

        const answer =
          normalizeArabic(
            input.value
          );

        const correct =
          normalizeArabic(
            section.memoryRiddleAnswer
          );


        if (
          answer === correct
        ) {

          result.textContent =
            "صحححح 😭💗";

          button.disabled =
            true;

          input.disabled =
            true;

          mysteryContainer.style.display =
            "block";


          setTimeout(
            () => {

              mysteryBox.classList.add(
                "open"
              );

            },
            300
          );

        } else {

          result.textContent =
            "😠 غلط! عيديها";

          input.focus();

          input.select();

        }

      }


      button.addEventListener(
        "click",
        checkMemoryRiddle
      );


      input.addEventListener(
        "keydown",
        event => {

          if (
            event.key ===
            "Enter"
          ) {

            checkMemoryRiddle();

          }

        }
      );


      return;

    }


    /* الأسئلة */

    if (
      section.questions
    ) {

      renderQuestions();

      return;

    }


    /* تحديات القسم 14 */

    if (
      section.challenges
    ) {

      renderChallenges();

      return;

    }


    /* لغز القسم 15 */

    if (
      section.memoryRiddle2
    ) {

      renderMemoryRiddle2(
        section
      );

      return;

    }


    /* شكد */

    if (
      section.shkad
    ) {

      renderShkad();

      return;

    }


    /* شتريدين نسوي */

    if (
      section.choices
    ) {

      renderChoices();

      return;

    }

  }


  /* =========================
     لعبة القلوب
  ========================= */

  function renderHeartGame() {

    sectionContent.innerHTML = `

      <div class="heart-game">

        <div class="message-content center">
          اضغطي على القلوب قبل لا تختفي 🎯💗
        </div>

        <div class="game-score">
          القلوب:
          <strong id="gameScore">
            0
          </strong>
          / 20
        </div>

        <div
          class="game-board"
          id="gameBoard"
        ></div>

        <div
          class="final-game-message"
          id="finalGameMessage"
        >
          كل عام وانتي بالف خير 💗
        </div>

      </div>

    `;


    const board =
      document.getElementById(
        "gameBoard"
      );

    const scoreElement =
      document.getElementById(
        "gameScore"
      );

    const finalMessage =
      document.getElementById(
        "finalGameMessage"
      );


    let score = 0;


    function createTarget() {

      if (
        score >= 20
      ) {
        return;
      }


      const heart =
        document.createElement(
          "button"
        );

      heart.type =
        "button";

      heart.className =
        "target-heart";

      heart.textContent =
        "♥";


      heart.style.left =
        Math.random() * 85 + "%";

      heart.style.top =
        Math.random() * 80 + "%";


      heart.addEventListener(
        "click",
        () => {

          score++;

          scoreElement.textContent =
            score;

          heart.remove();


          if (
            score >= 20
          ) {

            finalMessage.style.display =
              "block";

            board.innerHTML =
              "";

            return;

          }


          createTarget();

        }
      );


      board.appendChild(
        heart
      );

    }


    for (
      let i = 0;
      i < 5;
      i++
    ) {

      createTarget();

    }

  }


  /* =========================
     اختبار القسم 12
  ========================= */

  const personalTestQuestions = [

    {
      question:
        "شوكت انولدت ؟",

      answer:
        "2005/6/2"
    },

    {
      question:
        "شحب اكثر شي",

      answer:
        "اني"
    },

    {
      question:
        "شنو اكثر تصرف اكرها",

      answer:
        "اضيف ولد"
    },

    {
      question:
        "شنو اكثر تصرف احبه",

      answer:
        "من تبوسيني"
    },

    {
      question:
        "شنو الكلمه الي اذا كلتيها اسرسح من فرح",

      answer:
        "احبك ذوالفقار"
    },

    {
      question:
        "شنو شي الي يخليني اطمن للدنيا",

      answer:
        "وجودي"
    }

  ];


  function normalizeTestAnswer(
    text
  ) {

    return normalizeArabic(
      text
    )
      .replace(
        /[\/\-]/g,
        ""
      )
      .replace(
        /\s+/g,
        " "
      )
      .trim();

  }


  function renderPersonalTest() {

    let current = 0;


    function drawTestQuestion() {

      if (
        current >=
        personalTestQuestions.length
      ) {

        sectionContent.innerHTML = `

          <div class="results-box">

            <div class="message-content center">

              خلص الاختبار 😭💗

              <br>
              <br>

              تعرفين أبو ذوذ أكثر مما توقعت 😌💗

            </div>

          </div>

        `;

        return;

      }


      const item =
        personalTestQuestions[
          current
        ];


      sectionContent.innerHTML = `

        <div class="questions-box">

          <div class="question-progress">
            السؤال
            ${current + 1}
            من
            ${personalTestQuestions.length}
          </div>

          <div class="question-text">
            ${escapeHTML(
              item.question
            )}
          </div>

          <input
            id="personalTestInput"
            class="riddle-input"
            type="text"
            placeholder="اكتبي الجواب"
            autocomplete="off"
          >

          <br>

          <button
            class="riddle-button"
            id="personalTestButton"
            type="button"
          >
            تحقق 💗
          </button>

          <div
            class="riddle-result"
            id="personalTestResult"
          ></div>

        </div>

      `;


      const input =
        document.getElementById(
          "personalTestInput"
        );

      const button =
        document.getElementById(
          "personalTestButton"
        );

      const result =
        document.getElementById(
          "personalTestResult"
        );


      function checkAnswer() {

        const answer =
          normalizeTestAnswer(
            input.value
          );

        const correct =
          normalizeTestAnswer(
            item.answer
          );


        if (
          answer === correct
        ) {

          result.textContent =
            "صحححح 😭💗";

          button.disabled =
            true;

          input.disabled =
            true;


          setTimeout(
            () => {

              current++;

              drawTestQuestion();

            },
            650
          );

        } else {

          result.textContent =
            "😠 غلط! عيديها";

          input.focus();

          input.select();

        }

      }


      button.addEventListener(
        "click",
        checkAnswer
      );


      input.addEventListener(
        "keydown",
        event => {

          if (
            event.key ===
            "Enter"
          ) {

            checkAnswer();

          }

        }
      );


      setTimeout(
        () => input.focus(),
        50
      );

    }


    drawTestQuestion();

  }


  /* =========================
     الأسئلة
  ========================= */

  const questions = [

    "شكد تحبيني؟",

    "شكد تكرهيني؟",

    "شكد تحبين علاقتنا؟",

    "شكد تشوفيني هوت؟ 🔥",

    "شكد زعلانة مني؟",

    "شكد فرحانة؟",

    "شكد أدلعج؟ 🎀",

    "شكد تقيمين علاقتنا?"

  ];


  const answers =
    [
      "0%",
      "30%",
      "70%",
      "100%"
    ];


  function renderQuestions() {

    let current =
      0;

    const selected =
      [];


    function drawQuestion() {

      if (
        current >=
        questions.length
      ) {

        drawResults();

        return;

      }


      sectionContent.innerHTML = `

        <div class="questions-box">

          <div class="question-progress">
            السؤال
            ${current + 1}
            من
            ${questions.length}
          </div>

          <div class="question-text">
            ${questions[current]}
          </div>

          <div class="answer-buttons">

            ${answers.map(
              answer => `

                <button
                  class="answer-button"
                  data-answer="${answer}"
                  type="button"
                >
                  ${answer}
                </button>

              `
            ).join("")}

          </div>

        </div>

      `;


      document
        .querySelectorAll(
          ".answer-button"
        )
        .forEach(
          button => {

            button.addEventListener(
              "click",
              () => {

                selected.push({

                  question:
                    questions[
                      current
                    ],

                  answer:
                    button.dataset.answer

                });


                current++;

                drawQuestion();

              }
            );

          }
        );

    }


    function drawResults() {

      sectionContent.innerHTML = `

        <div class="results-box">

          <div class="message-content center">
            خلصنا الأسئلة 😌💗
          </div>

          <br>

          ${selected.map(
            item => `

              <div class="result-item">

                <strong>
                  ${item.question}
                </strong>

                <br>

                جوابج:
                ${item.answer}

              </div>

            `
          ).join("")}

          <div style="text-align:center">

            <button
              class="restart-button"
              id="restartQuestions"
              type="button"
            >
              أعيدها 💗
            </button>

          </div>

        </div>

      `;


      document
        .getElementById(
          "restartQuestions"
        )
        .addEventListener(
          "click",
          () => {

            current =
              0;

            selected.length =
              0;

            drawQuestion();

          }
        );

    }


    drawQuestion();

  }


  /* =========================
     لغز القسم 15
  ========================= */

  function renderMemoryRiddle2(
    section
  ) {

    sectionContent.innerHTML = `

      <div class="riddle-box">

        <div class="message-content center">

          <strong>
            لغز:
          </strong>

          <br>
          <br>

          ${escapeHTML(
            section.memoryRiddleQuestion2
          )}

        </div>

        <br>

        <input
          id="memoryRiddle2Input"
          class="riddle-input"
          type="text"
          placeholder="اكتبي الجواب"
          autocomplete="off"
        >

        <br>

        <button
          class="riddle-button"
          id="memoryRiddle2Button"
          type="button"
        >
          جاوبي 💗
        </button>

        <div
          class="riddle-result"
          id="memoryRiddle2Result"
        ></div>


        <div
          class="mystery-container"
          id="memoryRiddle2Container"
          style="display:none"
        >

          <div
            class="mystery-box"
            id="memoryRiddle2Box"
          >

            <div class="box-lid"></div>

            <div class="box-body"></div>

            <div class="box-ribbon"></div>

          </div>

          <div class="secret-code">

            الرمز السري:

            <strong>
              ${escapeHTML(
                section.memoryRiddleCode2
              )}
            </strong>

          </div>

        </div>

      </div>

    `;


    const input =
      document.getElementById(
        "memoryRiddle2Input"
      );

    const button =
      document.getElementById(
        "memoryRiddle2Button"
      );

    const result =
      document.getElementById(
        "memoryRiddle2Result"
      );

    const container =
      document.getElementById(
        "memoryRiddle2Container"
      );

    const box =
      document.getElementById(
        "memoryRiddle2Box"
      );


    function check() {

      const answer =
        normalizeArabic(
          input.value
        );

      const correct =
        normalizeArabic(
          section.memoryRiddleAnswer2
        );


      if (
        answer === correct
      ) {

        result.textContent =
          "صحححح 😭💗";

        input.disabled =
          true;

        button.disabled =
          true;

        container.style.display =
          "block";


        setTimeout(
          () => {

            box.classList.add(
              "open"
            );

          },
          300
        );

      } else {

        result.textContent =
          "😠 غلط! عيديها";

        input.focus();

        input.select();

      }

    }


    button.addEventListener(
      "click",
      check
    );


    input.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          check();

        }

      }
    );

  }


  /* =========================
     التحديات 14
  ========================= */

  function renderChallenges() {

    sectionContent.innerHTML = `

      <div class="questions-box">

        <div class="message-content center">

          اختاري تحديج وخلي نشوف شكد قدها 🔥💗

        </div>


        <div
          style="
            display:grid;
            gap:12px;
            margin-top:20px;
          "
        >

          <button
            class="answer-button challenge-choice"
            type="button"
          >

            <strong>
              تحدي أسبوع كامل 📵
            </strong>

            <br>

            جربي تبتعدين عن الريلز لمدة أسبوع كامل، وإذا كملتيه إلج هدية عظيمة حيل 🎁

          </button>


          <button
            class="answer-button challenge-choice"
            type="button"
          >

            <strong>
              تحدي الصبر 6 ساعات ⏰
            </strong>

            <br>

            تباوعين قصة لمدة 6 ساعات، بس ويا استراحات عادية حتى تبقين مرتاحة.

          </button>


          <button
            class="answer-button challenge-choice"
            type="button"
          >

            <strong>
              تحدي أبو ذوذ 😌🔥
            </strong>

            <br>

            تسوين مهام بسيطة ومتفق عليها لمدة 4 أيام، وبراحتج دائماً إذا شي ما يناسبج.

          </button>

        </div>


        <div
          id="challengeResult"
          class="riddle-result"
        ></div>

      </div>

    `;


    const result =
      document.getElementById(
        "challengeResult"
      );


    document
      .querySelectorAll(
        ".challenge-choice"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              document
                .querySelectorAll(
                  ".challenge-choice"
                )
                .forEach(
                  item =>
                    item.disabled =
                      true
                );


              result.textContent =
                "حلو خوش تحدي 😌🔥 من باجر تبلشين، وإذا كملتيه للنهاية... المفاجأة تنتظرج 🎁💗";

            }
          );

        }
      );

  }


  /* =========================
     شكد 18
  ========================= */

  function renderShkad() {

    const qs = [

      "شكد واثقه بيا حطلع من سادس؟",

      "شكد واثقه بيا حضل وياج طول العمر؟",

      "شكد واثقه بيا مراح أخونج؟",

      "شكد حتضوجين لو أغير شي بسيط بتعاملي؟",

      "شكد حتفرحين إذا طلعت من سادس هالسنه؟",

      "شكد راح تضوجين وكت دوام كون مراح أكدر أحچي وياج هواي؟",

      "شكد حتفرحين إذا كملت ماب روبلوكس؟"

    ];


    let current = 0;

    const saved = [];


    function draw() {

      if (
        current >=
        qs.length
      ) {

        sectionContent.innerHTML = `

          <div class="results-box">

            <div class="message-content center">

              خلصنا كل الأسئلة 😌💗

              <br>

              هاي إجاباتج كلها:

            </div>

            <br>

            ${saved.map(
              (item, i) => `

                <div class="result-item">

                  <strong>
                    السؤال ${i + 1}
                  </strong>

                  <br>

                  ${escapeHTML(
                    item.question
                  )}

                  <br>
                  <br>

                  <strong>
                    النسبة:
                  </strong>

                  ${escapeHTML(
                    item.percent
                  )}

                  <br>

                  <strong>
                    السبب:
                  </strong>

                  ${escapeHTML(
                    item.reason
                  )}

                </div>

              `
            ).join("")}

            <div style="text-align:center">

              <button
                id="restartShkad"
                class="restart-button"
                type="button"
              >
                أعيدها 💗
              </button>

            </div>

          </div>

        `;


        document
          .getElementById(
            "restartShkad"
          )
          .addEventListener(
            "click",
            () => {

              current =
                0;

              saved.length =
                0;

              draw();

            }
          );

        return;

      }


      sectionContent.innerHTML = `

        <div class="questions-box">

          <div class="question-progress">

            السؤال
            ${current + 1}
            من
            ${qs.length}

          </div>


          <div class="question-text">

            ${escapeHTML(
              qs[current]
            )}

          </div>


          <div class="message-content center">

            اكتبي النسبة وسبب اختيارچ 💗

          </div>


          <input
            id="shkadPercent"
            class="riddle-input"
            type="text"
            inputmode="numeric"
            placeholder="النسبة مثلاً 80%"
          >


          <input
            id="shkadReason"
            class="riddle-input"
            type="text"
            placeholder="اكتبي السبب"
          >


          <br>


          <button
            id="shkadNext"
            class="riddle-button"
            type="button"
          >
            ${
              current === qs.length - 1
                ? "إنهاء 💗"
                : "التالي 💗"
            }
          </button>


          <div
            id="shkadResult"
            class="riddle-result"
          ></div>

        </div>

      `;


      const percent =
        document.getElementById(
          "shkadPercent"
        );

      const reason =
        document.getElementById(
          "shkadReason"
        );

      const next =
        document.getElementById(
          "shkadNext"
        );

      const result =
        document.getElementById(
          "shkadResult"
        );


      function submit() {

        const rawPercent =
          percent.value.trim();

        const rawReason =
          reason.value.trim();

        const n =
          Number(
            rawPercent
              .replace(
                "%",
                ""
              )
              .trim()
          );


        if (
          !rawPercent ||
          !Number.isFinite(n) ||
          n < 0 ||
          n > 100
        ) {

          result.textContent =
            "اكتبي نسبة صحيحة من 0% إلى 100% 💗";

          return;

        }


        if (
          !rawReason
        ) {

          result.textContent =
            "اكتبي السبب ويا النسبة 💗";

          return;

        }


        saved.push({

          question:
            qs[current],

          percent:
            `${Math.round(n)}%`,

          reason:
            rawReason

        });


        current++;

        draw();

      }


      next.addEventListener(
        "click",
        submit
      );


      reason.addEventListener(
        "keydown",
        event => {

          if (
            event.key ===
            "Enter"
          ) {

            submit();

          }

        }
      );


      percent.focus();

    }


    draw();

  }


  /* =========================
     لعبة القلوب
  ========================= */

  function renderHeartGameAgain() {

    renderHeartGame();

  }


  /* =========================
     خيارات القسم 20
  ========================= */

  function renderChoices() {

    const choices = [

      {
        title:
          "نلعب",

        icon:
          "🎮",

        text:
          "يلا نلعب شي حلو ونقضي وقت ممتع 🎮💗"
      },

      {
        title:
          "نباوع",

        icon:
          "🎬",

        text:
          "نباوع شي حلو ونقضيها مشاهدة وسوالف 🎬💗"
      },

      {
        title:
          "نسولف",

        icon:
          "💬",

        text:
          "نسولف براحتنا ونفتح كل السوالف 💬💗"
      },

      {
        title:
          "نمضرط",

        icon:
          "😂",

        text:
          "نمضرط ونضحك على أتفه الأشياء 😂💗"
      },

      {
        title:
          "نتمنگل",

        icon:
          "🤣",

        text:
          "نتمنگل ونخليها جلسة ضحك وخرابيط 🤣💗"
      }

    ];


    sectionContent.innerHTML = `

      <div class="questions-box">

        <div class="message-content center">

          بما إنو كملنا... شتريدين نسوي؟ 😌💗

        </div>


        <div
          class="answer-buttons"
          style="margin-top:20px;"
        >

          ${choices.map(
            (choice, index) => `

              <button
                class="answer-button choice-button"
                type="button"
                data-index="${index}"
              >

                <span
                  style="
                    display:block;
                    font-size:30px;
                    margin-bottom:7px;
                  "
                >
                  ${choice.icon}
                </span>

                <strong>
                  ${choice.title}
                </strong>

              </button>

            `
          ).join("")}

        </div>


        <div
          id="choiceResult"
          class="riddle-result"
        ></div>

      </div>

    `;


    const result =
      document.getElementById(
        "choiceResult"
      );


    document
      .querySelectorAll(
        ".choice-button"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              const choice =
                choices[
                  Number(
                    button.dataset.index
                  )
                ];


              document
                .querySelectorAll(
                  ".choice-button"
                )
                .forEach(
                  item =>
                    item.disabled =
                      true
                );


              result.innerHTML = `

                اخترتي:

                <strong>
                  ${choice.icon}
                  ${choice.title}
                </strong>

                <br>
                <br>

                ${choice.text}

              `;

            }
          );

        }
      );

  }


  /* =========================
     الرجوع
  ========================= */

  backButton.addEventListener(
    "click",
    () => {

      stopMusic();

      sectionView.classList.remove(
        "active"
      );

      setTimeout(
        () => {

          menuSection.style.display =
            "block";

          window.scrollTo({
            top:
              0,

            behavior:
              "smooth"
          });

        },
        150
      );

    }
  );


  /* =========================
     مشغل الأغاني
  ========================= */

  musicPlay.addEventListener(
    "click",
    () => {

      if (
        !songPlayer.src
      ) {
        return;
      }


      if (
        songPlayer.paused
      ) {

        songPlayer
          .play()
          .then(
            () => {

              musicPlay.textContent =
                "❚❚";

            }
          )
          .catch(
            () => {

              musicPlay.textContent =
                "▶";

            }
          );

      } else {

        songPlayer.pause();

        musicPlay.textContent =
          "▶";

      }

    }
  );


  songPlayer.addEventListener(
    "play",
    () => {

      musicPlay.textContent =
        "❚❚";

    }
  );


  songPlayer.addEventListener(
    "pause",
    () => {

      musicPlay.textContent =
        "▶";

    }
  );


  songPlayer.addEventListener(
    "timeupdate",
    () => {

      if (
        !songPlayer.duration
      ) {
        return;
      }


      const percent =
        (
          songPlayer.currentTime /
          songPlayer.duration
        ) * 100;


      progressFill.style.width =
        percent + "%";


      musicTime.textContent =
        formatTime(
          songPlayer.currentTime
        ) +
        " / " +
        formatTime(
          songPlayer.duration
        );

    }
  );


  songPlayer.addEventListener(
    "loadedmetadata",
    () => {

      musicTime.textContent =
        "00:00 / " +
        formatTime(
          songPlayer.duration
        );

    }
  );


  progressArea.addEventListener(
    "click",
    event => {

      if (
        !songPlayer.duration
      ) {
        return;
      }


      const rect =
        progressArea.getBoundingClientRect();


      const percent =
        (
          event.clientX -
          rect.left
        ) /
        rect.width;


      songPlayer.currentTime =
        Math.max(
          0,
          Math.min(
            1,
            percent
          )
        ) *
        songPlayer.duration;

    }
  );


  songPlayer.addEventListener(
    "ended",
    () => {

      musicPlay.textContent =
        "▶";

      progressFill.style.width =
        "0%";

    }
  );


  function stopMusic() {

    if (
      !songPlayer
    ) {
      return;
    }


    songPlayer.pause();

    songPlayer.currentTime =
      0;

    songPlayer.removeAttribute(
      "src"
    );

    songPlayer.load();


    musicPlay.textContent =
      "▶";

    progressFill.style.width =
      "0%";

  }


  function formatTime(
    seconds
  ) {

    if (
      !Number.isFinite(
        seconds
      )
    ) {

      return "00:00";

    }


    const minutes =
      Math.floor(
        seconds /
        60
      );


    const secs =
      Math.floor(
        seconds %
        60
      );


    return (

      String(
        minutes
      ).padStart(
        2,
        "0"
      )

      +

      ":"

      +

      String(
        secs
      ).padStart(
        2,
        "0"
      )

    );

  }


  /* =========================
     تنظيف النص العربي
  ========================= */

  function normalizeArabic(
    text
  ) {

    return String(
      text
    )
      .trim()
      .replace(
        /\s+/g,
        " "
      )
      .replace(
        /[أإآ]/g,
        "ا"
      )
      .replace(
        /ى/g,
        "ي"
      )
      .replace(
        /ة/g,
        "ه"
      );

  }


  /* =========================
     حماية النصوص
  ========================= */

  function escapeHTML(
    text
  ) {

    return String(
      text
    )
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      );

  }

});