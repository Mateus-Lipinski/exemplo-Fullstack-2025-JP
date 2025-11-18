import { useEffect, useState } from 'react'
import { getUsers } from '../../api/users'
import { Link } from 'react-router-dom'
// const mock = []

function Users() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    async function TransformaEmLista() {
        const todosUsuarios = await getUsers();

        return todosUsuarios.map(users =>
            <div className='card char' key={users.id}>
                <h2>{users.nome}</h2>
                <h2>{users.email}</h2>
                <div className='actions'>
                    <button>Alterar</button>
                    <button>Deletar</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        async function Carregar() {
            setConteudo(
                await TransformaEmLista()
            );
        }
        Carregar();
    }, [])

    return (
        <main>
            <Link to={'/create/user'}>
                <button>Criar</button>
            </Link>
            <div className='lista-principal'>
                {conteudo}
            </div>
        </main>
    )
}

export default Users