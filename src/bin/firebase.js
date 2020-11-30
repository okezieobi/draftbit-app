import { https } from 'firebase-functions';
import admin from 'firebase-admin';

import app from '../app';

admin.initializeApp();

export default https.onRequest(app);
