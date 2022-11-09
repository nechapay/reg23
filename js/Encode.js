const EncodePage = {
  name: 'EncodePage',
  template:
    '<div>' +
      '<div class="h4 mb-3">{{title}}</div>' +
      '<div v-for="i of links" class="mb-3"><router-link :to="i.path" class="btn btn-outline-primary">{{i.title}}</router-link></div>' +
    '</div>',
  data () {
    return {
      title: 'Кодирование и операции над числами в разных системах счисления',
      links: [
        { path: '/1/1', title: 'Двоичная система счисления' },
        { path: '/1/2', title: 'Различные системы счисления' },
        { path: '/1/3', title: 'Сравнение чисел в различных системах счисления' },
      ]
    }
  }
}

const EncodePage1 = {
  name: 'EncodePage1',
  template:
    '<div>' +
      '<h4><router-link to="/1" class="mb-3">{{parent}}</router-link></h4>' +
      '<h5 class="mt-3">{{title}}</h5>' +
      '<div class="row mt-3">' +
        '<div class="col-4">' +
          '<div class="form-group">' +
            '<label for="name">ФИО</label>' +
            '<input id="name" class="form-control" ' +
              ':readonly="active" :disabled="active" ' +
              'type="text" v-model.trim="name" maxlength="70">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="date">Дата</label>' +
            '<input id="date" class="form-control" ' +
              ':readonly="active" :disabled="active" ' +
              'type="date" v-model="date">' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button ' +
        ':disabled="(active || !isReady) && !done" ' +
        'class="btn btn-outline-primary mb-3" @click="handleStart">Начать</button>' +
      '<runner v-if="active || done" ' +
        ':tasks="tasks" ' +
        ':name="name"' +
        ':date="date"' +
        '@done="done = true"></runner>' +
    '</div>',
  data () {
    return {
      title: 'Двоичная система счисления',
      parent: 'Кодирование и операции над числами в разных системах счисления',
      active: false,
      done: false,
      name: '',
      date: moment().format('YYYY-MM-DD'),
      tasks: [
        {
          id: 1,
          task: {
            text: 'Даны 4 целых числа, записанных в двоичной системе:',
            variants: '10001011;10111000;10011011;10110100'.split(';'),
            question: 'Сколько среди них чисел, больших, чем 9A<sub>16</sub>?',
          },
          globalTaskNumber: 6761,
          answer: '3'
        },
        {
          id: 2,
          task: {
            text: 'Укажите целое число от 8 до 11, двоичная запись которого содержит ровно две единицы. Если таких чисел несколько, укажите наибольшее из них.',
          },
          globalTaskNumber: 6875,
          answer: '10'
        },
        {
          id: 3,
          task: {
            text: 'Даны 4 целых числа, записанных в различных системах счисления: 31<sub>10</sub>, F1<sub>16</sub>, 26<sub>18</sub>, 711<sub>8</sub>. Сколько среди них чисел, двоичная запись которых содержит ровно 5 единиц?',
          },
          globalTaskNumber: 7290,
          answer: '3'
        },
        {
          id: 4,
          task: {
            text: 'Укажите наименьшее четырёхзначное восьмеричное число, двоичная запись которого содержит 5 единиц. В ответе запишите только само восьмеричное число, основание системы счисления указывать не нужно.',
          },
          globalTaskNumber: 7661,
          answer: '1017'
        },
        {
          id: 5,
          task: {
            text: 'Сколько единиц в двоичной записи восьмеричного числа 1731<sub>8</sub>?',
          },
          globalTaskNumber: 8092,
          answer: '7'
        },
        {
          id: 6,
          task: {
            text: 'Укажите наименьшее четырёхзначное шестнадцатеричное число, двоичная запись которого содержит ровно 6 нулей. В ответе запишите только само шестнадцатеричное число, основание системы счисления указывать не нужно.',
          },
          globalTaskNumber: 9188,
          answer: '103F',
          regex: /103F/i
        },
        {
          id: 7,
          task: {
            text: 'Сколько единиц в двоичной записи шестнадцатеричного числа 12F0<sub>16</sub>?',
          },
          globalTaskNumber: 9352,
          answer: '6'
        },
        {
          id: 8,
          task: {
            text: 'Переведите число В0С<sub>16</sub> в двоичную систему счисления.',
          },
          globalTaskNumber: 105,
          answer: '101100001100'
        },
        {
          id: 9,
          task: {
            text: 'Сколько единиц в двоичной записи десятичного числа 519?',
          },
          globalTaskNumber: 7476,
          answer: '4'
        },
        {
          id: 10,
          task: {
            text: 'Переведите в десятичную систему двоичное число 101001<sub>2</sub>.',
          },
          globalTaskNumber: 127,
          answer: '41'
        },
        {
          id: 11,
          task: {
            text: 'Переведите в двоичную систему десятичное число 99.',
          },
          globalTaskNumber: 136,
          answer: '1100011'
        },
        {
          id: 12,
          task: {
            text: 'Даны числа: 1, 3, 11 и 33. Укажите среди них число, двоичная запись которого содержит ровно 3 единицы.',
          },
          globalTaskNumber: 4674,
          answer: '11'
        },
        {
          id: 13,
          task: {
            text: 'Переведите в шестнадцатеричную систему счисления двоичное число 101011.',
          },
          globalTaskNumber: 6405,
          answer: '2B',
          regex: /2B/i
        },
        {
          id: 14,
          task: {
            text: 'Переведите в восьмеричную систему счисления двоичное число 110110.',
          },
          globalTaskNumber: 6483,
          answer: '66'
        },
        {
          id: 15,
          task: {
            text: 'Сколько значащих нулей в двоичной записи восьмеричного числа 7512<sub>8</sub>',
          },
          globalTaskNumber: '№ 43 (Поляков)',
          answer: '5'
        },
        {
          id: 16,
          task: {
            text: 'Укажите наименьшее четырёхзначное шестнадцатеричное число, двоичная запись которого содержит ровно 7 нулей. В ответе запишите только само шестнадцатеричное число, основание системы счисления указывать не нужно.',
          },
          globalTaskNumber: '№ 570 (Поляков)',
          answer: '101F',
          regex: /101F/i
        },
        {
          id: 17,
          task: {
            text: 'Укажите наибольшее четырёхзначное шестнадцатеричное число, двоичная запись которого содержит ровно 9 нулей. В ответе запишите только само шестнадцатеричное число, основание системы счисления указывать не нужно.',
          },
          globalTaskNumber: '№ 50 (Поляков)',
          answer: 'FE00',
          regex: /FE00/i
        },
      ]
    }
  },
  computed: {
    isReady: function () {
      return this.name.length > 0 && this.date.length > 0
    }
  },
  methods: {
    handleStart () {
      this.active = true
    }
  }
}

