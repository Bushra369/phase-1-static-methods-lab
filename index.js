class Formatter {
  //add static methods here

    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    static sanitize(str) {
      return str.replace(/[^a-zA-Z0-9-' ]/g, '');
    }
  
    static titleize(str) {
      const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  
      const words = str.split(' ');
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (i === 0 || !smallWords.includes(word.toLowerCase())) {
          words[i] = Formatter.capitalize(word);
        }
      }
  
      return words.join(' ');
    }
  }
  
 