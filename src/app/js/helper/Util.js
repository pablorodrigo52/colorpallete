

export function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function copyToClipboard(str){
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    const result = document.execCommand('copy');
    document.body.removeChild(el);
    return result;
}

export function normalizeToNumber(c){
    return Number((c) ? c.replace(")","").replace("(", "").replace(",","") : '');
  }