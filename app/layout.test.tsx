import { render } from "@testing-library/react"
import RootLayout from "./layout"

describe("RootLayout", () => {
  it("should render a component with page props", () => {
    const children: React.ReactNode = (
      <>
        <div>Test Component</div>
        <div>Test Page</div>
      </>
    )
    const { getByText } = render(<RootLayout>{children}</RootLayout>)
    expect(getByText("Test Component")).toBeInTheDocument()
    expect(getByText("Test Page")).toBeInTheDocument()
  })
})
