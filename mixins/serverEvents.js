/**
 * Mixin to listen backend events (Laravel Echo - realtime)
 */
export default {
    data(){
        return {
            coreId: null,
            multipartFormData: false
        }
    },
    computed: {
        evenChanelPrefix(){
            return this.$store.state.initializedId;
        },
        userId(){
            return this.$store.state.authData.id;
        },
    },
    methods: {
        listen(channel, event, cbFn=null){
            this.$echo.channel(`${this.evenChanelPrefix}.${channel}`).listen(`.${event}`, (payload)=>{
                return cbFn===null ? null : cbFn(payload);
            });
        }
    },
};
