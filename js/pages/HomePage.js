const HomePage = {
  name: 'HomePage',
  template:
    '<div id="map" class="map-container">' +
      '<div class="map">' +
        '<svg\n' +
        '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
        '   xmlns:cc="http://creativecommons.org/ns#"\n' +
        '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
        '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
        '   xmlns="http://www.w3.org/2000/svg"\n' +
        '   xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
        '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
        '   width="598.66394"\n' +
        '   height="593.01941"\n' +
        '   viewBox="0 0 598.66394 593.01943"\n' +
        '   version="1.1"\n' +
        '   id="svg8"\n' +
        '   inkscape:version="0.92.3 (unknown)"\n' +
        '   sodipodi:docname="map.svg">\n' +
        '  <defs id="defs2">' +
        '    <pattern id="imageAbrau" x="-22" y="-60" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="64" height="64" xlink:href="./img/abrau.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imageGuam" x="-30" y="35" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/guam.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imageAgur" x="-50" y="22" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/angurWaterfall.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imageLotus" x="-50" y="-8" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/lotus.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imageKosa" x="138" y="-85" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/kosa.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imageVoron" x="-5" y="0" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/voron.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imageInduck" x="12" y="16" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="60" height="60" xlink:href="./img/induck.jpg"></image>\n' +
        '    </pattern>' +
        '  </defs>' +
        '  <image\n' +
        '     y="-2.220446e-16"\n' +
        '     x="0"\n' +
        '     id="image877"\n' +
        '     xlink:href="./img/map.jpg"\n' +
        '     preserveAspectRatio="none"\n' +
        '     height="593.01941"\n' +
        '     width="598.66394" />\n' +
        '  <g\n' +
        '     inkscape:label="Layer 1"\n' +
        '     inkscape:groupmode="layer"\n' +
        '     id="layer1"\n' +
        '     transform="translate(-2.2886286,-1.8243716)" />\n' +
        '  <circle\n' +
        '     id="abrau"\n' +
        '     cx="138.9297"\n' +
        '     cy="356.14523"\n' +
        '     r="16"\n' +
        '     class="interacted abrau"' +
        '     @click="handleClick(\'abrau\')"/>\n' +
        '  <circle\n' +
        '     id="angurWaterfall"\n' +
        '     cx="354.85422"\n' +
        '     cy="556.40955"\n' +
        '     r="16"' +
        '     class="interacted agur"' +
        '     @click="handleClick(\'angurWaterfall\')"/>\n' +
        '  <circle\n' +
        '     id="ahun"\n' +
        '     cx="364.10715"\n' +
        '     cy="536.05511"\n' +
        '     r="8.727273"' +
        '     class="interacted"' +
        '     @click="handleClick(\'ahun\')"/>\n' +
        '  <circle\n' +
        '     id="ahtsu"\n' +
        '     cx="375.35715"\n' +
        '     cy="521.94794"\n' +
        '     r="8.727273"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'ahtsu\')"/>\n' +
        '  <circle\n' +
        '     id="ahsch"\n' +
        '     cx="379.81738"\n' +
        '     cy="549.07782"\n' +
        '     r="8.727273"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'ahsch\')"/>\n' +
        '  <circle\n' +
        '     id="azisch"\n' +
        '     cx="389.91888"\n' +
        '     cy="452.60825"\n' +
        '     r="8.727273"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'azisch\')"/>\n' +
        '  <circle\n' +
        '     id="voron"\n' +
        '     cx="400.35718"\n' +
        '     cy="534.9837"\n' +
        '     r="16"\n' +
        '     class="interacted voron"' +
        '     @click="handleClick(\'voron\')"/>\n' +
        '  <circle\n' +
        '     id="gardenMuseum"\n' +
        '     cx="347.85718"\n' +
        '     cy="532.30511"\n' +
        '     r="6.8225112"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'gardenMuseum\')"/>\n' +
        '  <circle\n' +
        '     id="lotus"\n' +
        '     cx="106.25"\n' +
        '     cy="272.84085"\n' +
        '     r="16"\n' +
        '     class="interacted lotus"' +
        '     @click="handleClick(\'lotus\')"/>\n' +
        '  <circle\n' +
        '     id="agepsta"\n' +
        '     cx="438.40619"\n' +
        '     cy="547.43628"\n' +
        '     r="8"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'agepsta\')"/>\n' +
        '  <circle\n' +
        '     id="kosa"\n' +
        '     cx="163.32143"\n' +
        '     cy="65.876553"\n' +
        '     r="15"\n' +
        '     class="interacted kosa"' +
        '     @click="handleClick(\'kosa\')"/>\n' +
        '  <circle\n' +
        '     id="guam"\n' +
        '     cx="369.6911"\n' +
        '     cy="442.12787"\n' +
        '     r="16"\n' +
        '     class="interacted guam"' +
        '     @click="handleClick(\'guam\')"/>\n' +
        '  <circle\n' +
        '     id="lakeKard"\n' +
        '     cx="452.16956"\n' +
        '     cy="546.93121"\n' +
        '     r="8"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'lakeKard\')"/>\n' +
        '  <circle\n' +
        '     id="kisel"\n' +
        '     cx="273.21429"\n' +
        '     cy="449.53726"\n' +
        '     r="15"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'kisel\')"/>\n' +
        '  <circle\n' +
        '     id="dolm"\n' +
        '     cx="200"\n' +
        '     cy="395.51941"\n' +
        '     r="14.428572"\n' +
        '     class="interacted"\n' +
        '     @click="handleClick(\'dolm\')"/>\n' +
        '  <circle\n' +
        '     id="dant"\n' +
        '     cx="280.89285"\n' +
        '     cy="374.9837"\n' +
        '     r="14.428572"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'dant\')"/>\n' +
        '  <circle\n' +
        '     id="yasen"\n' +
        '     cx="202.43977"\n' +
        '     cy="135.4698"\n' +
        '     r="10.009154"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'yasen\')"/>\n' +
        '  <circle\n' +
        '     id="adov"\n' +
        '     cx="277.16061"\n' +
        '     cy="405.50986"\n' +
        '     r="10.009154"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'adov\')"/>\n' +
        '  <circle\n' +
        '     id="hansk"\n' +
        '     cx="212.1073"\n' +
        '     cy="117.64111"\n' +
        '     r="9"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'hansk\')"/>\n' +
        '  <circle\n' +
        '     id="ahtan"\n' +
        '     cx="65.912453"\n' +
        '     cy="260.41083"\n' +
        '     r="9"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'ahtan\')"/>\n' +
        '  <circle\n' +
        '     id="saltLake"\n' +
        '     cx="43.123108"\n' +
        '     cy="294.97809"\n' +
        '     r="8"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'saltLake\')"/>\n' +
        '  <circle\n' +
        '     id="karabet"\n' +
        '     cx="48.764606"\n' +
        '     cy="280.23505"\n' +
        '     r="8"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'karabet\')"/>\n' +
        '  <circle\n' +
        '     id="parus"\n' +
        '     cx="207.88838"\n' +
        '     cy="429.44894"\n' +
        '     r="8"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'parus\')"/>\n' +
        '  <circle\n' +
        '     id="induck"\n' +
        '     cx="296.22723"\n' +
        '     cy="430.16278"\n' +
        '     r="16"\n' +
        '     class="interacted induck"' +
        '     @click="handleClick(\'induck\')"/>\n' +
        '  <circle\n' +
        '     id="dub"\n' +
        '     cx="240.27029"\n' +
        '     cy="416.79654"' +
        '     r="12"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'dub\')"/>\n' +
        '  <circle\n' +
        '     id="imerit"\n' +
        '     cx="397.85715"\n' +
        '     cy="576.2337"\n' +
        '     r="9"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'imerit\')"/>\n' +
        '  <circle\n' +
        '     id="sosna"\n' +
        '     cx="195.17857"\n' +
        '     cy="415.69797"\n' +
        '     r="7"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'sosna\')"/>\n' +
        '  <circle\n' +
        '     id="waterfalls"\n' +
        '     cx="333.03571"\n' +
        '     cy="500.51941"\n' +
        '     r="11.464286"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'waterfalls\')"/>\n' +
        '  <circle\n' +
        '     id="hizi"\n' +
        '     cx="307.14285"\n' +
        '     cy="453.91226"\n' +
        '     r="10"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'hizi\')"/>\n' +
        '  <circle\n' +
        '     id="tuzla"\n' +
        '     cx="21.071429"\n' +
        '     cy="288.37659"\n' +
        '     r="9"\n' +
        '     class="interacted"' +
        '     @click="handleClick(\'tuzla\')"/>\n' +
        '</svg>' +
      '</div>' +
      '<div :class="infoClass">' +
        '<transition name="fade">' +
          '<div v-if="isInfo" class="card mb-3">\n' +
          '  <img class="card-img-top" :src="activePlace.src" :alt="activePlace.title">\n' +
          '  <div class="card-body">\n' +
          '    <h5 class="card-title">{{activePlace.title}}</h5>\n' +
          '    <p v-html="activePlace.description" class="card-text"></p>\n' +
          '    <button role="button" class="btn btn-outline-primary" @click="hidePlace">Закрыть</button>' +
          '  </div>\n' +
          '</div>' +
        '</transition>' +
      '</div>' +
    '</div>',
  data () {
    return {
      places: {
        abrau: {
          description: 'Абрау является самым большим озером в Западном Кавказе. Его длина свыше 3100 м., максимальная ширина 630 м., площадь 0,6 квадратных километров. Название в переводе с адыгского означает "провал" (или "впадина"). По красоте и величественности Абрау часто сравнивают с озером Рица.<br/><br/>' +
            'Абрау таит загадки, связанные с его происхождением. Так часть ученых предполагает, что котловина озера возникла в результате карстового провала. Другие специалисты связывают его появление с мощными оползнями. А третьи утверждают, что водоем является остатком древнейшего Киммерийского пресноводного бассейна. Еще одной необыкновенной особенностью Абрау является присутствие странной белеющей полоски на глади водоема (ее можно увидеть ночью). Можно предположить, что этот феномен связан с взаимодействием ветра и воды или активностью подводных ключей, бьющих на озерном дне.<br/><br/>' +
            'Кстати, с происхождением озера связана красивая адыгская легенда. По словам старожилов на месте, где теперь находится озеро, давным давно располагался богатейший аул «Абрагъо». Как-то время праздничных игр жители селения начали кидать в реку хлебные лепешки вместо глиняных тарелок. Аллах разгневался и решил покарать богачей за кощунство. Единственная, кто осталась в живых, - адыгская благочестивая девушка, которая в это время встречалась со своим возлюбленным, бедняком из соседнего аула. Когда же она вернулась обратно, на месте селения зиял провал, заполненный водой. Черкешенка, не вынеся горя по родным, бросилась вводу. Но озеро не приняло ее. И красавица по глади водоема прошла до другого конца берега, где ждал ее любимый.( Место расположения: Абрауский полуостров, 14 км от Новороссийска.)<br/><br/>' +
            'Abrau is the largest lake in the Western Caucasus. Its length is over 3100 m. The maximum width is 630 m. Its name means “hollow” in the Adyg language. It is often compared with the lake Ritsa.<br/><br/>' +
            'Abrau has mysteries connected with its origin. Some scientists suggest that the basin of the lake appeared as a result of a karst downfall. The other unusual feature of Abrau is a strange white strip on the surface of the pond which can be seen at night.<br/><br/>' +
            'By the way, the beautiful Adyghe legend is connected with the origin of the lake. According to the old-timers, on the spot where the lake is now, the richest aul of “Abrago” was located a long time ago. Once, during the festive games, the villagers began to throw bread flat cakes instead of clay plates into the river. Allah became angry and decided to punish the rich for blasphemy. The only one who survived was the Adygeian pious girl, who at that time was meeting with her beloved, a poor man from the neighborhoods. When she came back, there was a gap in the place of the village, filled with water. The Cherkeshenka, unable to endure grief for her family, rushed in the lake. But it did not accept her. And the beauty walked on the surface of the pond to the other end of the shore, where her beloved was waiting for her.<br/><br/>' +
            '(Location: Abrau Peninsula, 14 km from Novorossiysk.)',
          src: './img/abrau.jpg',
          title: 'Озеро Абрау'
        },
        angurWaterfall: {
          description: 'Агурские водопады — образует река Агура, «младшая сестра» Мацесты и Хосты, расположенная между ними. Она берет начало на отрогах хребта Алек и устремляется к Черному морю по уступам известняковых гор. В Агурском ущелье три водопада.<br/><br/>' +
            'Согласно одной из местных легенд, девушка по имени Агура помогала Прометею прикованному к скале. Об этом узнал бог Ахын, охранявший коллегу из Древней Греции и прогневавшись превратил девушку в реку.<br/><br/>' +
            'Первый (Нижний) водопад. Он яркий и красивый, заметен сразу, ошибиться сложно. Это двускатный водопад: высота верхней струи 18 метров, нижней — 12 метров. Они падают под углом друг к другу, и водопад кажется надломленным. Под ним разливается широкий и глубокий водоём, отливающий голубизной. На дне ущелья — гигантские глыбы известняка. Второй (Средний) водопад располагается на 500 метров выше. Он многоструйный — вода с высоты 23 метра падает в котлован. На левом берегу котлована имеются пещеры. Третий (Верхний) водопад низвергается с отвесной скалы сильным ревущим потоком. У его подножия каменные бассейны расположены уступами, и вода переливается постепенно, каскадами.<br/><br/>' +
            'Место очень красивое, является одним из самых популярных водопадов в окрестностях Сочи. На всем протяжении путешествия по дороге к Агурским водопадам  Вас сопровождает удивительное пение птиц. Ходить на Агурские водопады можно круглый год. Летом, конечно, тепло. Осенью - золотая очень, весной много чистой воды и в апреле уже можно купаться и все цветет. Зимой - просто подышать и отдохнуть от городской суеты.<br/><br/>' +
            'Agur waterfalls are founded by the river Agura, the "younger sister" of Matsesta and Hosts, which is located between them. It runs on the spurs of the Alek ridge and flows into the Black Sea. There are three waterfalls in the Agur gorge.<br/><br/>' +
            'According to one of the local legends, a girl named Agura helped Prometheus chained to the rock. The god Ahyn, who guarded Prometheus, founf out about it, got angry and turned the girl into a river.<br/><br/>' +
            'The first (Low) waterfall is bright and beautiful. You can see it at once. This is a two-storeyed waterfall: the height of the upper stream is 18 meters, the lower one is 12 meters. The pond is wide and deep with blue water.<br/><br/>' +
            'The second waterfall is girandole. And the third waterfall has water pools at the foot.<br/><br/>' +
            'The place is picturesque and one of the most popular in Sochi.',
          src: './img/angurWaterfall.jpg',
          title: 'Агурские водопады'
        },
        ahun: {
          description: 'Гора в междуречье рек Агура и Хоста (Хостинский район, на территории города Сочи Краснодарского края).' +
            'Высшая точка — Большой Ахун (663 м над уровнем моря).',
          src: './img/ahun.jpg',
          title: 'Гора Ахун'
        },
        ahtsu: {
          description: 'Ущелье на Кавказе, на территории Адлерского района города Сочи.',
          src: './img/ahtsu.jpg',
          title: 'Ахцу'
        },
        ahsch: {
          description: 'Пещера расположена в правом борту Ахштырского ущелья над рекой Мзымта в Адлерском районе города Сочи.',
          src: './img/ahsch.jpg',
          title: 'Ахштырская пещера (Большая Казачебродская)'
        },
        azisch: {
          description: 'Пещера расположена у границы Краснодарского края (Апшеронский район) и Республики Адыгеи (Майкопский район), в междуречье рек Белой и Курджипс. Вход в пещеру находится на платообразном массиве.',
          src: './img/azisch.jpg',
          title: 'Большая Азишская пещера'
        },
        voron: {
          description: 'Воронцовская пещера — пещера, расположенная на Воронцовском хребте в верховьях реки Кудепсты в Хостинском районе города Сочи Краснодарского края. Входит в десятку самых длиннейших пещерных систем России, протяженность которых достигает почти 12 тысяч метров. Название пещеры происходит от одноимённого близлежащего населенного пункта — села Воронцовка. Воронцовская пещера заложена в верхнемеловых слоистых известняках, но на ряде участков врезана в подстилающие некарстующиеся отложения. Имеет более десяти входов, располагающихся в бортах долины реки Кудепсты на высоте 419—720 м над уровнем моря. В зонах наиболее интенсивной трещиноватости развиты камеры обвального типа. Это залы Тишины, Медвежий, Овальный, грот Прометей. Один из самых красивых залов пещеры — Эстрадный (или Люстровый). Его ширина 8—9 м, длина — около 20 м. В нём находятся причудливой формы сталагмиты, сталактиты и другие натёчные карстовые образования.<br/><br/>' +
            'Из нашего города до Воронцовских пещер, 340 километров. Дорога займет у вас примерно 6 часов 10 минут.<br/><br/>' +
            '<b>Vorontsovskie caves</b><br/><br/>' +
            'Vorontsovskaya cave - a cave located on the Vorontsovsky ridge in the upper reaches of the river Kudepsta in the Khostinsky district in Sochi, Krasnodar region. It is one of the ten longest mountain ranges in Russia, the length of which reaches almost 12 thousand meters.<br/><br/>' +
            'The name of the cave comes from the nearby village Vorontsovka.  Vorontsovskaya cave is layed in the upper cretaceous layers of the limestones, but in a number of areas it is embedded in underlying non-clustering deposits. It has more than ten entrances, located in the sides of the valley of the river Kudepsta at an altitude of 419-720 m above sea level.<br/><br/>' +
            'One of the most beautiful halls of the cave is the Pop Hall (or Chandelier Hall). There are some weird forms of stalagmites, stalactites and other karst formations.',
          src: './img/voron.jpg',
          title: 'Воронцовская пещера'
        },
        gardenMuseum: {
          description: 'Уникальный музей цитрусовых культур в городе Сочи.',
          src: './img/gardenMuseum.jpg',
          title: 'Сад-музей «Дерево Дружбы»'
        },
        lotus: {
          description: 'Расстояние от Краснодара: 160,5 км. Темрюкский район. Время в пути и транспорт: 2ч 42минуты.<br/><br/>' +
            'Долина лотосов в Краснодарском крае негласно принадлежит списку самых красивых мест нашей страны. Географически долина лотосов расположена так, что попасть в нее можно разными путями. Экскурсия в долину лотосов есть как из Анапы, так и из других, близлежащих городов и станиц. Идеальное время для посещения такой экскурсии — июль-сентябрь, когда цветут эти священные для некоторых стран (Египет, Индия) растения. Впрочем, водная прогулка по этим чудесным краям, где была создана руками человека эта удивительная плантация индийских лотосов, прекрасна не только в это время года. Долина лотосов занимает площадь около 0,5 км на 1 км, но общая длина речного путешествия гораздо больше — около 15 км. в одну сторону.<br/><br/>' +
            '<b>Valley of the Lotus</b><br/><br/>' +
            'Distance from Krasnodar: 160,5 km. Temryuk district. Travel time and transport: 2h 42minutes.<br/><br/>' +
            'The valley of lotuses in the Krasnodar Territory is behind the list of the most beautiful places of our country. Geographically, the lotus valley is located so that it can be accessed in various ways. An excursion to the lotus valley is available both from Anapa and from other nearby cities and villages. The ideal time for visiting such an excursion is July-September, when these plants bloom for some countries (Egypt, India). However, a boat trip along these wonderful edges, where this amazing plantation of Indian lotuses was created by the hands of man, is beautiful not only at this time of the year. The lotus valley covers an area of ​​about 0.5 km per 1 km, but the total length of river travel is much larger - about 15 km. one way.',
          src: './img/lotus.jpg',
          title: 'Долина Лотосов'
        },
        agepsta: {
          description: 'Горная вершина находится на самой границы между Россией и Абхазией. Северные склоны Агепста покрыты ледниками. Они питают собой воды рек Тихой и Мзымты.',
          src: './img/agepsta.jpg',
          title: 'Гора Агепста'
        },
        kosa: {
          description: 'Расстояние от Краснодара: 333,3 км. Район: Ейский.<br/><br/>' +
            'Время в пути и транспорт: 4ч 24минуты.<br/><br/>' +
            'Коса — низкая намывная полоса суши на берегу моря или озера, причлененная одним концом к берегу.<br/><br/>' +
            'На восточном побережье Азовского моря существенный интерес представляет  коса  Долгая.  Она сложена из песчано-ракушечного материала.<br/><br/>' +
            'Загадка образования азовских кос давно интересовала ученых, но она была решена лишь в годы после Великой Отечественной войны.<br/><br/>' +
            'Выступающие части берега, сложенного глинисто-песчаной толщей, слабо противостоят волновому действию и быстро разрушаются. Песчано-глинистый материал поступает в воду, подхватывается волнами и волновыми течениями и движется вдоль берега то в одну, то в другую сторону в зависимости от меняющегося направления движения волн. Вдольбереговой поток наносов, достигнув мыса, начинает изгибаться. Скорость движения здесь резко замедляется, и избыток наносов оседает на дне. Именно здесь, на повороте, неизбежно и строго в определенном направлении растет коса.<br/><br/>' +
            '<b>The long spit</b><br/><br/>' +
            'Distance from Krasnodar: 333.3 km. District: Yeisky.<br/><br/>' +
            'Travel time and transport: 4h 24minutes.<br/><br/>' +
            'The spit is a low inland strip of land on the seashore or lake, articulated at one end to the shore.<br/><br/>' +
            'On the east coast of the Sea of ​​Azov, Dolga\'s Spit is of considerable interest. It is composed of sand-shell material.<br/><br/>' +
            'The riddle of Azov braid education has long been of interest to scientists, but it was solved only in the years after the Great Patriotic War.<br/><br/>' +
            'The protruding parts of the shore, folded by a clay-sandy thickness, are weakly resistant to wave action and are rapidly destroyed. Sand-clay material enters the water, picked up by waves and wave currents, and moves along the shore in one direction or another, depending on the changing direction of the waves. On the coast of the sedimentary strata, reaching the promontory, it begins to bend. The speed of motion here slows down sharply, and excess sediment settles on the bottom. It is here, at the turn, the spit inevitably and strictly in a certain direction.',
          src: './img/kosa.jpg',
          title: 'Долгая коса'
        },
        guam: {
          description: 'Неповторимая по красоте, глубокая и очень узкая теснина с узкоколейной железной дорогой, проложенной по самой кромке обрыва. Это естественный каньон с высотой стен до 400 метров, образованный рекой Курджипс.<br/><br/>' +
            'Рассказывают, что название "Гуамское ущелье" связано со знаменитой для черкесов победой в 1717 году над крымским ханом Давлет-Гиреем. В ту пору черкесами командовал храбрый воин Гуам, решивший дать сражение несметному войску хана именно здесь. Вот как описывает это событие Джафар Чуяко: «Упорно сопротивляясь, адыгейцы отступали в глубь гор. Река Курджипс указывала им путь. Она привела горцев в Гуамское ущелье. Турецкий отряд не отставал от них. Воины мирзы-бея надеялись перебить горцев в узком ущелье, погруженном в полумрак. Едва последний солдат неприятеля ступил на узкую тропу, тянувшуюся над пропастью, в молчаливом лесу раздался пронзительный свист.<br/><br/>' +
            'Ударяясь о каменные стены многократно усиленным эхом, свист заполнил все ущелье. С крутых вершин покатились вниз с шумом и грохотом огромные камни.<br/><br/>' +
            'Узкоколейная железная дорога протяженностью 8 километров связывает хутор Гуамка с посёлок Мезмай. В летнее время по отремонтированному участку дороги ходит прогулочный поезд, который регулярно перевозит туристов. При этом, даже зимой пешие экскурсии по дороге не прекращаются. ( Место расположения: северная часть Лагонакского нагорья между хутором Гуамка и поселком Мезмай, в 50 километрах от города Апшеронска.)<br/><br/>' +
            'Guam Gorge is a natural canyon founded by the river Kurdgips. The Guam Gorge is associated with the famous victory of the Circassians in 1717 over the Crimean Khan Davlet Girey. At that time, the brave warrior Guam, who was the commander, decided to fight the innumerable army of the khan there.<br/><br/>' +
            'A narrow 8 km railway connects the khutor of Guamka with Mezmay settlement. In summer a recreational train runs on the renovated section of the road, which regularly carries tourists., You can have walking tours on the road even in winter<br/><br/>' +
            'Location: the northern part of the Lagonak Highlands between the village of Guamka and the village of Mezmay, 50 kilometers from the city of Apsheronsk.',
          src: './img/guam.jpg',
          title: 'Гуамское ущелье'
        },
        lakeKard: {
          description: 'Горное озеро высоте 2000 метров, на территории Кавказского государственного биосферного заповедника. Возраст 3500 лет. Вода в озере в течение года несколько раз меняет свою окраску, является проточной, поэтому его t не превышает 12°С. Это же является причиной того, что в озере нет рыбы.',
          src: './img/lakeKard.jpg',
          title: 'Озеро Кардывач'
        },
        kisel: {
          description: 'Скала представляет собой плоскую отвесную стену высотою 46 метров, тянущуюся вдоль моря на расстоянии 60 метров в районе Туапсе.',
          src: './img/kisel.jpg',
          title: 'Скала Киселёва'
        },
        dolm: {
          description: 'Таинственные дольмены, расположенные в окрестностях Геленджика, — одна из самых интересных исторических достопримечательностей Краснодарского края.',
          src: './img/dolm.jpg',
          title: 'Дольмены Геленджика'
        },
        dant: {
          description: 'Это уникальный памятник, результат сотрудничества человека и природы. Располагается в курортной части города Горячий Ключ. У подножия Абадзехской Ключевой горы, на выходе из ущелья расположена Иверская часовня.',
          src: './img/dant.jpg',
          title: 'Дантово ущелье'
        },
        yasen: {
          description: 'Ясенская коса — намывная песчаная коса, расположенная в Краснодарском крае на восточном побережье Азовского моря, между Ясенским заливом и Бейсугским лиманом.',
          src: './img/yasen.jpg',
          title: 'Ясенская коса'
        },
        adov: {
          description: 'Расположен на правом притоке Адова ручья, в бассейне реки Чепси. Высота 12 м.',
          src: './img/adov.jpg',
          title: 'Адов водопад'
        },
        hansk: {
          description: 'Соляное озеро на северном берегу Бейсугского лимана в Краснодарском крае.',
          src: './img/hansk.jpg',
          title: 'Ханское озеро'
        },
        ahtan: {
          description: 'Самый красивый и молодой вулкан Таманского полуострова. Своей формой вулкан представляет собой коническую сопку высотой 67 метров над уровнем моря.',
          src: './img/ahtan.jpg',
          title: 'Ахтанизовский грязевой вулкан'
        },
        saltLake: {
          description: 'Расположено на южном берегу Таманского полуострова, между Бугазским лиманом и мысом Железный Рог. Уникальность его заключается в том, что оно отражает историю развития морской лагуны и имеет на дне лечебную грязь.',
          src: './img/saltLake.jpg',
          title: 'Озеро Соленое'
        },
        karabet: {
          description: 'Cамый большой действующий вулкан Таманского полуострова, высота 152 м над уровнем моря. Извержение сопки происходит каждые 15-20 лет.',
          src: './img/karabet.jpg',
          title: 'Грязевой вулкан "Карабетова сопка"'
        },
        parus: {
          description: 'Памятник природы в Краснодарском крае, находящийся на берегу Чёрного моря в 17 км к юго-востоку от Геленджика, недалеко от села Прасковеевка и хутора Джанхот.',
          src: './img/parus.jpg',
          title: 'Скала Парус'
        },
        induck: {
          description: 'Индюк — гора высотой 859 метров в Туапсинском районе Краснодарского края, располагается территории лесного заказника «Причерноморский», в 40 километрах от города Туапсе. Индюк – вершина (859,1 м), расположена на юго-западном отроге Главного Кавказского хребта (ГКХ), с которым соединена перемычкой, протяженностью около 1 км.  Название горы связано с её формой, она напоминает голову индюка, но однако со времени в результате природных процессов утратила былую форму. Скалы горы Индюк сложены в основном туфами и туффитами липарито-дацитового состава, и кварцевыми порфирами, образовавшимися при вулканической деятельности.<br/><br/>' +
            'Ближайшие крупные города и примерное расстояние от них:<br/><br/>' +
            'Горячий ключ – с. Индюк – 55 км. (на электричке)<br/>' +
            'Хадыженск – с. Индюк – 60 км. (на машине)<br/>' +
            'Туапсе – с. Индюк – 30 км. (на машине или рейсовом автобусе)<br/>' +
            'Краснодар - с. Индюк – 180 км. (на машине)<br/>' +
            'с. Анастасиевское – г. Туапсе -25 км. (на машине или рейсовом автобусе)<br/><br/>' +
            'Массив утвержден комплексным памятником природы решениями Туапсинского райисполкома в 1979 году и Краснодарского крайисполкома в 1983 г. С вершиной в прошлом были связаны: активная хозяйственная деятельность человека (начало ХХ века); героические события Туапсинской оборонительной операции (1942 г.); обнаружение таинственного города на её юго-западном склоне (начало ХХI в.).<br/><br/>' +
            '<b>Mount Turkey</b><br/>' +
            'Turkey is a mountain 859 meters high, located in Tuapse, Krasnodar region.<br/><br/>' +
            'The Turkey top (859,1 m) is located on the south-west spur of the Main Caucasian Range (GKH), which is connected by a barrier, about 1 km long. The name of the mountain is associated with its shape; it resembles the head of a turkey, but has lost its former shape as a result of natural processes. The rocks of Turkey Mountain are mainly composed of tuffs and tuffites of lyparite-dacite composition, and quartz porphyries formed due to volcanic activity.<br/><br/>' +
            'The nearest big cities and approximate distance from them:<br/>' +
            'Goryachiy Kluch - 55 km away. (By train)<br/>' +
            'Khadyzhensk - 60 km away. (By car)<br/>' +
            'Tuapse - 30 km away. (By car or by bus)<br/>' +
            'Krasnodar - 180 km away. (By car)<br/>' +
            'Anastasievskoe - Tuapse - 25 km. (by car or by bus)<br/><br/>' +
            'The massif was approved to be a nature monument by the decision of the Tuapse Regional Executive Committee in 1979. The active human economic activity (the beginning of the 20th century), heroic events of the Tuapse defense operation (1942) and the discovery of a mysterious city on its southwestern slope (early 21st century) were associated with the peak in the past.',
          src: './img/induck.jpg',
          title: 'Гора Индюк'
        },
        dub: {
          description: '«Дуб Великан» произрастает в устьевой области на правом берегу реки Джубга. Возраст дерева свыше 500 лет, высота достигает 25 метров.',
          src: './img/dub.jpg',
          title: 'Дуб — великан'
        },
        imerit: {
          description: 'Расположена в Адлерском районе города Сочи на побережье Чёрного моря в междуречье реки Мзымта и реки Псоу.',
          src: './img/imerit.jpg',
          title: 'Имеретинская низменность'
        },
        sosna: {
          description: 'Массив реликтового леса в окрестностях Геленджика.',
          src: './img/sosna.jpg',
          title: 'Джанхотский бор сосны пицундской'
        },
        waterfalls: {
          description: 'Горное ущелье в Лазаревском районе города Сочи. Находится в урочище Джегош, в долине реки Шахе.',
          src: './img/waterfalls.jpg',
          title: 'Тридцать три водопада'
        },
        hizi: {
          description: 'Озеро в Туапсинском районе Краснодарского края.',
          src: './img/hizi.jpg',
          title: 'Хыжи (адыг. Хыжъы)'
        },
        tuzla: {
          description: 'Самая западная точка Краснодарского края 36°36′ в. д.',
          src: './img/tuzla.jpg',
          title: 'Мыс Тузла́'
        }
      },
      isInfo: false,
      activePlace: null
    }
  },
  computed: {
    infoClass: function () {
      return {
        'info': true,
        'info_active': this.isInfo
      }
    }
  },
  methods: {
    handleClick(placeName) {
      if (!this.isInfo) {
        this.showPlace(this.places[placeName])
      }
    },
    showPlace(place) {
      this.activePlace = place
      this.isInfo = true

      setTimeout(() => {
        document.getElementById('map').scrollTo(0, 0)
      }, 400)
    },
    hidePlace() {
      this.isInfo = false
      this.activePlace = null
    }
  }
}
