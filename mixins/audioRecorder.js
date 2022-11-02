import MediaStreamRecorder from "msr";
import { watchStreamAudioLevel } from 'stream-audio-level'

export default {
    data(){
        return {
            mediaRecorder: null,
            minimalSoundLevel: 15,
            avgAudioLevel: [],
            previousAudio: null,
            firstStorage: true,
            wasStored: false,
            speechId: null,
            stream: null,
        }
    },
    methods: {
        async start(){
            navigator.getUserMedia({audio: true}, this.mediaRecord, this.mediaError);
        },
        async stop(){
            await this.mediaRecorder.stop();
            this.stream.getTracks().forEach(function(track) {
                track.stop();
            })
        },
        mediaRecord(stream){
            this.stream = stream;
            this.mediaRecorder = new MediaStreamRecorder(this.stream);
            this.mediaRecorder.bufferSize = 0;
            this.mediaRecorder.mimeType = 'audio/wav';
            watchStreamAudioLevel(this.stream, (v) => this.avgAudioLevel.push(v))

            this.mediaRecorder.ondataavailable =  async (blob) => {

                if(this.shouldStore()){
                    if(this.firstStorage){
                        this.firstStorage = false;
                        this.speechId = this.getId();
                        if(this.previousAudio) {
                            await this.storeAudio(this.previousAudio, this.speechId);
                        }
                    }
                    await this.storeAudio(blob, this.speechId);
                    this.wasStored = true;

                }else{

                    if(this.wasStored){
                        await this.storeAudio(blob, this.speechId, true);
                    }
                    this.wasStored = false;
                    this.firstStorage = true;
                }
                this.avgAudioLevel = [];
                this.previousAudio = blob;
            };
            this.mediaRecorder.start(3000);
        },
        shouldStore(){
            const sumLevels = this.avgAudioLevel.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
            );
            return (sumLevels/this.avgAudioLevel.length)>this.minimalSoundLevel;
        },
        mediaError(e){
            console.error('media error', e);
        },
        getId() {
            return Math.random().toString(36).substring(2, 12);
        },
    }
};
