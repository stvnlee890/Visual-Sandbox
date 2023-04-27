import { useNavigate } from "react-router-dom"

export function DummyData () {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Dummy Data</h1>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default DummyData