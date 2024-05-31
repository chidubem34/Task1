function formatName(sentence) {
    const words = sentence.trim().split(/\s+/);
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return capitalizedWords.join(' ');
}

console.log(formatName('      victor       red ')); 