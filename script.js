// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

// App State
let songs = [
    {
        id: 1,
    title: "Kalapastangan",
    artist: "Fitterkarma",
    album: "Kalapastangan",
    albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27301cb2e736602194466522135",
    audioSrc: "audio/fitterkarma - Kalapastangan (Lyrics).mp3",
    videoBgSrc: "videos/kalapastangan.mp4",
    lyrics: [
    { time: 5,   text: "Oras nang sambahin ang ngalan Mo" },
    { time: 17,  text: "Para mabuhay habang-buhay sa puso't isipan Mo" },
    { time: 28,  text: "Sino ba ako para mapansin Mo?" },
    { time: 40,  text: "Mga dalangin ko sa 'Yo, sana'y pakinggan Mo" },
    { time: 64,  text: "Pa'no ba ako magiging 'sang santo" },
    { time: 76,  text: "Para makasama Kita diyan sa tabi ng trono Mo?" },
    { time: 88,  text: "Ilan pang pagsubok ang daraanan ko" },
    { time: 99,  text: "Bago ako makaranas ng mga milagro Mo?" },
    { time: 129, text: "Oh, ang langit ay nandito lamang pala sa lupa" },
    { time: 137, text: "At ang impiyerno ay nasa isipan ko, at pinalimot ng 'Yong ganda" },
    { time: 127, text: "Umaawit ang mga anghel, umaawit ang mga anghel" },
    { time: 156, text: "Nagdiriwang sila nang makasama Kita, huwag Ka sanang mawawala" },
    { time: 164, text: "Ooh..." },
    { time: 171, text: "Ooh, ooh, ooh, ooh" },
    { time: 182, text: "Mamamatay akong nakangiti" },
    { time: 187, text: "Kapag Ikaw ang nasa aking tabi" },
    { time: 191, text: "Mabubuhay akong nagsisisi" },
    { time: 195, text: "Kapag isang araw hindi Kita mapapangiti" },
    { time: 200, text: "Kalapastangan ang 'di Ka ibigin" },
    { time: 205, text: "Kalokohan ang 'di Ka isipin" },
    { time: 209, text: "Kung ang mundo ay biglang gugunawin" },
    { time: 214, text: "Ikaw ang una kong hahanapin" }
]
  },
    {
      id: 2,
    title: "Pagsuko",
    artist: "Jireh Lim",
    album: "Pagsuko",
    albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJMQslmEr4JUu718HRUfMtKOzyzEQssj4zfvlHs-Lvw&s=10",
    audioSrc: "audio/Pagsuko - Jireh Lim Official Music Video.mp3",
    videoBgSrc: "videos/pagsuko.mp4.mp4",
    lyrics: [
    { time: 14.50, text: "Maari ba muna natin tong pag-usapan" },
    { time: 21.00, text: "Sa dami-rami na ng ating pinagdaanan" },
    { time: 27.80, text: "Ngayon mo pa ba maiisipang isuko" },
    { time: 33.80, text: "Ang lahat ng ating pinagsamahan" },
    { time: 40.20, text: "Masikip sa damdamin, hinigop ng hangin" },
    { time: 46.70, text: "Ang lakas, pinanghihinaan nang wagas" },
    { time: 53.10, text: "Pwede bang pag-isipan, huwag ka munang lumiban" },
    { time: 59.80, text: "Baka sakali na ito ay maisalba pa" },
    { time: 66.10, text: "Lumalamig ang gabi" },
    { time: 72.70, text: "Hindi na tulad ng dati" },
    { time: 81.20, text: "May pag-asa pa ba kung susuko ka na?" },
    { time: 88.20, text: "Larawan mo ba'y lulukutin ko na?" },
    { time: 94.20, text: "Sa hirap at ginhawa, tayo ay nagsama" },
    { time: 100.90, text: "Damdamin mo tila'y napagod na" },
    { time: 107.50, text: "Ikaw at ako ay alaala na lang" },
    { time: 113.00, text: "Kung susuko ka na" },
    { time: 121.30, text: "Bawat pangarap na ating pinag-usapan" },
    { time: 128.30, text: "Pupunta na lang ba ito sa wala?" },
    { time: 133.30, text: "Hayaan mong ituwid ang pagkakamali" },
    { time: 139.60, text: "Sa mga oras na 'to, alam kong ikaw ay lito" },
    { time: 145.90, text: "Lumalamig ang gabi" },
    { time: 152.40, text: "Hindi na tulad ng dati" },
    { time: 160.90, text: "May pag-asa pa ba kung susuko ka na?" },
    { time: 167.90, text: "Larawan mo ba'y lulukutin ko na?" },
    { time: 173.90, text: "Sa hirap at ginhawa, tayo ay nagsama" },
    { time: 180.60, text: "Damdamin mo tila'y napagod na" },
    { time: 187.20, text: "Ikaw at ako ay alaala na lang" },
    { time: 192.70, text: "Kung susuko ka na" },
    { time: 242.20, text: "May pag-asa pa ba kung susuko ka na?" },
    { time: 249.20, text: "Larawan mo ba'y lulukutin ko na?" },
    { time: 255.20, text: "Sa hirap at ginhawa, tayo ay nagsama" },
    { time: 261.90, text: "Damdamin mo tila'y napagod na" },
    { time: 268.60, text: "Ikaw at ako ay alaala na lang" },
    { time: 274.10, text: "Kung susuko ka na..." }
]
  },
    {
        id: 3,
        title: "Perfect",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Perfect - One Direction.mp3",
        videoBgSrc: "videos/Perfect - One Direction.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 5.7, text: "I might never be your knight in shining armor" },
            { time: 10.2, text: "I might never be the one you take home to mother" },
            { time: 15.2, text: "And I might never be the one who brings you flowers" },
            { time: 20, text: "But I can be the one, be the one tonight" },
            { time: 25.4, text: "When I first saw you" },
            { time: 122, text: "From across the room" },
            { time: 129, text: "I could tell that you were curious (oh, yeah)" },
            { time: 135, text: "Girl, I hope you’re sure" },
            { time: 142, text: "What you're looking for" },
            { time: 149, text: "Cause I'm not good at making promises" },
            { time: 156, text: "But if you like causing trouble up in hotel rooms" },
            { time: 163, text: "And if you like having secret little rendezvous" },
            { time: 170, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 177, text: "Then baby, I'm perfect" },
            { time: 184, text: "Baby, I'm perfect for you" },
            { time: 191, text: "And if you like midnight driving with the windows down" },
            { time: 198, text: "And if you like going places we can’t even pronounce" },
            { time: 205, text: "If you like to do whatever you've been dreaming about" },
            { time: 212, text: "Baby, you're perfect" },
            { time: 219, text: "Baby, you're perfect" },
            { time: 226, text: "So let's start right now" },
            { time: 233, text: "I might never be the hands you put your heart in" },
            { time: 240, text: "Or the arms that hold you any time you want them" },
            { time: 247, text: "But that don’t mean that we can’t live here in the moment" },
            { time: 254, text: "Cause I can be the one you love from time to time" },
            { time: 261, text: "When I first saw you" },
            { time: 268, text: "From across the room" },
            { time: 275, text: "I could tell that you were curious (oh, yeah)" },
            { time: 282, text: "Girl, I hope you’re sure" },
            { time: 289, text: "What you're looking for" },
            { time: 296, text: "Cause I'm not good at making promises" },
            { time: 303, text: "But if you like causing trouble up in hotel rooms" },
            { time: 310, text: "And if you like having secret little rendezvous" },
            { time: 317, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 324, text: "Baby, I'm perfect" },
            { time: 331, text: "Baby, I'm perfect for you" },
            { time: 338, text: "And if you like midnight driving with the windows down" },
            { time: 345, text: "And if you like going places we can’t even pronounce" },
            { time: 352, text: "If you like to do whatever you've been dreaming about" },
            { time: 359, text: "Baby, you're perfect" },
            { time: 366, text: "Baby, you're perfect" },
            { time: 373, text: "So let's start right now" },
            { time: 380, text: "And if you like cameras flashing every time we go out" },
            { time: 387, text: "(Oh, yeah)" },
            { time: 394, text: "And if you're looking for someone to write your breakup songs about" },
            { time: 401, text: "Baby, I'm perfect" },
            { time: 408, text: "Baby, we're perfect" },
            { time: 415, text: "If you like causing trouble up in hotel rooms" },
            { time: 422, text: "And if you like having secret little rendezvous" },
            { time: 429, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 436, text: "Baby, I'm perfect" },
            { time: 443, text: "Baby, I'm perfect for you" },
            { time: 450, text: "And if you like midnight driving with the windows down" },
            { time: 457, text: "And if you like going places we can’t even pronounce" },
            { time: 464, text: "If you like to do whatever you've been dreaming about" },
            { time: 471, text: "Baby, you're perfect" },
            { time: 478, text: "Baby, you're perfect" },
            { time: 88, text: "I might never be your knight in shining armor" },
            { time: 95, text: "I might never be the one you take home to mother" },
            { time: 102, text: "And I might never be the one who brings you flowers" },
            { time: 109, text: "But I can be the one, be the one tonight" },
            { time: 116, text: "When I first saw you" },
            { time: 122, text: "From across the room" },
            { time: 129, text: "I could tell that you were curious (oh, yeah)" },
            { time: 135, text: "Girl, I hope you’re sure" },
            { time: 142, text: "What you're looking for" },
            { time: 149, text: "Cause I'm not good at making promises" },
            { time: 156, text: "But if you like causing trouble up in hotel rooms" },
            { time: 163, text: "And if you like having secret little rendezvous" },
            { time: 170, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 177, text: "Then baby, I'm perfect" },
            { time: 184, text: "Baby, I'm perfect for you" },
            { time: 191, text: "And if you like midnight driving with the windows down" },
            { time: 198, text: "And if you like going places we can’t even pronounce" },
            { time: 205, text: "If you like to do whatever you've been dreaming about" },
            { time: 212, text: "Baby, you're perfect" },
            { time: 219, text: "Baby, you're perfect" },
            { time: 226, text: "So let's start right now" },
            { time: 233, text: "I might never be the hands you put your heart in" },
            { time: 240, text: "Or the arms that hold you any time you want them" },
            { time: 247, text: "But that don’t mean that we can’t live here in the moment" },
            { time: 254, text: "Cause I can be the one you love from time to time" },
            { time: 261, text: "When I first saw you" },
            { time: 268, text: "From across the room" },
            { time: 275, text: "I could tell that you were curious (oh, yeah)" },
            { time: 282, text: "Girl, I hope you’re sure" },
            { time: 289, text: "What you're looking for" },
            { time: 296, text: "Cause I'm not good at making promises" },
            { time: 303, text: "But if you like causing trouble up in hotel rooms" },
            { time: 310, text: "And if you like having secret little rendezvous" },
            { time: 317, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 324, text: "Baby, I'm perfect" },
            { time: 331, text: "Baby, I'm perfect for you" },
            { time: 338, text: "And if you like midnight driving with the windows down" },
            { time: 345, text: "And if you like going places we can’t even pronounce" },
            { time: 352, text: "If you like to do whatever you've been dreaming about" },
            { time: 359, text: "Baby, you're perfect" },
            { time: 366, text: "Baby, you're perfect" },
            { time: 373, text: "So let's start right now" },
            { time: 380, text: "And if you like cameras flashing every time we go out" },
            { time: 387, text: "(Oh, yeah)" },
            { time: 394, text: "And if you're looking for someone to write your breakup songs about" },
            { time: 401, text: "Baby, I'm perfect" },
            { time: 408, text: "Baby, we're perfect" },
            { time: 415, text: "If you like causing trouble up in hotel rooms" },
            { time: 422, text: "And if you like having secret little rendezvous" },
            { time: 429, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 436, text: "Baby, I'm perfect" },
            { time: 443, text: "Baby, I'm perfect for you" },
            { time: 450, text: "And if you like midnight driving with the windows down" },
            { time: 457, text: "And if you like going places we can’t even pronounce" },
            { time: 464, text: "If you like to do whatever you've been dreaming about" },
            { time: 471, text: "Baby, you're perfect" },
            { time: 478, text: "Baby, you're perfect" },
            { time: 485, text: "So let's start right now" }
        ]
    },    
    {
        id: 4,
        title: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
        audioSrc: "audio/Heat Waves - Glass Animals.mp3",
        videoBgSrc: "videos/Heat Waves - Glass Animals.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
    { time: 4,   text: "Last night, all I think about is you" },
    { time: 6,   text: "Don't stop, baby, you can walk through" },
    { time: 9,   text: "Don't wanna, but I think about you" },
    { time: 12,  text: "You know that I'm never gonna lose" },
    { time: 18,  text: "Road shimmer wigglin' the vision" },
    { time: 21,  text: "Heat, heat waves, I'm swimmin' in a mirror" },
    { time: 24,  text: "Road shimmer wigglin' the vision" },
    { time: 29,  text: "Heat, heat waves, I'm swimmin' in a—" },
    { time: 33,  text: "Sometimes, all I think about is you" },
    { time: 36,  text: "Late nights in the middle of June" },
    { time: 39,  text: "Heat waves been fakin' me out" },
    { time: 42,  text: "Can't make you happier now" },
    { time: 46,  text: "Sometimes, all I think about is you" },
    { time: 49,  text: "Late nights in the middle of June" },
    { time: 52,  text: "Heat waves been fakin' me out" },
    { time: 55,  text: "Can't make you happier now" },
    { time: 58,  text: "Usually I put somethin' on TV" },
    { time: 61,  text: "So we never think about you and me" },
    { time: 64,  text: "But today I see our reflections clearly" },
    { time: 67,  text: "In Hollywood, layin' on the screen" },
    { time: 70, text: "You just need a better life than this" },
    { time: 73, text: "You need somethin' I can never give" },
    { time: 74, text: "Fake water all across the road" },
    { time: 75, text: "It's gone now, the night has come, but" },
    { time: 78,  text: "Sometimes, all I think about is you" },
    { time: 81,  text: "Late nights in the middle of June" },
    { time: 84,  text: "Heat waves been fakin' me out" },
    { time: 87,  text: "Can't make you happier now" },
    { time: 90,  text: "You can't fight it, you can't breathe" },
    { time: 93,  text: "You say somethin' so lovin', but" },
    { time: 96,  text: "Now I gotta let you go" },
    { time: 99,  text: "You'll be better off with someone new" },
    { time: 102, text: "I don't wanna be alone" },
    { time: 105, text: "You know it hurts me too" },
    { time: 108, text: "You look so broken when you cry" },
    { time: 111, text: "One more and then I say goodbye" },
    { time: 114, text: "Sometimes, all I think about is you" },
    { time: 117, text: "Late nights in the middle of June" },
    { time: 120, text: "Heat waves been fakin' me out" },
    { time: 123, text: "Can't make you happier now" },
    { time: 127, text: "I just wonder what you're dreamin' of" },
    { time: 130, text: "When you sleep and smile so comfortable" },
    { time: 133, text: "I just wish that I could give you that" },
    { time: 136, text: "That look that's perfectly un-sad" },
    { time: 140, text: "Sometimes, all I think about is you" },
    { time: 143, text: "Late nights in the middle of June" },
    { time: 146, text: "Heat waves been fakin' me out" },
    { time: 149, text: "Heat waves been fakin' me out" },
    { time: 153, text: "Sometimes, all I think about is you" },
    { time: 156, text: "Late nights in the middle of June" },
    { time: 159, text: "Heat waves been fakin' me out" },
    { time: 162, text: "Can't make you happier now" },
]
    },
    {
        id: 5,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273828789ff08a16218b2ea9445",
        audioSrc: "audio/Rewrite The Stars - James Arthur & Anne-Marie.mp3",
        videoBgSrc: "videos/Rewrite The Stars - James Arthur & Anne-Marie.mp4",
        lyrics: [
    { time: 1.5, text: "You know I want you" },
    { time: 5.2, text: "It's not a secret I try to hide" },
    { time: 9.0, text: "You know you want me" },
    { time: 13.0, text: "So don't keep sayin' our hands are tied" },
    { time: 18.0, text: "You claim it's not in the cards" },
    { time: 23.0, text: "And fate is pullin' you miles away and out of reach from me" },
    { time: 29.0, text: "But you're here in my heart" },
    { time: 34.0, text: "So who can stop me if I decide that you're my destiny?" },
    { time: 40.0, text: "What if we rewrite the stars?" },
    { time: 45.0, text: "Say you were made to be mine" },
    { time: 50.0, text: "Nothin' could keep us apart" },
    { time: 55.0, text: "You'd be the one I was meant to find" },
    { time: 60.0, text: "It's up to you and it's up to me" },
    { time: 65.0, text: "No one can say what we get to be" },
    { time: 70.0, text: "So why don't we rewrite the stars?" },
    { time: 75.0, text: "Maybe the world could be ours tonight" },
    { time: 81.0, text: "Ah-oh (No, no, no, no)" },
    { time: 85.0, text: "Ah-oh (Mm)" },
    { time: 90.0, text: "You think it's easy" },
    { time: 95.0, text: "You think I don't wanna run to you, yeah" },
    { time: 101.0, text: "But there are mountains (There are mountains)" },
    { time: 107.0, text: "And there are doors that we can't walk through" },
    { time: 113.0, text: "I know you're wonderin' why" },
    { time: 119.0, text: "Because we're able to be just you and me within these walls" },
    { time: 126.0, text: "But when we go outside" },
    { time: 132.0, text: "You're gonna wake up and see that it was hopeless after all" },
    { time: 139.0, text: "No one can rewrite the stars" },
    { time: 145.0, text: "How can you say you'll be mine?" },
    { time: 151.0, text: "Everything keeps us apart" },
    { time: 157.0, text: "And I'm not the one you were meant to find" },
    { time: 163.0, text: "It's not up to you, it's not up to me" },
    { time: 169.0, text: "When everyone tells us what we can be" },
    { time: 175.0, text: "And how can we rewrite the stars?" },
    { time: 181.0, text: "Say that the world can be ours tonight" },
    { time: 187.0, text: "All I want is to fly with you" },
    { time: 193.0, text: "All I want is to fall with you" },
    { time: 199.0, text: "So just give me all of you" },
    { time: 205.0, text: "It feels impossible" },
    { time: 211.0, text: "It's not impossible" },
    { time: 217.0, text: "Is it impossible?" },
    { time: 223.0, text: "Say that it's possible" },
    { time: 229.0, text: "How do we rewrite the stars?" },
    { time: 235.0, text: "Say you were made to be mine" },
    { time: 241.0, text: "And nothin' could keep us apart" },
    { time: 247.0, text: "'Cause you are the one I was meant to find" },
    { time: 253.0, text: "It's up to you and it's up to me" },
    { time: 259.0, text: "No one could say what we get to be" },
    { time: 265.0, text: "And why don't we rewrite the stars?" },
    { time: 271.0, text: "Changin' the world to be ours" },
    { time: 277.0, text: "Ah-oh (No, no, no, no)" },
    { time: 283.0, text: "Ah-oh (Mm)" },
    { time: 289.0, text: "You know I want you" },
    { time: 295.0, text: "It's not a secret I try to hide" },
    { time: 301.0, text: "But I can't have you" },
    { time: 307.0, text: "We're bound to break and my hands are tied" }
]
    },
    {
        id: 6,
        title: "Beauty And A Beat",
        artist: "Justin Bieber, Nicki Minaj",
        album: "Believe",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273f1d02a6cec967f8b6b78f76e",
        audioSrc: "audio/Beauty And A Beat - Justin Bieber, Nicki Minaj.mp3",
        videoBgSrc: "videos/Beauty And A Beat - Justin Bieber, Nicki Minaj.mp4",
        lyrics: [
    { time: 7,   text: "Young Money, Nicki Minaj, Justin" },
    { time: 15,  text: "Show you off, tonight I wanna show you off" },
    { time: 23,  text: "What you got, a billion could've never bought" },
    { time: 30,  text: "We gonna party like it's 3012 tonight" },
    { time: 34,  text: "I wanna show you all the finer things in life" },
    { time: 38,  text: "So just forget about the world, we're young tonight" },
    { time: 41,  text: "I'm coming for ya, I'm coming for ya" },
    { time: 45,  text: "'Cause all I need is a beauty and a beat" },
    { time: 54,  text: "Who can make my life complete" },
    { time: 60,  text: "It's all 'bout you, when the music makes you move" },
    { time: 69,  text: "Baby do it like you do" },
    { time: 85,  text: "Body rock, girl, I can feel your body rock" },
    { time: 91,  text: "Take a bow, you're on the hottest ticket now" },
    { time: 120, text: "We gonna party like it's 3012 tonight" },
    { time: 124, text: "I wanna show you all the finer things in life" },
    { time: 128, text: "So just forget about the world, we're young tonight" },
    { time: 132, text: "I'm coming for ya, I'm coming for ya" },
    { time: 135, text: "'Cause all I need is a beauty and a beat" },
    { time: 144, text: "Who can make my life complete" },
    { time: 150, text: "It's all 'bout you, when the music makes you move" },
    { time: 159, text: "Baby do it like you do" },
    { time: 175, text: "In time, ink lines, bitches couldn't get on my incline" },
    { time: 182, text: "World tours, it's mine, ten little letters on a big sign" },
    { time: 188, text: "Justin Bieber, you know I'ma hit 'em with the ether" },
    { time: 194, text: "Buns out, wiener, but I gotta keep an eye out for Selener" },
    { time: 200, text: "Beauty, beauty and the beast" },
    { time: 203, text: "Beauty from the east, beautiful confessions to the priest" },
    { time: 209, text: "Beast, beauty from the streets, beat'll get deceased" },
    { time: 215, text: "Every time beauty on the beats" },
    { time: 225, text: "'Cause all I need is a beauty and a beat" },
    { time: 234, text: "Who can make my life complete" },
    { time: 240, text: "It's all 'bout you, when the music makes you move" },
    { time: 249, text: "Baby do it like you do" },
]
    },
    {
        id: 7,
        title: "The Day You Said Goodnight",
        artist: "Hale", 
        album: "Hale",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27389d3628e226a3c7e0d0afbc3", 
        audioSrc: "audio/The Day You Said Goodnight - Hale.mp3",
        videoBgSrc: "videos/The Day You Said Goodnight - Hale.mp4",
        lyrics: [
    { time: 2,   text: "Take me as you are" },
    { time: 9,   text: "Push me off the road" },
    { time: 12,  text: "The sadness, I need this time to be with you" },
    { time: 19,  text: "I'm freezing in the sun" },
    { time: 23,  text: "I'm burning in the rain" },
    { time: 27,  text: "The silence, I'm screaming calling out your name" },
    { time: 33,  text: "And I do reside in your light" },
    { time: 40,  text: "Put out the fire with me and find" },
    { time: 46,  text: "Yeah, you'll lose the side of your circles" },
    { time: 52,  text: "That's what I'll do if we say goodbye" },
    { time: 64,  text: "To be is all I gotta be" },
    { time: 70,  text: "And all that I see" },
    { time: 73,  text: "And all that I need this time" },
    { time: 78,  text: "To me the life you gave me" },
    { time: 84,  text: "The day you said goodnight" },
    { time: 99,  text: "The calmness in your face" },
    { time: 103, text: "That I see through the night" },
    { time: 107, text: "The warmth of your light is pressing unto us" },
    { time: 113, text: "You didn't ask me why" },
    { time: 117, text: "I never would have known" },
    { time: 121, text: "Oblivion is falling down" },
    { time: 127, text: "And I do reside in your light" },
    { time: 134, text: "Put out the fire with me and find" },
    { time: 140, text: "Yeah, you'll lose the side of your circles" },
    { time: 146, text: "That's what I'll do if we say goodbye" },
    { time: 155, text: "To be is all I gotta be" },
    { time: 161, text: "And all that I see" },
    { time: 164, text: "And all that I need this time" },
    { time: 169, text: "To me the life you gave me" },
    { time: 175, text: "The day you said goodnight" },
    { time: 187, text: "If you could only know me like your prayers at night" },
    { time: 201, text: "Then everything between you and me will be alright" },
    { time: 213, text: "To be is all I gotta be" },
    { time: 219, text: "And all that I see" },
    { time: 222, text: "And all that I need this time" },
    { time: 227, text: "To me the life you gave me" },
    { time: 233, text: "The day you said goodnight" },
    { time: 250, text: "She's already taken" },
    { time: 256, text: "She's already taken me" },
    { time: 263, text: "The day you said goodnight" },
]
    },
    {
        id: 8,
        title: "See You Again",
        artist: "Wiz Khalifa, Charlie Puth",
        album: "Furious 7 (Soundtrack)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2734e5df11b17b2727da2b718d8",
        audioSrc: "audio/See You Again - Wiz Khalifa, Charlie Puth.mp3",
        videoBgSrc: "videos/See You Again - Wiz Khalifa, Charlie Puth.mp4",
        lyrics: [
    { time: 10,  text: "It's been a long day without you, my friend" },
    { time: 17,  text: "And I'll tell you all about it when I see you again" },
    { time: 23,  text: "We've come a long way from where we began" },
    { time: 29,  text: "Oh, I'll tell you all about it when I see you again" },
    { time: 35,  text: "When I see you again" },
    { time: 40,  text: "Damn, who knew all the planes we flew" },
    { time: 43,  text: "Good things we've been through" },
    { time: 45,  text: "That I'd be standing right here" },
    { time: 47,  text: "Talking to you 'bout another path" },
    { time: 49,  text: "I know we loved to hit the road and laugh" },
    { time: 52,  text: "But something told me that it wouldn't last" },
    { time: 54,  text: "Had to switch up, look at things different, see the bigger picture" },
    { time: 58,  text: "Those were the days, hard work forever pays" },
    { time: 61,  text: "Now I see you in a better place" },
    { time: 67,  text: "How could we not talk about family when family's all that we got?" },
    { time: 73,  text: "Everything I went through, you were standing there by my side" },
    { time: 79,  text: "And now you gon' be with me for the last ride" },
    { time: 86,  text: "It's been a long day without you, my friend" },
    { time: 92,  text: "And I'll tell you all about it when I see you again" },
    { time: 98,  text: "We've come a long way from where we began" },
    { time: 105, text: "Oh, I'll tell you all about it when I see you again" },
    { time: 111, text: "When I see you again" },
    { time: 127, text: "So let the light guide your way, yeah" },
    { time: 133, text: "Hold every memory as you go" },
    { time: 139, text: "And every road you take" },
    { time: 142, text: "Will always lead you home, home" },
    { time: 153, text: "It's been a long day without you, my friend" },
    { time: 159, text: "And I'll tell you all about it when I see you again" },
    { time: 165, text: "We've come a long way from where we began" },
    { time: 172, text: "Oh, I'll tell you all about it when I see you again" },
    { time: 178, text: "When I see you again" },
    { time: 184, text: "Ooh-oh-oh-oh, ooh-oh-oh-oh" },
    { time: 202, text: "Yeah, when I see you again" },
    { time: 209, text: "Oh, I'll tell you all about it when I see you again" },
    { time: 215, text: "When I see you again" },
    { time: 226, text: "When I see you again" },
]
    },
    {
        id: 9,
        title: "Drag Me Down",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Drag Me Down - One Direction.mp3",
        videoBgSrc: "videos/Drag Me Down - One Direction.mp4",
        lyrics: [
    { time: 6,   text: "I've got fire for a heart" },
    { time: 8,   text: "I'm not scared of the dark" },
    { time: 10,  text: "You've never seen it look so easy" },
    { time: 13,  text: "I got a river for a soul" },
    { time: 15,  text: "And baby you're a boat" },
    { time: 17,  text: "Baby you're my only reason" },
    { time: 20,  text: "If I didn't have you there would be nothing left" },
    { time: 24,  text: "The shell of a man who could never be his best" },
    { time: 28,  text: "If I didn't have you, I'd never see the sun" },
    { time: 31,  text: "You taught me how to be someone, yeah" },
    { time: 35,  text: "All my life" },
    { time: 37,  text: "You stood by me" },
    { time: 39,  text: "When no one else was ever behind me" },
    { time: 42,  text: "All these lights" },
    { time: 44,  text: "They can't blind me" },
    { time: 46,  text: "With your love, nobody can drag me down" },
    { time: 49,  text: "All my life" },
    { time: 51,  text: "You stood by me" },
    { time: 53,  text: "When no one else was ever behind me" },
    { time: 56,  text: "All these lights" },
    { time: 58,  text: "They can't blind me" },
    { time: 60,  text: "With your love, nobody can drag me down" },
    { time: 64,  text: "Nobody, nobody" },
    { time: 67,  text: "Nobody can drag me down" },
    { time: 71,  text: "Nobody, nobody" },
    { time: 74,  text: "Nobody can drag me down" },
    { time: 81,  text: "I've got fire for a heart" },
    { time: 83,  text: "I'm not scared of the dark" },
    { time: 85,  text: "You've never seen it look so easy" },
    { time: 88,  text: "I got a river for a soul" },
    { time: 90,  text: "And baby you're a boat" },
    { time: 92,  text: "Baby you're my only reason" },
    { time: 95,  text: "If I didn't have you there would be nothing left" },
    { time: 98,  text: "The shell of a man who could never be his best" },
    { time: 102, text: "If I didn't have you, I'd never see the sun" },
    { time: 105, text: "You taught me how to be someone, yeah" },
    { time: 110, text: "All my life" },
    { time: 111, text: "You stood by me" },
    { time: 113, text: "When no one else was ever behind me" },
    { time: 116, text: "All these lights" },
    { time: 118, text: "They can't blind me" },
    { time: 120, text: "With your love, nobody can drag me down" },
    { time: 124, text: "All my life" },
    { time: 125, text: "You stood by me" },
    { time: 127, text: "When no one else was ever behind me" },
    { time: 130, text: "All these lights" },
    { time: 132, text: "They can't blind me" },
    { time: 134, text: "With your love, nobody can drag me down" },
    { time: 138, text: "Nobody, nobody" },
    { time: 141, text: "Nobody can drag me down" },
    { time: 144, text: "Nobody, nobody" },
    { time: 147, text: "Nobody can drag me down" },
    { time: 151, text: "Nobody, nobody" },
    { time: 154, text: "Nobody can drag me down" },
        ]
    },
    {
    id: 10,
        title: "Fallen",
        artist: "Lola Amour",
        album: "Lola Amour",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b42607713c1dd129afa9f350",
        audioSrc: "audio/Fallen - Lola Amour.mp3",
        videoBgSrc: "videos/Fallen - Lola Amour.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 18, text: "What if I told you that I've fallen?" },
            { time: 22.8, text: "And I like the way you say my name" },
            { time: 27.64, text: "My heart skips a beat when I hear you calling" },
            { time: 33, text: "And I like that it won’t go away" },
            { time: 39, text: "But nevermind, don’t wanna give you any trouble" },
            { time: 44.1, text: "Nevermind, nevermind" },
            { time: 49.08, text: "I’m okay with being by your side for as long as I can hide" },
            { time: 54.9, text: "What if I told you that I’ve fallen?" },
            { time: 76.92, text: "What if I told you that I’ve fallen?" },
            { time: 82, text: "A heart shaped arrow through my chest" },
            { time: 87, text: "I’ll make your breakfast every morning" },
            { time: 91.9, text: "And pick you up when you’re a mess" },
            { time: 99.22, text: "I know that it won’t ever stop" },
            { time: 102.5, text: "You know I’ll be there when you call me whether you like it or not" },
            { time: 107.75, text: "Without a warning, now I’m falling for this picture on my phone" },
            { time: 112.8, text: "But don’t mind me I’m just falling, I’ll get back up on my own" },
            { time: 118, text: "Please don’t say my name" },
            { time: 121.9, text: "Help me put out this flame" },
            { time: 127.3, text: "I’d rather hold onto this feeling that you don’t even believe in" },
            { time: 133.4, text: "What if I told you that I’ve fallen?" },
            { time: 156.3, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 161, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 166, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 171, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 176, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 179.9, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 184.9, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 190.1, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 193, text: "I said nevermind (I shouldn’t tell you that I’ve fallen)" },
        ]
    },
    {
        Id: 11,
    title: "Muli",
    artist: "Ace Banzuelo",
    album: "Muli",
    albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQx9trBe_3F3FXsX3TBLh-3eLurSXHc9DVVXe6lI6pZg&s&ec=121966374",
    audioSrc: "audio/Ace banzuelo - muli (secret verse) - (320 Kbps).mp3",
    videoBgSrc: "videos/muli.mp4",
    lyrics: [
    { time: 1.7,  text: "’Di maintindihan ang nadarama" },
    { time: 5.1,  text: "Sarili lang kausap, walang iba" },
    { time: 8.7,  text: "Kailangan mo raw lumayo sa akin" },
    { time: 11.9, text: "Wala ba tayong magagawa?" },
    { time: 15.3, text: "Kinalakihan nati’y iba" },
    { time: 19.0, text: "Ako sa TAKOT, ikaw sa AWA" },
    { time: 22.5, text: "Taimtim ang pag-ibig" },
    { time: 24.0, text: "’Di sang-ayon ang paligid" },
    { time: 25.8, text: "TINANGGAP KO NANG" },
    { time: 26.5, text: "WALA KA NA" },
    { time: 29.0, text: "Ginawa ko ’yon ng ilang taon" },
    { time: 32.0, text: "Nasasanay na ’kong mag-isa" },
    { time: 35.8, text: "May mga bagay na nakakaintindi" },
    { time: 39.0, text: "TAYO LANG DALAWA" },
    { time: 40.5, text: "WALANG-IBA!" },
    { time: 42.0, text: "Hindi (hindi)" },
    { time: 45.8, text: "Hindi ko kayang umibig muli" },
    { time: 49.0, text: "Habang-buhay na lang kitang hihintayin (hihintayin)" }
]
  },
    {
      id: 12,
    title: "Thinking of You",
    artist: "Katy Perry",
    album: "Thinking of You",
    albumArtUrl: "https://i1.sndcdn.com/artworks-000071424952-yr3exh-t500x500.jpg",
    audioSrc: "audio/Katy Perry - Thinking Of You (Official).mp3",
    videoBgSrc: "videos/thinking of you.mp4",
    lyrics: [
  { time: 13.71, text: "Comparisons are easily done" },
  { time: 20.06, text: "Once you've had a taste of perfection" },
  { time: 26.20, text: "Like an apple hanging from a tree" },
  { time: 32.71, text: "I picked the ripest one" },
  { time: 36.29, text: "I still got the seed" },
  { time: 39.53, text: "You said move on, where do I go?" },
  { time: 43.06, text: "I guess second best is all I will know" },
  { time: 47.22, text: "'Cause when I'm with him, I am thinking of you" },
  { time: 51.82, text: "Thinking of you" },
  { time: 54.75, text: "What you would do if you were the one" },
  { time: 58.53, text: "Who was spending the night" },
  { time: 62.21, text: "Oh, I wish that I" },
  { time: 64.80, text: "Was looking into your eyes" },
  { time: 81.27, text: "You're like an Indian summer" },
  { time: 85.48, text: "In the middle of winter" },
  { time: 88.83, text: "Like a hard candy" },
  { time: 92.00, text: "With a surprise center" },
  { time: 95.40, text: "How do I get better" },
  { time: 98.74, text: "Once I've had the best" },
  { time: 101.58, text: "You said there's tons of fish in the water" },
  { time: 105.20, text: "So the waters I will test" },
  { time: 109.76, text: "He kissed my lips, I taste your mouth" },
  { time: 115.79, text: "He pulled me in" },
  { time: 117.53, text: "I was disgusted with myself" },
  { time: 121.18, text: "'Cause when I'm with him, I am thinking of you" },
  { time: 125.77, text: "Thinking of you" },
  { time: 128.86, text: "What you would do if you were the one" },
  { time: 132.54, text: "Who was spending the night" },
  { time: 136.28, text: "Oh, I wish that I" },
  { time: 138.82, text: "Was looking into your eyes" },
  { time: 160.03, text: "You're the best" },
  { time: 162.50, text: "And yes, I do regret" },
  { time: 164.98, text: "How I could let myself" },
  { time: 167.50, text: "Let you go" },
  { time: 169.98, text: "Now the lesson's learned" },
  { time: 173.52, text: "I touched it, I was burned" },
  { time: 176.48, text: "Oh, I think you should know" },
  { time: 181.20, text: "'Cause when I'm with him, I am thinking of you" },
  { time: 185.76, text: "Thinking of you" },
  { time: 188.82, text: "What you would do if you were the one" },
  { time: 192.49, text: "Who was spending the night" },
  { time: 196.31, text: "Oh, I wish that I" },
  { time: 198.84, text: "Was looking into your eyes" },
  { time: 203.02, text: "Looking into your eyes" },
  { time: 209.97, text: "Oh, won't you walk through" },
  { time: 212.49, text: "And bust in the door" },
  { time: 214.98, text: "And take me away" },
  { time: 217.50, text: "Oh, no more mistakes" },
  { time: 220.49, text: "'Cause in your eyes I'd like to stay" }
]
  },
 ];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Make sure the page details are hidden
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide background video
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning home
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Show background video

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Empty src if there is no custom video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Important Changes here ---
        // When a song item is clicked, immediately load & play the song then display the player page
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Jump to the music player page
        });

        // Event listener for hover
        listItem.addEventListener('mouseenter', () => {
            // Only enable background video if we are on the home page
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Add class for body background color
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Hide background video only if we are on home page
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Pause video when mouse leaves
                backgroundVideo.src = ""; // Empty src to prevent playing in the background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Remove body background color class
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Call the render Lyrics function
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';

    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML =
            "<p>Lyrics are not available for this song.</p>";
        return;
    }

    // Sort lyrics by timestamp
    const sortedLyrics = [...lyrics].sort(
        (a, b) => Number(a.time) - Number(b.time)
    );

    sortedLyrics.forEach(line => {
        const span = document.createElement('span');

        span.textContent = line.text;
        span.setAttribute('data-time', line.time);
        span.classList.add('lyric-line');

        lyricsContainer.appendChild(span);
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Update background video
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
       // --- Logic highlight lyrics ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Determine when this line of lyrics ends. If this is the last line, assume it ends at the end of the song.
            // Or, better, assume it ends just before the next line starts.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lyrics only if highlighted line is not visible ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Check if the row is outside the container viewport
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll so that the nearest row appears in the viewport, with a smooth animation
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Add log for initialization
    console.log("Songs array length:", songs.length); // Check the number of songs
    console.log("songListElement:", songListElement); // Check if song List Element is found

    renderSongList(); // This is what renders the track list
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // This will be displayed if the songs array is empty
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Set the initial speed
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Start from the playlist page
    console.log("Initialization complete."); // Log completed initialization
}

init();
