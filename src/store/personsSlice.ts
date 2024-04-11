import { createSlice } from '@reduxjs/toolkit'

export enum EMedals {
    medalOfMainHero = "Герой Советского Союза",
    medalOfWorkHero = "Герой Социалистического Труда",
    medalOfMotherHero = "Мать-героиня",
    medalOfMainWin = "Орден «Победа»",
    medalOfOrdenLenin = "Орден Ленина",
    medalOfOctoberOrden = "Орден Октябрьской Революции",
    medalOfRedFlag = "Орден Красного Знамени",
    medalOfBravery = "Медаль «За отвагу»",
    medalOfUshakov = "Медаль Ушакова",
    medalOfMilitaryWins = "Медаль «За боевые заслуги»",
    medalOfNahimov = "Медаль Нахимова",
    medalOfWorkWins = "Медаль «За трудовую доблесть»",
    medalOfNiceWork = "Медаль «За трудовое отличие»",
    medalOfLenin100 = "Медаль «В ознаменование 100-летия со дня рождения Владимира Ильича Ленина»",
    medalOfPartizan1 = "Медаль «Партизану Отечественной войны» 1 степени",
    medalOfPartizan2 = "Медаль «Партизану Отечественной войны» 2 степени",
    medalOfGuard = "Медаль «За отличие в охране государственной границы СССР»",
    medalOfNiceMilitary1 = "Медаль «За отличие в воинской службе» 1 степени",
    medalOfNiceMilitary2 = "Медаль «За отличие в воинской службе» 2 степени",
    medalOfNiceSecurity = "Медаль «За отличную службу по охране общественного порядка»",
    medalOfFireWork = "Медаль «За отвагу на пожаре»",
    medalOfDrownSave = "Медаль «За спасение утопающих»",
    medalOfSaveLeningrad = "Медаль «За оборону Ленинграда»",
    medalOfSaveMoscow = "Медаль «За оборону Москвы»",
    medalOfSaveOdessa = "Медаль «За оборону Одессы»",
    medalOfSaveSevastopol = "Медаль «За оборону Севастополя»",
    medalOfSaveStalingrad = "Медаль «За оборону Сталинграда»",
    medalOfSaveKiev = "Медаль «За оборону Киева»",
    medalOfSaveCaucasus = "Медаль «За оборону Кавказа»",
    medalOfSavePolar = "Медаль «За оборону Советского Заполярья»",
    medalOfWinGermany = "Медаль «За победу над Германией в Великой Отечественной войне 1941—1945 гг.»",
    medalOfWin20 = "Юбилейная медаль «Двадцать лет Победы в Великой Отечественной войне 1941—1945 гг.»",
    medalOfWin30 = "Юбилейная медаль «Тридцать лет Победы в Великой Отечественной войне 1941—1945 гг.»",
    medalOfWin40 = "Юбилейная медаль «Сорок лет Победы в Великой Отечественной войне 1941—1945 гг.»",
    medalOfWinJapan = "Медаль «За победу над Японией»",
    medalOfTakingBudapest = "Медаль «За взятие Будапешта»",
    medalOfTakingKoenigsberg = "Медаль «За взятие Кёнигсберга»",
    medalOfTakingVeinna = "Медаль «За взятие Вены»",
    medalOfTakingBerlin = "Медаль «За взятие Берлина»",
    medalOfLiberationBelgrad = "Медаль «За освобождение Белграда»",
    medalOfLiberationWarsaw = "Медаль «За освобождение Варшавы»",
    medalOfLiberationPrague = "Медаль «За освобождение Праги»",
    medalOfVeryNiceWorkWhileWar = "Медаль «За доблестный труд в Великой Отечественной войне 1941—1945 гг.»",
    medalOfVeteranOfWork = "Медаль «Ветеран труда»",
    medalOfVeteranOfArmedForces = "Медаль «Ветеран Вооружённых Сил СССР»",
    medalOfStrengthening = "Медаль «За укрепление боевого содружества»",
    medalOfRecoveryFactories = "Медаль «За восстановление предприятий чёрной металлургии Юга»",
    medalOfRecoveryCoal = "Медаль «За восстановление угольных шахт Донбасса»",
    medalOfDevelopmentLands = "Медаль «За освоение целинных земель»",
    medalOfBuildingHighway = "Медаль «За строительство Байкало-Амурской магистрали»",
    medalOfTransformationLand = "Медаль «За преобразование Нечерноземья РСФСР»",
    medalOfDevelopmentOil = "Медаль «За освоение недр и развитие нефтегазового комплекса Западной Сибири»",
    medalOfMilitary20years = "Юбилейная медаль «XX лет Рабоче-Крестьянской Красной Армии»",
    medalOfMilitary30years = "Юбилейная медаль «30 лет Советской Армии и Флота»",
    medalOfMilitary40years = "Юбилейная медаль «40 лет Вооружённых Сил СССР»",
    medalOfMilitary50years = "Юбилейная медаль «50 лет Вооружённых Сил СССР»",
    medalOfMilitary60years = "Юбилейная медаль «60 лет Вооружённых Сил СССР»",
    medalOfMilitary70years = "Юбилейная медаль «70 лет Вооружённых Сил СССР»",
    medalOfPolice50years = "Юбилейная медаль «50 лет советской милиции»",
    medalOfMoscow800years = "Медаль «В память 800-летия Москвы»",
    medalOfLeningrad250years = "Медаль «В память 250-летия Ленинграда»",
    medalOfKiev1500years = "Медаль «В память 1500-летия Киева»",
    medalOfBestMilitary1 = "Медаль «За безупречную службу» 1 степени",
    medalOfBestMilitary2 = "Медаль «За безупречную службу» 2 степени",
    medalOfBestMilitary3 = "Медаль «За безупречную службу» 3 степени",
    other = 'Другое'
}


// Определяем тип части состояния(среза/slice)
export type PersonType = {
    name: string;
    city: string;
    dateOfBirth: number | "unknown" | "alive";
    dateOfDeath: number | "unknown" | "alive";
    history: string;
    mainPhoto: string;
    medals: EMedals[];
    photos: string[];
    published: string;
    rank: string;
}

export interface TPersons {
    persons: PersonType[];
    isPersonLoading: boolean;
}

// Определение начального состояния, используя тип
const initialState: TPersons = {
    persons: [],
    isPersonLoading: false,
}

export const personsSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.persons.push(action.payload)
        },
        removePersons: (state) => {
            state.persons = []
        },
        setIsPersonsLoading: (state, action) => {
            state.isPersonLoading = action.payload
        },
    },
})

// Сгенерированные Создатели Действий/ action creators
export const { addPerson, removePersons, setIsPersonsLoading } = personsSlice.actions

export default personsSlice.reducer