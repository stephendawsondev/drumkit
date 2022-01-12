const keyAudioPairs = [];

const singleKeys = [...document.querySelectorAll('.single-key')];
const audios = [...document.querySelectorAll('audio')];

function createAudioPairs(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++) {
            if (i['data-key'] = j['data-key']) {
                keyAudioPairs[i] = {
                    key: i['data-key'],
                    audio: j
                }
            }
        }
    }
}

createAudioPairs(singleKeys, audios);

// document.keydown = function (e) {
//     e = e || window.event;
    
// }