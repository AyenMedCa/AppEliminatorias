import appService from '../../services/appService.js'
import { useState } from 'react';
import CardMatch from './CardMatch.jsx';
import FormMatch from './FormMatch.jsx';
import { Button } from '../buttons/Button.jsx';


const match1 = {
    date: '2023-10-11',
    stadium: 'maracana',
    refree: 'pitana',
    localTeam: 'brasil',
    visitingTeam: 'chile',
    localGoals: 3,
    visitingGoals: 0,
    yellowCards: 2,
    redCards: 0
}
const match2 = {
    date: '2023-10-11',
    stadium: 'bombonera',
    refree: 'wilman roldan',
    localTeam: 'Argentina',
    visitingTeam: 'Peru',
    localGoals: 2,
    visitingGoals: 0,
    yellowCards: 2,
    redCards: 0
}
const listMatches = [match1, match2]


export const Matches = () => {
    const [matches, setMatches] = useState(listMatches)
    //prueba solamente
    const [open, setOpen] = useState(false)

    const user = true
    try {
        const matches = async () => {
            // const matches = await appService.getMatches();
            // console.log(matches);
        }  
        matches();
    } catch (error) {
        
    }
    const handleMo = isModal => {
        setOpen(isModal)
    }

    const hanleMatch = (ma) => {
        console.log(ma);
        setMatches([
            ...matches,
            ma
        ])
    }

    return (
        <>
            <div className='matches'>
                <ul>
                    {matches.map((match, index) => {
                        return (
                            <li key={index}>
                                <CardMatch match={match}/>
                            </li>
                        )
                        
                    })}
                </ul>
            </div>
            {user ? <Button text="Crear partido" route='/agregarPartido' onClick={handleMo}/> : <></>}
            {open && <FormMatch onMatch={hanleMatch}/>}
        </>
    )
}
export default Matches;