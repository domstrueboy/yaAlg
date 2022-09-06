function areAnagrams(a, b) {
    const dictA = dictFromStr(a);
    const dictB = dictFromStr(b);
    return a.length === b.length && compareDicts(dictA, dictB);
}

function dictFromStr(str) {
    const dict = {};
    str.split('').forEach(el => {
        dict[el] = typeof dict[el] === 'number' ? dict[el] + 1 : 0;
    });
    return dict;
}

function compareDicts(a, b) {
    return Object.keys(a).every(key => a[key] === b[key])
        && Object.keys(b).every(key => b[key] === a[key])
}

const result = areAnagrams('Anaconda', 'anaconda');
const result1 = areAnagrams('Anaconda', 'Acdnonda');
const result2 = areAnagrams('Anaconda', 'Acanondaa');
const result3 = areAnagrams('Anaconda', 'Acanonda');

console.log(result, result1, result2, result3);