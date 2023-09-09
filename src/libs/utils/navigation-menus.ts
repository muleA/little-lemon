interface PageInfo {
  name: string;
  path: string;
  clickable: boolean;
}

const menus: PageInfo[] = [
  { name: 'Home', path: '/', clickable: true },
  { name: 'About', path: '/about', clickable: true },
  { name: 'Menu', path: '/menu', clickable: true },
  { name: 'Reservations', path: '/bookings', clickable: true },
  { name: 'Confirmed Booking', path: '/confirmedBooking', clickable: false },
  { name: 'Order Online', path: '/orderOnline', clickable: true },
];

export default menus;
