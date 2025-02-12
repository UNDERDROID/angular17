// interface used to define the structure of hotel objects

export interface Rooms {
    total: number;
    booked: number;
    available: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    roomPrice: number;
    amenities: string[];
}