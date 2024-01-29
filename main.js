import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCksetmQe_ec2BH6g5MKqQU_1K1U6htmww",
  authDomain: "data-7d32f.firebaseapp.com",
  projectId: "data-7d32f",
  storageBucket: "data-7d32f.appspot.com",
  messagingSenderId: "156748846014",
  appId: "1:156748846014:web:4269883b14bdb400b2dfef",
  measurementId: "G-W3SBB85TF1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambildaftarsiswa  () {
  const siswaRef = collection(db, "siswa");
  const q =query(siswaRef, orderBy("nama"));
  const querysnapshot = await getDocs(q);
  
  let retval = [];
  querysnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });
  
  return retval;
}
 