import { Provider } from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import { PageLayout } from '../Components/PageLayout/PageLayout'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { NewLayout } from '../Pages/NewLayout'
import { SignUp } from '../Pages/SignUp'
import { store } from '../store/Store'

export const AuthOFF: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout pageTitle='Bem vindo' PageComponent={Home}/>} />
            <Route path="/new-layout" element={<Provider store={store}><PageLayout pageTitle='Novo Layout' PageComponent={NewLayout}/></Provider>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
    )
}