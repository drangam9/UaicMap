import { rooms } from "../data/rooms";

export const selectByType = (types) =>
  rooms.filter((room) => types.includes(room.type));
