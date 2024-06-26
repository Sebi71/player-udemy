export default function formatValue(value) {
    const minutes = Math.trunc(value / 60)
    let secondes = Math.trunc(value % 60)

    if(secondes < 10) {
      secondes = `0${secondes}`
    }

    return `${minutes}:${secondes}`
  }