import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYY5Syb074oXhwXLwQq4gRwzZTNXXML4M",
  authDomain: "integrador-74dce.firebaseapp.com",
  projectId: "integrador-74dce",
  storageBucket: "integrador-74dce.appspot.com",
  messagingSenderId: "673613103528",
  appId: "1:673613103528:web:e15610473e0f05f886dd9d"
}

const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

//INICIALIZAR EL SERVIDOR
const app = express()

//INICIALIZAR EL MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())

//RUTAS DEL BACKEND
//RUTA HOME
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

//ARRANCAMOS EL SERVER 
const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`Server in Port: ${Port}`)
})