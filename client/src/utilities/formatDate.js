export const formatDate = date => {
    const isoDate = new Date(date)
    const formatted = `${isoDate.getDay()}/${isoDate.getMonth()}/${isoDate.getFullYear()}`
    return formatted
}