import Room from "./Room";

export default function Rooms({ rooms, onClick }) {
  return (
    <>
      {rooms?.map((room) => (
        <Room key={room.id} room={room} onClick={onClick} />
      ))}
    </>
  );
}
