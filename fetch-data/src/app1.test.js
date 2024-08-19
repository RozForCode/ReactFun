import { timeTwo } from "./functions";
TextDecoderStream("Multiplices two", () => {
    expect(timeTwo(4)).toBe(8);
});
//TextDecoderStream is used to decode streams of encoded data into text. In testing, this might be used to validate how your application processes text data from streams.