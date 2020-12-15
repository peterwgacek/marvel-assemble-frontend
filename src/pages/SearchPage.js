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
        const data = await getHeroes(formState.search);

        setHeroData(data.data.results)
        setFormState({
            search: ''
        })

    }

    function formValid() {
        return !!(formState.search);
    }

    return (
        <main className="Page">
            <h2>Simply type in the name of the hero
            you're searching for
            <br />
                  and hit the ASSEMBLE! button</h2>
            <form onSubmit={search}>
                <div className="transbox">
                    <input name="search" type="text" className="form-control" value={formState.search} placeholder="" onChange={handleChange} />
                    <input disabled={!formValid()} type="submit" value="ASSEMBLE!" className="btn-search" />
                </div>
            </form>
            <div className="Heroes">
                {heroData && heroData.map((data, idx) => (
                    <Hero data={data} key={idx} />
                ))}
            </div>
        </main >
    )
}