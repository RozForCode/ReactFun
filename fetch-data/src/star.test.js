import { Star } from "star.js";
import { render } from "@testing-library/react"
test("render an h1", () => {
    const { getByText } = render(<Star />)
    const h1 = getByText(/Cool Star/)
    except(h1).toHaveTextContent("Cool Star")
})