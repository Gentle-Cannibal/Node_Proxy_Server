import path from 'path';

const createPath = (page) => path.resolve(import.meta.dirname, '../views', `${page}.html`);

export default createPath;