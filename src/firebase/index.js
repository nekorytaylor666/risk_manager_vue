import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./config";
export const app = firebase.initializeApp(firebaseConfig.config);

export const db = app.firestore();

export const storage = app.storage();

const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
