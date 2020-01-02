export default (data: any, type: string) => {
  switch (type) {
    case 'array':
      return data.join(', ').replace(/_/g, ' ')
    case 'string':
      return data.replace(/_/g, ' ')
    case 'time':
      return data.replace(/T/g, ' ')
    default:
      return '?'
  }
};