const EncodePage2 = {
  name: 'EncodePage2',
  template:
    '<div>' +
      '<h4><router-link to="/1" class="mb-3">{{parent}}</router-link></h4>' +
      '<h5 class="mt-3">{{title}}</h5>' +
      '<div class="row mt-3">' +
        '<div class="col-4">' +
          '<div class="form-group">' +
            '<label for="name">ФИО</label>' +
            '<input id="name" class="form-control" ' +
              ':readonly="active" :disabled="active" ' +
              'type="text" v-model.trim="name" maxlength="70">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="date">Дата</label>' +
            '<input id="date" class="form-control" ' +
              ':readonly="active" :disabled="active" ' +
              'type="date" v-model="date">' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button ' +
        ':disabled="(active || !isReady) && !done" ' +
        'class="btn btn-outline-primary mb-3" @click="handleStart">Начать</button>' +
      '<runner v-if="active || done" ' +
        ':tasks="tasks" ' +
        ':name="name"' +
        ':date="date"' +
        '@done="done = true"></runner>' +
    '</div>',
  data () {
    return {
      title: 'Различные системы счисления',
      parent: 'Кодирование и операции над числами в разных системах счисления',
      tasks: [
        {
          id: 1,
          task: {
            text: 'Найдите значение выражения 111<sub>6</sub> + 11<sub>8</sub> : 11<sub>2</sub>. Ответ запишите в двоичной системе счисления.',
          },
          globalTaskNumber: 404,
          answer: '10100'
        },
        {
          id: 2,
          task: {
            text: 'Чему равна сумма чисел 57<sub>8</sub> и 46<sub>16</sub>?',
            variants: ['1) 1010101<sub>2</sub>', '2) 125<sub>8</sub>', '3) A3<sub>16</sub>', '4) 75<sub>16</sub>'],
          },
          globalTaskNumber: 410,
          answer: '4'
        },
        {
          id: 3,
          task: {
            text: 'Чему равна сумма чисел 30<sub>5</sub> и 41<sub>8</sub>? Результат запишите в двоичной системе счисления.',
          },
          globalTaskNumber: 422,
          answer: '110000'
        },
        {
          id: 4,
          task: {
            text: 'Вычислите сумму чисел х и у при x = B3<sub>16</sub>, у = 110110<sub>2</sub>. Результат представьте в десятичной системе счисления.',
          },
          globalTaskNumber: 405,
          answer: '233'
        },
        {
          id: 5,
          task: {
            text: 'Вычислите разность X-Y двоичных чисел, если',
            variants: ['Y=100<sub>2</sub>', 'Х=1010100<sub>2</sub>'],
            question: 'Ответ запишите в двоичной системе.',
          },
          globalTaskNumber: 429,
          answer: '1010000'
        },
        {
          id: 6,
          task: {
            text: 'Вычислите сумму чисел X и Y, если Х=234<sub>10</sub>, У=57<sub>10</sub>. Результат представьте в двоичной системе счисления.',
          },
          globalTaskNumber: 409,
          answer: '100100011'
        },
        {
          id: 7,
          task: {
            text: 'Укажите наибольшее десятичное число, которое в двоичной системе счисления можно записать с помощью трёх цифр.',
          },
          globalTaskNumber: 7354,
          answer: '7'
        },
        {
          id: 8,
          task: {
            text: 'Даны 4 целых числа, записанные в двоичной системе:',
            variants: '10001011,10111000,10011011,10110100'.split(','),
            question: 'Сколько среди них чисел, больших, чем A4<sub>16</sub>+20<sub>8</sub>?',
          },
          globalTaskNumber: 4919,
          answer: '1'
        },
        {
          id: 9,
          task: {
            text: 'Даны 4 числа, они записаны с использованием различных систем счисления. Укажите среди этих чисел то, в двоичной записи которого содержится ровно 6 единиц. Если таких чисел несколько, укажите наибольшее из них.',
            variants: ['1) 63<sub>10</sub>·4<sub>10</sub>', '2) F8<sub>16</sub>+1<sub>10</sub>', '3) 333<sub>8</sub>', '4) 11100111<sub>2</sub>'],
          },
          globalTaskNumber: 5039,
          answer: '1'
        },
        {
          id: 10,
          task: {
            text: 'Какое из приведённых выражений имеет наибольшее значение?',
            variants: ['1) 128<sub>10</sub>+64<sub>10</sub>+8<sub>10</sub>+4<sub>10</sub>', '2) 313<sub>8</sub>', '3) Е5<sub>16</sub>', '4) 11100111<sub>2</sub>'],
          },
          globalTaskNumber: 5260,
          answer: '4'
        },
        {
          id: 11,
          task: {
            text: 'Вычислите: 10101010<sub>2</sub> – 252<sub>8</sub> + 7<sub>16</sub>. Ответ запишите в десятичной системе счисления.',
          },
          globalTaskNumber: 10277,
          answer: '7'
        },
        {
          id: 12,
          task: {
            text: 'Вычислите: 10101011<sub>2</sub> – 253<sub>8</sub> + 6<sub>16</sub>. Ответ запишите в десятичной системе счисления.',
          },
          globalTaskNumber: '№ 33 (Поляков)',
          answer: '33'
        },
      ],
      active: false,
      done: false,
      name: '',
      date: moment().format('YYYY-MM-DD')
    }
  },
  computed: {
    isReady: function () {
      return this.name.length > 0 && this.date.length > 0
    }
  },
  methods: {
    handleStart () {
      this.active = true
    }
  }
}

