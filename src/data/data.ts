import { sampleUsers } from './users';

export const sampleTrips = [
  {
    id: 1,
    driver: sampleUsers['pedro'],
    passengers: [sampleUsers['marta']],
    origin: 'Centro Comercial Way',
    destination: 'ETSII',
    date: '14 de Marzo de 2023, 12:00',
    price: 2,
    requestStatus: 'pending',
  },
  {
    id: 2,
    driver: sampleUsers['marta'],
    passengers: [sampleUsers['paco']],
    origin: 'Avenida Andalucía, Dos Hermanas',
    destination: 'La Motilla',
    date: '11 de Marzo de 2023, 17:30',
    price: 1.5,
    requestStatus: 'pending',
  },
  {
    id: 3,
    driver: sampleUsers['paco'],
    passengers: [sampleUsers['pedro']],
    origin: 'Centro Comercial Way',
    destination: 'ETSII',
    date: '14 de Marzo de 2023, 12:00',
    price: 2,
    requestStatus: 'pending',
  },
  {
    id: 4,
    driver: sampleUsers['pedro'],
    passengers: [
      sampleUsers['marta'],
      sampleUsers['paco'],
      sampleUsers['luis'],
    ],
    origin: 'Avenida Andalucía, Dos Hermanas',
    destination: 'La Motilla',
    date: '11 de Marzo de 2023, 17:30',
    price: 1.5,
    requestStatus: 'accepted',
  },
];

export const sampleTripRequests = [
  {
    id: 1,
    type: 'recurring',
    driver: {
      id: 2,
      name: 'Paco Perez',
      rating: 4.6,
      avatar: '/assets/avatar.png',
      gender: 'M',
    },
    requestedBy: {
      id: 1,
      name: 'Pedro Sánchez',
      rating: 3.5,
      avatar: '/assets/avatar.png',
      gender: 'M',
    },
    requestStatus: 'pending',
    origin: 'Centro Comercial Way',
    destination: 'ETSII',
    date: 'Cada lunes, 12:00',
    price: 2,
  },
  {
    id: 2,
    type: 'onetime',
    driver: {
      id: 3,
      name: 'Josefina Mayo',
      rating: 4.7,
      avatar: '/assets/avatar.svg',
    },
    requestedBy: {
      id: 4,
      name: 'Luisa Fernanda Rodríguez',
      rating: 5.0,
      avatar: '/assets/avatar.png',
      gender: 'F',
    },
    requestStatus: 'pending',
    origin: 'Avenida Andalucía, Dos Hermanas',
    destination: 'La Motilla',
    date: '11 de Marzo de 2023, 17:30',
    price: 1.5,
  },
];

export const sampleUser = {
  id: 1,
  name: 'Paco',
  lastName: 'Perez',
  photo: '/assets/avatar.png',
};

export const individualRides = [
  {
    individualRideId:1,
    passenger : {
      user : {
        username :'Jesús Marchena',
        photo: '/assets/avatar.png',
      }
    },
    passenger_routine : {
      start_location : '88.2231, 88.2324',
      end_location : '88.2431, 88.2124',
      days : 'martes y jueves',
      end_date : '14 de Marzo de 2023',
      start_time_initial : '2021-05-01T21:00:00',
      start_time_final : '2021-05-01T21:00:00',
    },
    price : 3,
    ride_status : 'Pending start',
    acceptation_status : 'Pending Confirmation',
    start_date : '14 de Marzo de 2023',
    end_date : '14 de Marzo de 2023',
    start_location : 'Escuela Técnica Superior de Ingeniería Informática, 41002 Sevilla',
    end_location : 'Avenida de Andalucía, 35, Dos Hermanas, 41002 Sevilla',
    message : 'Algunos días no haré el viaje, avisaré con antelación.',
  },
  {
    individualRideId:2,
    passenger : {
      user : {
        username :'Pedro Sánchez',
        photo: '/assets/avatar.png',
      }
    },
    passenger_routine : {
      start_location : '88.2231, 88.2324',
      end_location : '88.2431, 88.2124',
      days : 'martes y jueves',
      end_date : '14 de Marzo de 2023: 8:00',
      start_time_initial : '8:00',
      start_time_final : '8:15',
    },
    price : 3,
    ride_status : 'Pending start',
    acceptation_status : 'Pending Confirmation',
    start_date : '14 de Marzo de 2023: 7:30',
    end_date : '14 de Marzo de 2023: 8:00',
    start_location : '9.33,19.23',
    end_location : '9.33,19.28',
    message : 'Algunos días no haré el viaje, avisaré con antelación',
  },
]
  
export const sampleRoutines = [
  {
    id: 1,
    departureHourStart: '8:00',
    departureHourEnd: '8:15',
    type: 'driver',
    origin: 'Centro comercial Way, Dos Hermanas, Sevilla, 41702',
    destination: 'San Jacinto, Triana, Sevilla, 41010',
    day: 'Lunes',
  },
  {
    id: 1,
    departureHourStart: '9:00',
    departureHourEnd: '9:30',
    type: 'driver',
    origin: 'San Jacinto, Triana, Sevilla, 41010',
    destination: 'Centro comercial Lagoh, Sevilla, 41007',
    day: 'Lunes',
  },
  {
    id: 3,
    departureHourStart: '15:00',
    departureHourEnd: '15:15',
    type: 'driver',
    origin: 'Centro comercial Way, Dos Hermanas, Sevilla, 41702',
    destination: 'Centro comercial Lagoh, Sevilla, 41007',
    day: 'Martes',
  },
  {
    id: 2,
    departureHourStart: '13:30',
    departureHourEnd: '14:00',
    type: 'passenger',
    origin: 'Centro comercial Way, Dos Hermanas, Sevilla, 41702',
    destination: 'Centro comercial Lagoh, Sevilla, 41007',
    day: 'Jueves',
  },
  {
    id: 2,
    departureHourStart: '15:00',
    departureHourEnd: '15:30',
    type: 'passenger',
    origin: 'Centro comercial Lagoh, Sevilla, 41007',
    destination: 'San Jacinto, Triana, Sevilla, 41010',
    day: 'Jueves',
  },
  {
    id: 4,
    departureHourStart: '18:00',
    departureHourEnd: '18:15',
    type: 'passenger',
    origin: 'Centro comercial Way, Dos Hermanas, Sevilla, 41702',
    destination: 'Hospital Virgen del Rocío, Sevilla, 41012',
    day: 'Domingo',
  },
  {
    id: 5,
    departureHourStart: '20:00',
    departureHourEnd: '20:15',
    type: 'driver',
    origin: 'Centro comercial Way, Dos Hermanas, Sevilla, 41702',
    destination: 'Centro comercial Lagoh, Sevilla, 41007',
    day: 'Domingo',
  },
];
