// eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  const changeVar = JSON.stringify(_q);
  useEffect(() => {
    let ref = collection(db, c);

    if (_q) {
      ref = query(ref, where(..._q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c, changeVar]);
  return { documents };
};
