const getPaddingArray = (padding) => padding.split(' ')

const getHorizontalPadding = (padding) => {
  const paddingArr = getPaddingArray(padding)
  switch (paddingArr.length) {
    case 4: return paddingArr[1] + paddingArr[3]
    case 2: return paddingArr[1]
    case 1: return paddingArr[0]
    default: throw new Error("Invalid padding")
  }
}

const getVericalPadding = (padding) => {
  const paddingArr = getPaddingArray(padding)
  switch (paddingArr.length) {
    case 4: return paddingArr[0] + paddingArr[2]
    case 2:
    case 1: return paddingArr[0]
    default: throw new Error("Invalid padding")
  }
}