export const formatDate = date => {
    const isoDate = new Date(date)
    const formatted = `${isoDate.getDate()}-${isoDate.getMonth()+1}-${isoDate.getFullYear()}`
    return formatted
}