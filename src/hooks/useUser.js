//toda la logica del inicio de sesion
import {auth, firebase} from '../firebase'
import { useRouter } from 'vue-router'


export const useUser = () => {
    const router = useRouter()

    const singIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider() //para que el usuario se registre
            await auth.signInWithPopup(provider)
            router.push('/profile')


        } catch (error) {
            console.log(error)
        }
    }
    const singOut = async () => {
        try {
            await auth.signOut()
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return {singIn,singOut}
}