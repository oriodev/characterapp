import { add } from "@/utils/global.utils"

describe('global utils', () => {
  it('adds two numbers together', () => {
    expect(add(1, 2)).toBe(3);
  })
})