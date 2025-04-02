import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from "firebase/firestore";

export async function getItems(userId) {
    if (!userId) return [];

    const q = query(collection(db, "users", userId, "items")); // Query user's items collection
    const querySnapshot = await getDocs(q);

    const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return items;
}

export async function addItem(userId, item) {
    if (!userId || !item) return null;

    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return { id: docRef.id, ...item };
}

export async function deleteItem(userId, itemId) {
    if (!userId || !itemId) return;

    const docRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(docRef);
}
