import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import { getHeroes } from '../services/marvel-api'


export default function SearchPage(props) {
    const [formState, setFormState] = useState({
        search: ''
    })
    const [heroData, setHeroData] = useState([])

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function search(event) {
        event.preventDefault();
        console.log(formState.search)
        const data = await getHeroes(formState.search);

        setHeroData(data.data.results)
        setFormState({
            search: ''
        })
        // console.log(data.data.results)
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
                {heroData && heroData.map((data, idx) => (
                    <Hero data={data} />
                ))}
            </div>
        </main>
    )
}