import {
  DoctorAlexanderJannie,
  DoctorAlexaRachel,
  DoctorJames,
  DoctorJohn,
  DoctorLiu,
  DoctorNairobi,
  DoctorPoeMinn,
  DoctorSunnyFrank,
  Hospital1,
  Hospital2,
  Hospital3,
  News1,
  News2,
  News3,
} from 'assets';

const data = {
  doctor: {
    categories: [
      {
        id: 1,
        category: 'dokter umum',
      },
      {
        id: 2,
        category: 'psikiater',
      },
      {
        id: 3,
        category: 'dokter obat',
      },
      {
        id: 4,
        category: 'dokter anak',
      },
    ],
    ratedDoctors: [
      {
        id: 1,
        name: 'Alexa Rachel',
        profession: 'Pediatrician',
        pic: DoctorAlexaRachel,
        rate: 5,
      },
      {
        id: 2,
        name: 'Sunny Frank',
        profession: 'Pediatrician',
        pic: DoctorSunnyFrank,
        rate: 4,
      },
      {
        id: 3,
        name: 'Poe Minn',
        profession: 'Podiatrist',
        pic: DoctorPoeMinn,
        rate: 4,
      },
    ],
    news: [
      {
        id: 1,
        title: 'Is it safe to stay at home during coronavirus?',
        createdAt: 'Today',
        pic: News1,
      },
      {
        id: 2,
        title: 'Consume yellow citrus helps you healthier',
        createdAt: 'Today',
        pic: News2,
      },
      {
        id: 3,
        title: 'Learn how to make a proper orange juice at home',
        createdAt: 'Today',
        pic: News3,
      },
    ],
  },
  messages: [
    {
      id: 1,
      name: 'Alexander Jannie',
      message: 'Baik ibu, terima kasih banyak atas wakt...',
      pic: DoctorAlexanderJannie,
    },
    {
      id: 2,
      name: 'Nairobi Putri Hayza',
      message: 'Oh tentu saja tidak karena jeruk it...',
      pic: DoctorNairobi,
    },
    {
      id: 3,
      name: 'John McParker Steve',
      message: 'Oke menurut pak dokter bagaimana unt...',
      pic: DoctorJohn,
    },
  ],
  hospitals: [
    {
      id: 1,
      category: 'Rumah Sakit',
      title: 'Citra Bunga Merdeka',
      address: 'Jln. Surya Sejahtera 20',
      pic: Hospital1,
    },
    {
      id: 2,
      category: 'Rumah Sakit Anak',
      title: 'Happy Family & Kids',
      address: 'Jln. Surya Permata 30',
      pic: Hospital2,
    },
    {
      id: 3,
      category: 'Rumah Sakit Jiwa',
      title: 'Tingkatan Paling Atas',
      address: 'Jln. Surya Permata 39',
      pic: Hospital3,
    },
  ],
  chooseDoctors: [
    {
      id: 1,
      name: 'Alexander Jannie',
      gender: 'Wanita',
      pic: DoctorAlexanderJannie,
    },
    {
      id: 2,
      name: 'John McParker Steve',
      gender: 'Pria',
      pic: DoctorJohn,
    },
    {
      id: 3,
      name: 'Nairobi Putri Hayza',
      gender: 'Wanita',
      pic: DoctorNairobi,
    },
    {
      id: 4,
      name: 'James Rivillia',
      gender: 'Pria',
      pic: DoctorJames,
    },
    {
      id: 5,
      name: 'Liu Yue Tian Park',
      gender: 'Wanita',
      pic: DoctorLiu,
    },
  ],
};

export default data;
