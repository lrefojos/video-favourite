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
        url: 'https://www.youtube.com/watch?v=ltmO9XQVdSg',
        embed: 'https://www.youtube.com/embed/ltmO9XQVdSg',
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
        title: 'Bad Things - Allison Wonderland',
        url: 'https://www.youtube.com/watch?v=FBBvgSgA1jg',
        embed: 'https://www.youtube.com/embed/FBBvgSgA1jg',
        thumbnail: 'https://i.ytimg.com/vi/FBBvgSgA1jg/hq720.jpg'   
    },
    {
        id: 6,
        title: 'Solo De Mi - Bad Bunny',
        url: 'https://www.youtube.com/watch?v=7rbprAR_Reg',
        embed: 'https://www.youtube.com/embed/7rbprAR_Reg',
        thumbnail: 'https://i.ytimg.com/vi/7rbprAR_Reg/hq720.jpg'
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
        return resolve(FAKE_DATA);
    }, FAKE_DELAY);
});

export const getDescription = async() => {
    try {
        const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
        return resp.json()
    } catch (error) {
        throw error;
    }
}

export const getVideoDetail = ({idVideo}) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const video = FAKE_DATA.find((data) => parseInt(data.id) === parseInt(idVideo));
        if (!video) {
            return reject({message: 'Video not found'});
        }
        if (video.description) {
            return resolve(video)
        }

        getDescription().then(description => {
            video.description = description.join();
            return resolve(video)
        }).catch(console.error);
    }, FAKE_DELAY)
});