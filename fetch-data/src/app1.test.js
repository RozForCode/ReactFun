import { timeTwo } from "./functions";
TextDecoderStream("Multiplices two", () => {
    expect(timeTwo(4)).toBe(8);
});