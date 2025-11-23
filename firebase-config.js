// firebase-config.js
// Configuração do Firebase para o Prato & Peso (site estático)

// IMPORTANTE:
// Este arquivo supõe que você está carregando o Firebase via <script>
// usando a versão "compat" (firebase-app-compat e firebase-firestore-compat).
// Ou seja, nas páginas HTML vamos ter algo assim:
//
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
// <script src="firebase-config.js"></script>
//
// A partir daí, a variável global "firebase" fica disponível aqui.

// Config oficial do seu projeto (copiado do painel do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyABfAWUAW6a6g93B9QKooTKd5Mj645G3vE",
  authDomain: "prato-e-peso-77b5a.firebaseapp.com",
  projectId: "prato-e-peso-77b5a",
  storageBucket: "prato-e-peso-77b5a.firebasestorage.app",
  messagingSenderId: "432109202072",
  appId: "1:432109202072:web:1c8636db0c161318ddfeed"
};

// Inicializa o Firebase usando a API "compat"
firebase.initializeApp(firebaseConfig);

// Cria uma referência global para o Firestore.
// Vamos usar "db" nas outras páginas (clube-area, etc.) para salvar/ler dados.
const db = firebase.firestore();
