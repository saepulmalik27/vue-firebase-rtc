import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Filter from "bad-words";

import { ref, onUnmounted, computed } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyAsvHMJsSjwUO5YDRgEzLYa8Xin3xHaryw",
  authDomain: "vue-chat-f642f.firebaseapp.com",
  projectId: "vue-chat-f642f",
  storageBucket: "vue-chat-f642f.appspot.com",
  messagingSenderId: "1064036844931",
  appId: "1:1064036844931:web:0436960b489e6acd97a2b6",
  measurementId: "G-PHBNBPCZ1V",
};

firebase.initializeApp(firebaseConfig);

/**
 * TODO: HOOK AUTH
 */

const auth = firebase.auth();
export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);
  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };
  const signOut = () => auth.signOut();
  return { user, isLogin, signIn, signOut };
}

const firestore = firebase.firestore();
const messagesCollection = firestore.collection("messages");
const messagesQuery = messagesCollection
  .orderBy("createdAt", "desc")
  .limit(100);
const filter = new Filter();

export function useChat() {
  const messages = ref([]);
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => {
        return { id: doc.id, ...doc.data() };
      })
      .reverse();
  });
  onUnmounted(unsubscribe);
  const { user, isLogin } = useAuth();
  const sendMessage = (text) => {
    if (!isLogin.value) return;
    const { photoURL, uid, displayName } = user.value;
    console.log(user.value);
    const message = {
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: filter.clean(text),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    messagesCollection.add(message);
  };
  console.log(messages);
  return { messages, sendMessage };
}