const EncodePage3 = {
  name: 'EncodePage3',
  template:
    '<div>' +
      '<h4><router-link to="/1" class="mb-3">{{parent}}</router-link></h4>' +
      '<h5 class="mt-3">{{title}}</h5>' +
      '<div class="row mt-3">' +
        '<div class="col-4">' +
          '<div class="form-group">' +
            '<label for="name">ФИО</label>' +
            '<input id="name" class="form-control" ' +
              ':readonly="active" :disabled="active" ' +
              'type="text" v-model.trim="name" maxlength="70">' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="date">Дата</label>' +
            '<input id="date" class="form-control" ' +
              ':readonly="active" :disabled="active" ' +
              'type="date" v-model="date">' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button ' +
        ':disabled="(active || !isReady) && !done" ' +
        'class="btn btn-outline-primary mb-3" @click="handleStart">Начать</button>' +
      '<runner v-if="active || done" ' +
        ':tasks="tasks" ' +
        ':name="name"' +
        ':date="date"' +
        '@done="done = true"></runner>' +
    '</div>',
  data () {
    return {
      title: 'Сравнение чисел в различных системах счисления',
      parent: 'Кодирование и операции над числами в разных системах счисления',
      tasks: [
        {
          id: 1,
          task: {
            text: 'Дано: а = 70<sub>10</sub>, b = 100<sub>8</sub> Какое из чисел с, записанных в двоичной системе, отвечает условию b < с < a?',
            variants: ['1) 1000000<sub>2</sub>', '2) 1000110<sub>2</sub>', '3) 1000101<sub>2</sub>', '4) 1000111<sub>2</sub>'],
          },
          globalTaskNumber: 111,
          answer: '3'
        },
        {
          id: 2,
          task: {
            text: 'Дано: а = 16<sub>10</sub>, b = 18<sub>10</sub>. Какое из чисел с, записанных в двоичной системе, отвечает условию а < с < b.',
            variants: ['1) 10000<sub>2</sub>', '2) 10001<sub>2</sub>', '3) 10101<sub>2</sub>', '4) 10010<sub>2</sub>'],
          },
          globalTaskNumber: 115,
          answer: '2'
        },
        {
          id: 3,
          task: {
            text: 'Сколько верных неравенств среди перечисленных:',
            variants: ['10011010<sub>2</sub> > 256<sub>10</sub>', '10011010<sub>2</sub> > 9F<sub>16</sub>', '10011010<sub>2</sub> > 232<sub>8</sub>'],
          },
          globalTaskNumber: 5227,
          answer: '0'
        },
        {
          id: 4,
          task: {
            text: 'Дано N = 227<sub>8</sub>, M = 99<sub>16</sub>. Какое из чисел K, записанных в двоичной системе, отвечает условию N < K < M?',
            variants: ['1) 10011001<sub>2</sub>', '2) 10011100<sub>2</sub>', '3) 10000110<sub>2</sub>', '4) 10011000<sub>2</sub>'],
          },
          globalTaskNumber: 5986,
          answer: '4'
        },
        {
          id: 5,
          task: {
            text: 'Даны 4 целых числа, записанных в шестнадцатеричной системе: A8, AB, B5, CA. Сколько среди них чисел, больших, чем 265<sub>8</sub>?',
          },
          globalTaskNumber: 6940,
          answer: '1'
        },
        {
          id: 6,
          task: {
            text: 'Какое из неравенств выполняется для чисел А = 164<sub>8</sub>, В = А3<sub>16</sub> и С = 2200<sub>4</sub>?',
          },
          globalTaskNumber: 102,
          answer: '2'
        },
        {
          id: 7,
          task: {
            text: 'Какое из перечисленных ниже выражений имеет наибольшее значение?',
            variants: ['1) 213<sub>8</sub>', '2) 128<sub>10</sub> + 8<sub>10</sub> + 4<sub>10</sub>', '10001010<sub>2</sub>'],
            question: 'В ответе запишите это значение в десятичной системе счисления, основание писать не нужно.',
          },
          globalTaskNumber: 10375,
          answer: '140'
        },
        {
          id: 8,
          task: {
            text: 'Сколько существует натуральных чисел x, для которых выполнено неравенство 11011100<sub>2</sub> < x < DF<sub>16</sub>?',
            question: 'В ответе укажите только количество чисел, сами числа писать не нужно.',
          },
          globalTaskNumber: 11337,
          answer: '2'
        },
        {
          id: 9,
          task: {
            text: 'Сколько существует натуральных чисел x, для которых выполняется неравенство 10110111<sub>2</sub> < x < 10111111<sub>2</sub>?',
            question: 'В ответе укажите только количество чисел, сами числа писать не нужно.',
          },
          globalTaskNumber: 13347,
          answer: '7'
        },
        {
          id: 10,
          task: {
            text: 'Сколько существует натуральных чисел x, для которых выполнено неравенство 11001000<sub>2</sub> ≤ x ≤ CF<sub>16</sub>? В ответе укажите только количество чисел, сами числа писать не нужно.',
          },
          globalTaskNumber: 13450,
          answer: '8'
        },
        {
          id: 11,
          task: {
            text: 'Вычислите: 10101110<sub>2</sub> – 256<sub>8</sub> + A<sub>16</sub>. Ответ запишите в десятичной системе счисления. В ответе запишите только число, основание системы счисления писать не нужно.',
          },
          globalTaskNumber: 13531,
          answer: '10'
        },
        {
          id: 12,
          task: {
            text: 'Сколько единиц в двоичной записи числа E4<sub>16</sub>?',
          },
          globalTaskNumber: 13612,
          answer: '4'
        },
        {
          id: 13,
          task: {
            text: 'Сколько существует целых чисел x, для которых выполняется неравенство 2A<sub>16</sub> < x < 61<sub>8</sub>?',
            question: 'В ответе укажите только количество чисел, сами числа писать не нужно.',
          },
          globalTaskNumber: 13728,
          answer: '6'
        },
      ],
      active: false,
      done: false,
      name: '',
      date: moment().format('YYYY-MM-DD')
    }
  },
  computed: {
    isReady: function () {
      return this.name.length > 0 && this.date.length > 0
    }
  },
  methods: {
    handleStart () {
      this.active = true
    }
  }
}