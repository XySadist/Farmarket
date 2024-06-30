class Utils {
  static emptyElement(htmlElement) {
    const element = htmlElement;
    element.innerHTML = '';
  }

  static showElement(htmlElement) {
    const element = htmlElement;
    element.style.display = '';
    element.hidden = false;
  }

  static hideElement(htmlElement) {
    const element = htmlElement;
    element.style.display = 'none';
    element.hidden = true;
  }
}

export default Utils;
