const FAKE_DELAY = 2000;
const FAKE_DATA =  [
    {
        id: 0,
        title: 'Cucurrucucu Paloma - Gaby Moreno ',
        url: 'https://www.youtube.com/watch?v=mvI_Urnt3dk',
        embed: 'https://www.youtube.com/embed/mvI_Urnt3dk',
        thumbnail: 'https://i.ytimg.com/vi/mvI_Urnt3dk/hq720.jpg'
    },
    {
        id: 1,
        title: 'Tu me dejaste de querer - C. Tangana',
        url: 'https//www.youtube.com/watch?v=ltmO9XQVdSg',
        embed: 'https//www.youtube.com/embed/ltmO9XQVdSg',
        thumbnail: 'https://i.ytimg.com/vi/ltmO9XQVdSg/hq720.jpg'
    },
    {
        id: 2,
        title: 'Don\'t Start Now - Dua Lipa',
        url: 'https://www.youtube.com/watch?v=oygrmJFKYZY',
        embed: 'https://www.youtube.com/embed/oygrmJFKYZY',
        thumbnail: 'https://i.ytimg.com/vi/oygrmJFKYZY/hq720.jpg'
    },
    {
        id: 3,
        title: 'I Wanna Know - RL Grime feat Daya',
        url: 'https://www.youtube.com/watch?v=LwiOGuKEgkY',
        embed: 'https://www.youtube.com/embed/LwiOGuKEgkY',
        thumbnail: 'https://i.ytimg.com/vi/LwiOGuKEgkY/hq720.jpg'
    },
    {
        id: 4,
        title: 'One Day - Dua Lipa, J. Balvin, Bad Bunny',
        url: 'https://www.youtube.com/watch?v=0nH_4Ev2UKk',
        embed: 'https://www.youtube.com/embed/0nH_4Ev2UKk',
        thumbnail: 'https://i.ytimg.com/vi/0nH_4Ev2UKk/hq720.jpg'
    },
    {
        id: 5,
        title: 'Everything Now - Arcade Fire, Bomba Estéreo',
        url: 'https://www.youtube.com/watch?v=CatAn-PtGqA',
        embed: 'https://www.youtube.com/embed/CatAn-PtGqA',
        thumbnail: 'https://i.ytimg.com/vi/CatAn-PtGqA/hq720.jpg'   
    }
];

export const addVideo = (newVideo) => new Promise((resolve, reject) => {
    setTimeout(() => {
        newVideo.id = FAKE_DATA.length + 1;
        FAKE_DATA.push(newVideo);
        return resolve({ ok: 1 });
    }, FAKE_DELAY);
});

export const getVideos = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(FAKE_DATA);
    }, FAKE_DELAY);
});

export const getVideoDetail = ({idVideo}) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const video = FAKE_DELAY.find((data) => data.id === idVideo);
        if (!video) {
            return reject({message: 'Video not found'});
        }
        return resolve(video)
    }, FAKE_DELAY)
})