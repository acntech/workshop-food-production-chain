//const ShortUniqueId = require('short-unique-id');
//const shortId = new ShortUniqueId();
//exports.uuid = prefix => prefix + '-' + shortId.randomUUID(6);

const LETTER_BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567';

const randomLetters = numberOfLetters => {
    let letters = '';

    for (i = 0; i < numberOfLetters; i++) {
        letters += LETTER_BASE[Math.floor(Math.random() * LETTER_BASE.length)];        
    }

    return letters;
}
const uuid = prefix => prefix + '-' + randomLetters(6)

exports.uuid = uuid;