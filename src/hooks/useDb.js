import {db,marcaTiempo} from '../firebase'
import {ref} from 'vue'
import {useAuth} from '@vueuse/firebase'

export const useDb = () => {
    const referencia = db.collection('toDo')
    const loading = ref(false)
    const {user} =useAuth()

    const getTodos = async () => {
        try {
            loading.value = true
            const res = await referencia.get()
            return res.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        } catch (error) {
            return {
                error,
                res:true
            }
        }finally{
            loading.value = false
        }
       

    }
    const addTodo = async(text) => {
        try {
            const toDo = {
                text:text,
                time: marcaTiempo(),
                status: false,
                uid: user.value.uid
            }
            const res = await referencia.add(toDo)

            return{
                id:res.id,
                ...toDo
            }
        } catch (error) {
            return{
                error,
                res: true
            }
        }
    }
    
    return {getTodos,loading,addTodo}
}