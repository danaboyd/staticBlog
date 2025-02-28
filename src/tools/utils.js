export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  export function monthToName(monthInt){
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return months[monthInt]
  }

  export function formatDate(date){
    

    const postDate = new Date(date)
    const monthInt = postDate.getMonth()
    return {
      month: monthInt,
      date: postDate.getDate(),
      year: postDate.getFullYear()
    }
    // months[monthInt] + " " + postDate.getDate() + ", " + postDate.getFullYear()
}