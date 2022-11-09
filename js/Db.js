const DbPage = {
  name: 'DbPage',
  template:
    '<div>' +
      '<div class="h4 mb-3">{{title}}</div>' +
      '<div v-for="i of links" class="mb-3"><router-link :to="i.path" class="btn btn-outline-primary">{{i.title}}</router-link></div>' +
    '</div>',
  data () {
    return {
      title: 'Базы данных. Файловая система',
      links: [
        { path: '/4/1', title: 'Двоичная система счисления' },
        { path: '/4/2', title: 'Различные системы счисления' },
        { path: '/4/3', title: 'Сравнение чисел в различных системах счисления' },
      ]
    }
  }
}

const DbPage1 = {
  name: 'DbPage1',
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
      title: 'Определение данных по одной и двум таблицам',
      parent: 'Базы данных. Файловая система',
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