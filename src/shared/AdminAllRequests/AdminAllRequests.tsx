import { useState } from 'react';
import {  useAppSelector } from '../../hooks/reduxHooks';
import './adminallrequests.css';
import { Text } from '../../components/Text';
import { AdminAllCard } from './AdminAllCard';
// const NO_UNREADED_PERSON = {
//   name: '',
//   city: "",
//   dateOfBirth: 0,
//   dateOfDeath: 0,
//   history: '',
//   mainPhoto: '',
//   medals: [],
//   photos: [],
//   published: 0,
//   rank: '',
//   contacts: {
//     telegram: "",
//     email: "",
//     name: "",
//     surname: "",
//     lastName: ""
//   },
//   id: ''
// }

export function AdminAllRequsts() {
    // const [isPersonsLoading, setIsPersonsLoading] = useState(true);
    const persons = useAppSelector(state => state.persons.persons);
    const [offset, setOffset] = useState(6);

    return <div className='adminAllRequests'>
        
        {[...persons].length !== 0 && <>
            <div className="adminAllRequests__wrapper">
                {[...persons].sort().splice(0, offset).map((e) => {
                    return <AdminAllCard e={e} />
                })}
            </div>
            <button disabled={offset >= [...persons].length} onClick={() => setOffset(offset + 6)} className="adminAllRequests__button">
                <Text color='#fff' size={24}>Показать еще</Text>
            </button>
        </>}
    </div>
}
