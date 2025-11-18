import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/users";


export default function CreateUser() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({
            ...user,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createUser(user)
        
        if(response.status === 201) {
            navigate('/users')
        }
    }

    return (
        <main>
            <form>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" id="nome" value={user.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" id="senha" value={user.senha} onChange={handleChange} />
                </div>
                <button type="reset">Limpar</button>
                <button
                    type="submit"
                    onClick={handleSave}
                >Enviar</button>
            </form>
        </main>
    )
}