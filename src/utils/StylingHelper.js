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

const getColumnsArray = (columns) => columns.split(' ')

/**
 * @todo Do this
 */
const generateColumnsStyles = (columns) => {
  const columnsArr = getColumnsArray(columns)
  const newColumnsArr = []
  for (column in columnsArr) {
    // SETUP
    const tempColumn = column.toString().toLowerCase();

    // CHECK VALUE FOR '1fr', 2fr'
    // WILL NOT ACCEPT '1frabc...'
    if (
      tempColumn.includes('fr') &&
      Number(tempColumn.replace('fr', '')) !== NaN
    ) newColumnsArr.push(tempColumn)

    // CHEK VALUE WITHOUT '...fr' TO BE A NUMBER
    if (
      !tempColumn.includes('1fr') &&
      Number(tempColumn) !== NaN
    ) newColumnsArr.push(`${tempColumn}fr`)
  }
}