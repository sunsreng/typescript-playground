function toCapitalize(text: string) {
  console.log(text)
  if (!text) return ''

  const strings = (text + '').split(' ')
  const formattedStrings = strings?.map((t) => t?.charAt(0)?.toUpperCase() + t?.slice(1)?.toLowerCase())

  return formattedStrings?.join(' ') || ''
}

console.log(toCapitalize("dd sdf dsfd dsf"))