import ShortUniqueId from 'short-unique-id';
const shortId = new ShortUniqueId();
const uuid = prefix => prefix + '-' + shortId.randomUUID(6);

export default uuid;