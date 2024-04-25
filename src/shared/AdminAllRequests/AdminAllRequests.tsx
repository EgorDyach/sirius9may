import { collection, query, limit, where, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { removeNewPersons, addNewPerson } from '../../store/newPersons';
import {  removePersons, addPerson } from '../../store/personsSlice';
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
    const THREE_DAYS = 259_200;

    const [isPersonsLoading, setIsPersonsLoading] = useState(true);
    const dispatch = useAppDispatch();
    const newPersons = useAppSelector(state => state.newPersons.persons);
    const persons = useAppSelector(state => state.persons.persons);
    const [sizeOfNew, setSizeOfNew] = useState(0);
    const [offset, setOffset] = useState(6);

    useEffect(() => {
        const getPersons = async () => {
            const docRef = collection(db, "persons");
            const q = query(docRef, limit(15), where("published", ">=", new Date().getTime() / 1000 - THREE_DAYS));
            const querySnapshot = await getDocs(q);
            setSizeOfNew(querySnapshot.size);
            dispatch(removeNewPersons())
            querySnapshot.forEach((doc) => {
                const qq = doc.data();
                dispatch(addNewPerson({ ...qq, id: doc.id }));
            });

            setIsPersonsLoading(false)
        }

        const getNewPersons = async () => {
            const docRef = collection(db, "persons");
            const qNotNew = query(docRef, limit(6 - sizeOfNew % 6), where("published", "<", new Date().getTime() / 1000 - THREE_DAYS));
            await getDocs(qNotNew).then(querySnapshotNotNew => {
                dispatch(removePersons())
                querySnapshotNotNew.forEach((doc) => {
                    const qq = doc.data();
                    dispatch(addPerson({ ...qq, id: doc.id }));
                })
            });
        }

        getNewPersons();
        getPersons();
    }, [])
    return <div className='adminAllRequests'>
        {isPersonsLoading && <div>
            Загрузка...
        </div>}
        {!isPersonsLoading && [...newPersons, ...persons].length !== 0 && <>
            <div className="adminAllRequests__wrapper">
                {[...newPersons, ...persons].sort().splice(0, offset).map((e) => {
                    return <AdminAllCard e={e} />
                })}
            </div>
            <button disabled={offset >= [...newPersons, ...persons].length} onClick={() => setOffset(offset + 6)} className="adminAllRequests__button">
                <Text color='#fff' size={24}>Показать еще</Text>
            </button>
        </>}
    </div>
}
