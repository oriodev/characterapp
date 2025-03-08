"use client"

import { Character as CharacterType } from "@/types";
import Draggable from "react-draggable";
import Character from "./character";

interface Props {
  characters: CharacterType[]
}

export default function DraggableArea ({ characters }: Props) {
  return (
    <section className="w-full flex">
      {
        characters.map((chara) => (
          <Draggable key={chara.id}>
            <Character chara={chara} className="p-5 bg-cyan-900 text-white hover:cursor-pointer" />
          </Draggable>
          ))
      }
    </section>
  )
}