import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './index.js',
    output : {
        path: path.resolve(__dirname, '../assets'),
        filename: 'bundle.js'
    },
    mode: 'production'
};