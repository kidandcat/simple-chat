var chat = new Vue({
    el: '#chat',
    data: {
        newMsg: '',
        messages: [

        ]
    },
    methods: {
        addMsg: function(msg, user, me) {
            this.messages.push({ text: msg, user: user, me: (me)?me:false });
            this.sendMsg(msg);
            this.newMsg = '';
        },
        sendMsg: function(msg) {
            chatSend(msg);
        },
        myMsg: function() {
            var msg = this.newMsg.trim();
            if (msg) {
                this.addMsg(msg, 'Yo', true);
            }
            this.newMsg = '';
        }
    }
});