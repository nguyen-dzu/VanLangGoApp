export default {
  initArray: (num: number) => {
    return Array.from(Array(num).keys())
  },

  stringToWords: (str: string = '') => {
    return str.trim().replace(/\s\s+/g, ' ').replace('\n', ' ').split(' ')
  },
}
