import userPhoto from './../assets/userPhoto.png';

export const ceosData = [
    {
        ceoId: 0,
        name: "Eshwar",
        img: userPhoto
    },
    {
        ceoId: 1,
        name: "Kishore Poreddy",
        img: userPhoto
    }
];

export const dmsData = [
    {
        dmId: 0,
        ceoId: 0,
        candidateId: 2
    },
    {
        dmId: 1,
        ceoId: 0,
        candidateId: 3
    },
    {
        dmId: 2,
        ceoId: 0,
        candidateId: 4
    },
    {
        dmId: 3,
        ceoId: 1,
        candidateId: 7
    },
    {
        dmId: 4,
        ceoId: 1,
        candidateId: 8
    },
    // {
    //     dmId: 2,
    //     ceoId: 1,
    //     candidateId: 9
    // }
];

export const pmsData = [
    {
        pmId: 0,
        dmId: 0,
        candidateId: 5
    },
    {
        pmId: 1,
        dmId: 0,
        candidateId: 6
    },
    {
        pmId: 2,
        dmId: 0,
        candidateId: 7
    },
    {
        pmId: 3,
        dmId: 1,
        candidateId: 8
    },
    {
        pmId: 4,
        dmId: 1,
        candidateId: 9
    },
    // {
    //     pmId: 5,
    //     dmId: 1,
    //     candidateId: 10
    // }
];

export const clientsData = [
    {
        clientId: 0,
        dmId: 0,
        pmId: 0,
        name: "SkyHive"
    },
    {
        clientId: 1,
        dmId: 0,
        pmId: 0,
        name: "JNJ"
    },
    {
        clientId: 2,
        dmId: 0,
        pmId: 0,
        name: "Bluevector"
    },
    {
        clientId: 3,
        dmId: 1,
        pmId: 0,
        name: "Google"
    },
    {
        clientId: 4,
        dmId: 1,
        pmId: 0,
        name: "Meta"
    },
    // {
    //     clientId: 5,
    //     dmId: 1,
    //     pmId: 0,
    //     name: "Twitter"
    // },
];

export const projectsData = [
    {
        projectId: 0,
        clientId: 0,
        name: "DayZero"
    },
    {
        projectId: 1,
        clientId: 0,
        name: "Refugee"
    },
    {
        projectId: 2,
        clientId: 0,
        name: "Answers"
    },
];

export const skills = [
    {
        skillId: 0,
        title: 'React JS'
    },
    {
        skillId: 1,
        title: 'Angular'
    },
    {
        skillId: 2,
        title: 'Vue JS'
    },
    {
        skillId: 3,
        title: 'Node JS'
    },
    {
        skillId: 4,
        title: 'QA'
    }
];

export const candidatesData = [
    {
        candidateId: 0,
        name: "Eshwar",
        surname: "Lingam",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 1,
        name: "Kishore",
        surname: "Poreddy",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 2,
        name: "Mohammed Irshad",
        surname: "Ahmed",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 3,
        name: "Pavan",
        surname: "Arra",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 4,
        name: "Ravi",
        surname: "Rampalli",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 5,
        name: "Jithin Seelam",
        surname: "Jawahar",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 6,
        name: "Shanthan",
        surname: "Nedunoori",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 7,
        name: "Swetha",
        surname: "Vejella",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 8,
        name: "Mamtha",
        surname: "Annigeri",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 9,
        name: "Nishitha",
        surname: "Algubelli",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 10,
        name: "Simran",
        surname: "Mrunalini",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 11,
        name: "Manoj Kumar",
        surname: "Jadala",
        skills: [0, 1, 3],
        img: userPhoto
    },
    {
        candidateId: 12,
        name: "Manideep",
        surname: "Kotagiri",
        skills: [0, 1, 3],
        img: userPhoto
    }
];