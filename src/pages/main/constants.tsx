import {
  ContactsIcon,
  HomeIcon,
  Img01Png,
  Img02Png,
  Img03Png,
  Img04Png,
  Img05Png,
  Img06Png,
  PhoneIcon,
  ProcessIcon,
  ServicesIcon,
  TariffsIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'assets'

export const ANCHOR = {
  HOME: 'home',
  SERVICE: 'service',
  PROCESS: 'process',
  PRICING: 'pricing',
  CONTACTS: 'contacts',
}

export const NAVIGATION = [
  {
    icon: <HomeIcon />,
    label: 'Главная',
    anchor: '#' + ANCHOR.HOME,
  },
  {
    icon: <ServicesIcon />,
    label: 'Услуги',
    anchor: '#' + ANCHOR.SERVICE,
  },
  {
    icon: <ProcessIcon />,
    label: 'Процесс',
    anchor: '#' + ANCHOR.PROCESS,
  },
  {
    icon: <TariffsIcon />,
    label: 'Тарифы',
    anchor: '#' + ANCHOR.PRICING,
  },
  {
    icon: <ContactsIcon />,
    label: 'Контакты',
    anchor: '#' + ANCHOR.CONTACTS,
  },
]

export const SERVICE_CARDS = [
  {
    icon: Img05Png,
    title: 'Регистрация ООО или ИП',
    text: 'Помощь при регистрации ООО или ИП в регистрирующем органе ФНС. Без привязки к прописке.',
  },
  {
    icon: Img01Png,
    title: 'Оформление первичных документов',
    text: 'Счета, счет-фактуры, акты, товарные накладные, УПД',
  },
  {
    icon: Img02Png,
    title: 'Оптимизация налогов и контроль безопасного уровня налоговой нагрузки',
    text: 'Готовы предложить и внедрить возможные способы оптимизации и снижения налогов. Ну и конечно законным путем.',
  },
  {
    icon: Img03Png,
    title: 'Кадровый учет',
    text: 'Электронные трудовые, увольнения и принятие на работу, а также учет больничных и отпусков. Просто доверьте эту рутину нам ',
  },
  {
    icon: Img04Png,
    title: 'Подготовка отчётных документов для ИФНС',
    text: 'Для ИФНС нужно подготовить пакет документов, заполнить все без ошибок и отправить. Эту работу полностью берем на себя',
  },
  {
    icon: Img06Png,
    title: 'Взаимодействие с налоговыми органами',
    text: 'При возникновении вопросов к Вашей компании, берем на себя взаимодействие с налоговыми и внебюджетными фондами',
  },
]

export const SECTION_TITLE = {
  SERVICE: {
    subtitle: 'Наши услуги',
    title: 'Мы можем всё',
    description: 'Мы собрали самые популярные услуги, но возможно Вашему бизнесу нужно то чего нет среди этих карточек, свяжитесь с нами и мы обсудим то, что необходимо именно Вам.',
  },
  PROCESS: {
    subtitle: undefined,
    title: 'Процесс работы',
    description: 'Взаимодействие всегда требует времени, но  мы постарались настроить наше взаимодействие с клиентами самым удобным способом, без лишних встреч',
  },
  PRICING: {
    subtitle: 'Наши предложения',
    title: 'Выберите свой тариф',
    description: 'Примерные цены на услуги. Но к каждому клиенту индивидуальный подход, поэтому свяжитесь с нами, опишите объем работ и мы подберем тариф именно для Вас',
  },
  CONTACTS: {
    subtitle: 'Контакты',
    title: 'Свяжитесь с нами',
    description: 'Выберите удобный для Вас мессенджер, напишите или позвоните нам, мы сможем предложить услуги, которые неободимы именно Вам',
  },
  ABOUT: {
    subtitle: 'Для кого мы работаем',
    title: 'Сфера деятельности наших клиентов',
    description: 'Мы предоставляем услуги для различных сегментов бизнеса.',
  },
}

export const PROCESS_STEPS = [
  {
    title: 'Отправка',
    description: 'Сфотографируйте документ и отправьте своему бухгалтеру',
  },
  {
    title: 'Получение',
    description: 'Бухгалтер получит его, внесет в систему электронной бухгалтерии и сделает все необходимое',
  },
  {
    title: 'Расчет',
    description: 'Бухгалтер за Вас расчитает налоги и зарплату, подготовит и сдаст за Вас налоговую отчетность',
  },
  {
    title: 'Помощь',
    description: 'А еще - проконсультирует, и ответит на возникающие по ходу дела вопросы. Поможет избежать проблем с налоговой',
  },
]

export const TARIFFS = [
  {
    title: 'Новичок',
    price: 3000,
    promoPrice: 2500,
    features: ['7 актов/счетов/упд ', 'Расчет налога, контроль безопасного уровня дохода', 'Создание платежей по страховым взносам и налогам'],
    sale: false,
    description: 'Для ИП на УСН 6%, начинающих предпринимателей с годовым оборотом выручки до 60млн р',
    period: 'квартал',
  },
  {
    title: 'Продвинутый',
    price: 15000,
    promoPrice: 10000,
    features: ['До 5 сотрудников', 'До 40 исходящих документов', 'Полное взаимодействие с налоговыми органами'],
    sale: true,
    description: 'Для ООО на УСН 6% или 15%, ИП на УСН, ООО на ОСНО',
    period: 'месяц',
  },
  {
    title: 'Разовый',
    price: 2000,
    promoPrice: 1200,
    features: ['Декларация УСН 6% - 2000р', 'Декларация УСН 15% - 5000р', 'Алкодекларация - 3000р/квартал', 'Заявление на открытие патента - 1200р'],
    sale: false,
    description: 'Если необходима разовая услуга',
  },
]

export const CONTACTS = [
  {
    title: 'Telegram',
    contact: '@VictoriiaLazareva',
    href: 'https://t.me/VictoriiaLazareva',
    icon: <TelegramIcon />,
  },
  {
    title: 'WhatsApp',
    contact: '+7 995 1125280',
    href: 'https://wa.me/+79951125280',
    icon: <WhatsappIcon />,
  },
  {
    title: 'Телефон',
    contact: '+7 995 1125280',
    href: 'tel:+79951125280',
    icon: <PhoneIcon />,
  },
]

export const CLIENTS = [
  {
    title: 'Инфо-бизнес (блогеры)',
    value: 80,
  },
  {
    title: 'Интернет магазины',
    value: 60,
  },
  {
    title: 'Питание',
    value: 40,
  },
  {
    title: 'Торговля',
    value: 50,
  },

]
