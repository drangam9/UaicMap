import { roomsArr } from "../etaj1/paths";
import { rooms } from "../etaj1/rooms";

export const selectByType = (types) =>
  roomsArr.map((point, i) => {
    return {
      ...point,
      rooms:
        point.rooms
          ?.map((room) => rooms[room])
          .filter((room) => types.includes(room.type))
          .map((room) => room.id) ?? [],
    };
  });
