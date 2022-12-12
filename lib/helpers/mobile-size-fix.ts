// Function - tips pour ajuster les tailles en mode mobile (--vh)

function handleResize() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

export function fixMobileSize() {
  // only execute all the code below in client side
  if (typeof window !== "undefined") {
    // Handler to call on window resize
    handleResize
    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }
}
