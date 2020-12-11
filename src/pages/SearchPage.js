import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import { getHeroes } from '../services/marvel-api'

export default function SearchPage(props) {
    const [formState, setFormState] = useState({
        search: ''
    })
    const [HeroData, setHeroData] = useState({
        items: []
    })

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    async function search(event) {
        event.preventDefault();
        const data = await getHeroes(formState.search);
        setHeroData(data)
        setFormState({
            search: ''
        })

    }
    return (
        <main className="Page">
            <form onSubmit={search}>
                <div className="transbox">
                    <input name="search" type="text" className="form-control" value={formState.search} placeholder="" onChange={handleChange} />
                    <input type="submit" value="ASSEMBLE!" />
                </div>
            </form>
            <div className="Heroes">
                {HeroData.results && HeroData.results.map((result, idx) => (
                    <Hero key={idx} result={result} />
                ))}
            </div>
        </main>
    )
}