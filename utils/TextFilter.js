export default FilterText = (text, type) => {
    switch (type) {
      case 'array':
        return text.join(', ').replace(/_/g, ' ')
      case 'string':
        return text.replace(/_/g, ' ')
      case 'time':
        return text.replace(/T/g, ' ')
      default:
        return '?'
    }
};