

export const doubleTap = (callback:Function) => {
  let tapCount = 0
  return () => {
    tapCount++
    setTimeout(() => {
      tapCount = 0
    }, 300)
    if (tapCount === 2) {
      callback()
    } else {
    }
  }
}