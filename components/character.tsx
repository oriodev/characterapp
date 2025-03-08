// Character.tsx
import React from 'react';
import { Character as CharacterType } from "@/types";

interface Props {
  chara: CharacterType;
  style?: React.CSSProperties; 
  className?: string; 
  onMouseDown?: React.MouseEventHandler; 
  onMouseUp?: React.MouseEventHandler; 
  onTouchStart?: React.TouchEventHandler;
  onTouchEnd?: React.TouchEventHandler;
}

export default function Character ({
  chara,
  style,
  className,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
}: Props) {
  return (
    <div
      style={style}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p>{chara.name}</p>
    </div>
  );
};