import { rooms } from "../etaj1/rooms";

export const selectByType = (types) =>
  rooms.filter((room) => types.includes(room.type));
