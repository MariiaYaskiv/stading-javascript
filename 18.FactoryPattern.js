//Фабрика (англ. factory) создаёт объект, избавляя нас от необходимости знать детали создания.

//JavaScript

class Apartment {
  constructor(roomsNumber, square, floor) {
    this.roomsNumber = roomsNumber;
    this.floor = floor;
    this.square = square;
  }

  getOptions() {
    return `How many rooms: ${this.roomsNumber}, Square: ${this.square}, Floor: ${this.floor}`;
  }
};

class ApartmentFactory {
  createApartament(type, floor) {
    switch(type) {
      case('oneRoom'):
        return new Apartment(1, 35, floor);
      case('twoRooms'):
        return new Apartment(2, 55, floor);
      case('threeRooms'):
        return new Apartment(3, 75, floor);
      default:
        throw new Error('We didn`t find this flat');
    }
  }
}

const oneRoomAparnament = new ApartmentFactory().createApartament('oneRoom', 10);

console.log(oneRoomAparnament.getOptions());


