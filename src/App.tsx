import React, {useState} from 'react';
import './App.css';
import axios from "axios";

const api = {
    getTodo(): Promise<TofolistType> {
        return axios.get('https://jsonplaceholder.typicode.com/tods/1').then((res) => res.data)
    }
}

type TofolistType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    let [todos, setTodos] = useState<Array<TofolistType>>([])
    let [error, setError] = useState<null | string>(null)
    let [isLoading, setIsLoading] = useState(false)

    const onClickHandler = async () => {
        try {
            setIsLoading(true)
            const todolist = await api.getTodo()
            setTodos([...todos, todolist])
        } catch (e) {
            console.log(e)
            setError('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }
    return isLoading ? (<div>isLoading...</div>) : (
        <div>
            <button onClick={onClickHandler}>+</button>
            {error && <div>{error}</div>}
            {todos.map(t => <div>{t.title}</div>)}
        </div>
    );
}


/*function App() {
    let [todos, setTodos] = useState<Array<TofolistType>>([])
    let [error, setError] = useState<null | string>(null)
    let [isLoading, setIsLoading] = useState(false)

    const onClickHandler = () => {
        setIsLoading(true)
        return api.getTodo().then((todolist) => {
            setTodos([...todos, todolist])
        }).catch((e) => {
            console.log(e)
            setError('Something went wrong')
        }).finally(() => {
            setIsLoading(false)
        })
    }
    return isLoading ? (<div>isLoading...</div>) : (
        <div>
            <button onClick={onClickHandler}>+</button>
            {error && <div>{error}</div>}
            {todos.map(t => <div>{t.title}</div>)}
        </div>
    );
}*/

export default App;
