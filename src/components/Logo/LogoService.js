export const handleSizeProp = (size) => {
  if (!size) return '18px'
  if (size.toLowerCase() === 'small') return '14px'
  if (size.toLowerCase() === 'medium') return '18px'
  if (size.toLowerCase() === 'large') return '22px'
  return size.toLowerCase()
}