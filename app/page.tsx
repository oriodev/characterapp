import getCharacters from "./api/characters.api";
import DraggableArea from "@/components/draggablearea";

export default async function Home() {

  const characters = await getCharacters();

  return (
    <main className="p-5 w-full scrollable-x-hidden scrollable-y-hidden">
      <h1 className="text-lg font-bold">character.app</h1>
      <DraggableArea characters={characters} />
    </main>
  );
}
